# 🍔 QuickBite - Food Delivery Application

A full-stack food delivery web application built with React, TypeScript, Tailwind CSS, and Supabase.

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Tech Stack](#-tech-stack)
3. [Architecture](#-architecture)
4. [Database Schema](#-database-schema)
5. [Features](#-features)
6. [Routes](#-routes)
7. [Project Structure](#-project-structure)
8. [Authentication](#-authentication)
9. [Role-Based Access Control](#-role-based-access-control)
10. [Payment System](#-payment-system)
11. [State Management](#-state-management)
12. [Getting Started](#-getting-started)

---

## 🎯 Project Overview

**QuickBite** is a comprehensive food delivery platform designed for the Bangladeshi market featuring:

- 🛒 **Online Food Ordering** - Browse menu and place orders
- 💳 **Multiple Payment Options** - Cash on Delivery + bKash
- 👥 **Multi-Role System** - Admin, Employee, User
- 📱 **Responsive Design** - Mobile + Desktop optimized
- 🌓 **Dark/Light Theme** - User preference support
- 🔔 **Real-time Notifications** - Order updates and messages

---

## 🛠 Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Framework |
| TypeScript | - | Type Safety |
| Tailwind CSS | - | Styling |
| Shadcn/UI | - | Component Library |
| React Router | 6.30.1 | Navigation |
| React Query | 5.83.0 | Server State Management |
| Lucide React | 0.462.0 | Icons |
| next-themes | 0.3.0 | Theme Management |

### Backend (Supabase)

| Feature | Usage |
|---------|-------|
| PostgreSQL | Database |
| Row Level Security | Data Protection |
| Auth | User Authentication |
| Edge Functions | Serverless Logic |
| Realtime | Live Updates |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (React + Vite)                   │
├─────────────────────────────────────────────────────────────┤
│  App.tsx                                                     │
│    ├── AuthContext (Authentication State)                   │
│    ├── StoreContext (Cart & Products State)                 │
│    └── React Router (Navigation)                            │
│          └── Pages → Components                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Backend (Supabase)                        │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ PostgreSQL   │  │ Auth Service │  │ Edge         │       │
│  │ Database     │  │              │  │ Functions    │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│  ┌──────────────┐                                           │
│  │ Realtime     │                                           │
│  │ Subscriptions│                                           │
│  └──────────────┘                                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🗄 Database Schema

### Tables

#### `profiles`
| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | References auth.users |
| full_name | text | User's full name |
| username | text | Unique username |
| phone | text | Phone number |
| address | text | Delivery address |
| created_at | timestamp | Creation date |
| updated_at | timestamp | Last update |

#### `user_roles`
| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Primary key |
| user_id | uuid (FK) | References auth.users |
| role | app_role | admin, moderator, user, employee |

#### `products`
| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Primary key |
| name | text | Product name |
| description | text | Product description |
| price | decimal | Price in BDT |
| category | text | Product category |
| image_url | text | Product image URL |
| is_available | boolean | Availability status |
| created_at | timestamp | Creation date |

#### `orders`
| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Primary key |
| user_id | uuid (FK) | References auth.users |
| items | json | Array of order items |
| total_amount | decimal | Total order amount |
| status | text | Order status |
| payment_method | text | cod or bkash |
| payment_status | text | Payment status |
| transaction_id | text | bKash transaction ID |
| delivery_address | text | Delivery address |
| phone | text | Contact phone |
| created_at | timestamp | Order date |

#### `messages`
| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Primary key |
| user_id | uuid (FK) | Sender ID |
| subject | text | Message subject |
| message | text | Message content |
| reply | text | Admin reply |
| recipient_type | text | admin, employee, etc. |
| recipient_id | uuid | Specific recipient |
| is_read | boolean | Read status |
| created_at | timestamp | Sent date |
| replied_at | timestamp | Reply date |

#### `notifications`
| Column | Type | Description |
|--------|------|-------------|
| id | uuid (PK) | Primary key |
| user_id | uuid (FK) | Recipient ID |
| type | text | Notification type |
| title | text | Notification title |
| message | text | Notification content |
| data | json | Additional data |
| is_read | boolean | Read status |
| created_at | timestamp | Creation date |

---

## ✨ Features

### 👤 User Features

| Feature | Description |
|---------|-------------|
| **Authentication** | Email/Password sign up and login |
| **Menu Browsing** | Browse food items by category |
| **Shopping Cart** | Add/remove items, quantity management |
| **Order Placement** | Complete checkout with delivery info |
| **Payment Options** | Cash on Delivery + bKash |
| **Order History** | View past orders and status |
| **Profile Management** | Update personal information |
| **Messaging** | Contact admin/employees |
| **Notifications** | Real-time order updates |

### 🛡️ Admin Features

| Feature | Description |
|---------|-------------|
| **Dashboard** | Overview stats (users, orders, revenue) |
| **Order Management** | Update order status |
| **Product Management** | Add, edit, delete products |
| **User Management** | View registered users |
| **Payment Verification** | Verify bKash payments |
| **Message Center** | Reply to user messages |

### 👨‍💼 Employee Features

| Feature | Description |
|---------|-------------|
| **Dashboard** | Order statistics |
| **Order Processing** | View and update order status |
| **Customer Info** | See customer details |

---

## 🛣 Routes

| Route | Component | Access | Description |
|-------|-----------|--------|-------------|
| `/` | Home | Public | Landing page with menu |
| `/cart` | Cart | Public | Shopping cart |
| `/order` | PlaceOrder | Authenticated | Checkout page |
| `/orders` | OrderHistory | Authenticated | User's past orders |
| `/profile` | Profile | Authenticated | Profile settings |
| `/messages` | Messages | Authenticated | User messaging |
| `/admin` | AdminDashboard | Admin Only | Admin overview |
| `/admin/products` | ProductManagement | Admin Only | CRUD products |
| `/admin/users` | AdminUserManagement | Admin Only | View users |
| `/admin/messages` | AdminMessages | Admin Only | Reply messages |
| `/admin/payments` | PaymentVerification | Admin Only | Verify bKash |
| `/employee` | EmployeeDashboard | Employee/Admin | Order processing |
| `*` | NotFound | Public | 404 page |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Shadcn UI Components (50+)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── table.tsx
│   │   └── ...
│   │
│   ├── Navbar.tsx             # Navigation bar
│   ├── Footer.tsx             # Footer
│   ├── Hero.tsx               # Hero section
│   ├── HowItWorks.tsx         # Process steps
│   ├── MenuCategories.tsx     # Category tabs
│   ├── FoodDisplay.tsx        # Food grid
│   ├── FoodCard.tsx           # Individual food item
│   ├── AppDownload.tsx        # App promo section
│   ├── LoginPopup.tsx         # Auth modal
│   └── NotificationBell.tsx   # Notification dropdown
│
├── context/
│   ├── AuthContext.tsx        # Authentication state
│   └── StoreContext.tsx       # Cart + Products state
│
├── hooks/
│   ├── useAdminCheck.ts       # Check admin role
│   ├── useRoleCheck.ts        # Check any role
│   ├── use-mobile.tsx         # Mobile detection
│   └── use-toast.ts           # Toast notifications
│
├── pages/
│   ├── Home.tsx               # Landing page
│   ├── Cart.tsx               # Shopping cart
│   ├── PlaceOrder.tsx         # Checkout
│   ├── OrderHistory.tsx       # Order history
│   ├── Profile.tsx            # User profile
│   ├── Messages.tsx           # User messages
│   ├── AdminDashboard.tsx     # Admin dashboard
│   ├── AdminMessages.tsx      # Admin messages
│   ├── AdminUserManagement.tsx # User management
│   ├── ProductManagement.tsx  # Product CRUD
│   ├── PaymentVerification.tsx # bKash verification
│   ├── EmployeeDashboard.tsx  # Employee panel
│   └── NotFound.tsx           # 404 page
│
├── integrations/
│   └── supabase/
│       ├── client.ts          # Supabase client
│       └── types.ts           # Generated types
│
├── lib/
│   └── utils.ts               # Utility functions
│
├── assets/                    # Static images
│   ├── pizza.jpg
│   ├── salad.jpg
│   ├── wings.jpg
│   ├── dessert.jpg
│   ├── bowl.jpg
│   └── hero-food.jpg
│
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
└── index.css                  # Global styles + Design tokens
```

---

## 🔐 Authentication

### Auth Flow

```
User → Login Popup → Supabase Auth → Session → Redirect
```

### AuthContext API

```typescript
interface AuthContextType {
  user: User | null;           // Current user
  session: Session | null;     // Auth session
  loading: boolean;            // Loading state
  signUp: (email, password, fullName) => Promise<{error}>;
  signIn: (email, password) => Promise<{error}>;
  signOut: () => Promise<void>;
}
```

### Usage

```typescript
import { useAuth } from "@/context/AuthContext";

const Component = () => {
  const { user, signIn, signOut } = useAuth();
  
  if (!user) {
    return <LoginButton />;
  }
  
  return <UserProfile user={user} />;
};
```

---

## 👥 Role-Based Access Control

### Role Types

```sql
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user', 'employee');
```

### Security Function

```sql
CREATE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
```

### Role Check Hooks

```typescript
// Check admin role
import { useAdminCheck } from "@/hooks/useAdminCheck";
const { isAdmin, loading } = useAdminCheck();

// Check employee role
import { useEmployeeCheck } from "@/hooks/useRoleCheck";
const { hasRole: isEmployee, loading } = useEmployeeCheck();
```

### Protected Route Example

```typescript
const AdminPage = () => {
  const { isAdmin, loading } = useAdminCheck();
  
  if (loading) return <Loader />;
  if (!isAdmin) {
    navigate('/');
    return null;
  }
  
  return <AdminContent />;
};
```

---

## 💳 Payment System

### Payment Methods

| Method | Status Flow |
|--------|-------------|
| **Cash on Delivery** | Order → Pending → Delivered → Paid |
| **bKash** | Order → Awaiting Verification → Verified/Rejected |

### bKash Payment Flow

```
1. User selects bKash at checkout
2. System shows bKash number: 01576545387
3. User sends money via bKash app
4. User enters Transaction ID
5. Order created with status: "awaiting_verification"
6. Admin verifies payment in Payment Verification page
7. User receives notification
8. Order confirmed or cancelled
```

### Payment Status Values

| Status | Description |
|--------|-------------|
| `pending` | COD - awaiting delivery |
| `awaiting_verification` | bKash - admin needs to verify |
| `verified` | bKash payment confirmed |
| `rejected` | bKash payment failed |

---

## 🗃 State Management

### Global State (Context API)

#### AuthContext
- User authentication state
- Session management
- Auth functions (signIn, signUp, signOut)

#### StoreContext
- Food list (from Supabase + defaults)
- Cart items (localStorage persisted)
- Cart functions (add, remove, clear, totals)

### StoreContext API

```typescript
interface StoreContextType {
  foodList: FoodItem[];
  foodLoading: boolean;
  refreshFoodList: () => Promise<void>;
  cartItems: CartItem;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
  clearCart: () => void;
}
```

### Cart Persistence

Cart data is stored in `localStorage` with key `quickbites_cart` and syncs automatically.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or bun
- Supabase account

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run dev
```

### Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

### Database Setup

1. Create a new Supabase project
2. Run the migration files in `supabase/migrations/`
3. Set up Row Level Security policies
4. Create the `has_role` function

---

## 📊 Order Status Flow

```
pending → confirmed → preparing → out_for_delivery → delivered
                                                   ↘ cancelled
```

| Status | Description | Icon |
|--------|-------------|------|
| pending | Order received | ⏳ |
| confirmed | Order confirmed | ✓ |
| preparing | Being prepared | 👨‍🍳 |
| out_for_delivery | On the way | 🚚 |
| delivered | Completed | ✓ |
| cancelled | Cancelled | ✗ |

---

## 🎨 Design System

### Theme Colors (HSL)

```css
--primary          /* Brand color */
--background       /* Page background */
--foreground       /* Text color */
--muted            /* Muted surfaces */
--accent           /* Accent color */
--destructive      /* Error/danger */
--success          /* Success states */
```

### Animations

- `animate-fade-in` - Fade in with slide
- `animate-scale-in` - Scale up effect
- `gradient-hero` - Gradient background

### Responsive Breakpoints

- Mobile: < 768px
- Desktop: ≥ 768px

---

## 📝 API Examples

### Fetch Products

```typescript
const { data, error } = await supabase
  .from("products")
  .select("*")
  .eq("is_available", true);
```

### Create Order

```typescript
const { error } = await supabase.from("orders").insert({
  user_id: user.id,
  items: cartItems,
  total_amount: total,
  delivery_address: address,
  payment_method: "cod",
  status: "pending"
});
```

### Realtime Subscription

```typescript
const channel = supabase
  .channel("orders")
  .on(
    "postgres_changes",
    { event: "*", schema: "public", table: "orders" },
    (payload) => {
      console.log("Change received!", payload);
    }
  )
  .subscribe();
```

---

## 📄 License

This project is proprietary and confidential.

---

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

---

Built with ❤️ using [Lovable](https://lovable.dev)
