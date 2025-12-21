

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          🍔 QuickBites - Food Delivery Application
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 text-center">
          A full-stack food delivery web application built with React, TypeScript, Tailwind CSS, and Supabase.
        </p>

        {/* Table of Contents */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">📋 Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
            <li>Project Overview</li>
            <li>Tech Stack</li>
            <li>Architecture</li>
            <li>Database Schema</li>
            <li>Features</li>
            <li>Routes</li>
            <li>Authentication</li>
            <li>Role-Based Access Control</li>
            <li>Payment System</li>
            <li>State Management</li>
          </ol>
        </section>

        {/* Project Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">🚀 Project Overview</h2>
          <p className="text-muted-foreground mb-4">
            QuickBites is a comprehensive food delivery platform designed for the Bangladeshi market featuring:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Online Food Ordering</strong> - Browse menu and place orders</li>
            <li><strong>Multiple Payment Options</strong> - Cash on Delivery + bKash</li>
            <li><strong>Multi-Role System</strong> - Admin, Employee, User</li>
            <li><strong>Responsive Design</strong> - Mobile + Desktop optimized</li>
            <li><strong>Dark/Light Theme</strong> - User preference support</li>
            <li><strong>Real-time Notifications</strong> - Order updates and messages</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">🛠️ Tech Stack</h2>
          
          <h3 className="text-xl font-semibold mb-3">Frontend</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-border rounded-lg">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-2 text-left border-b">Technology</th>
                  <th className="px-4 py-2 text-left border-b">Version</th>
                  <th className="px-4 py-2 text-left border-b">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="px-4 py-2">React</td><td className="px-4 py-2">18.3.1</td><td className="px-4 py-2">UI Framework</td></tr>
                <tr className="border-b"><td className="px-4 py-2">TypeScript</td><td className="px-4 py-2">-</td><td className="px-4 py-2">Type Safety</td></tr>
                <tr className="border-b"><td className="px-4 py-2">Tailwind CSS</td><td className="px-4 py-2">-</td><td className="px-4 py-2">Styling</td></tr>
                <tr className="border-b"><td className="px-4 py-2">Shadcn/UI</td><td className="px-4 py-2">-</td><td className="px-4 py-2">Component Library</td></tr>
                <tr className="border-b"><td className="px-4 py-2">React Router</td><td className="px-4 py-2">6.30.1</td><td className="px-4 py-2">Navigation</td></tr>
                <tr className="border-b"><td className="px-4 py-2">React Query</td><td className="px-4 py-2">5.83.0</td><td className="px-4 py-2">Server State Management</td></tr>
                <tr className="border-b"><td className="px-4 py-2">Lucide React</td><td className="px-4 py-2">0.462.0</td><td className="px-4 py-2">Icons</td></tr>
                <tr><td className="px-4 py-2">next-themes</td><td className="px-4 py-2">0.3.0</td><td className="px-4 py-2">Theme Management</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3">Backend (Supabase)</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-2 text-left border-b">Feature</th>
                  <th className="px-4 py-2 text-left border-b">Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="px-4 py-2">PostgreSQL</td><td className="px-4 py-2">Database</td></tr>
                <tr className="border-b"><td className="px-4 py-2">Row Level Security</td><td className="px-4 py-2">Data Protection</td></tr>
                <tr className="border-b"><td className="px-4 py-2">Auth</td><td className="px-4 py-2">User Authentication</td></tr>
                <tr className="border-b"><td className="px-4 py-2">Edge Functions</td><td className="px-4 py-2">Serverless Logic</td></tr>
                <tr><td className="px-4 py-2">Realtime</td><td className="px-4 py-2">Live Updates</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Database Schema */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">🗄️ Database Schema</h2>
          
          <h3 className="text-xl font-semibold mb-3">profiles</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-border rounded-lg text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-3 py-2 text-left border-b">Column</th>
                  <th className="px-3 py-2 text-left border-b">Type</th>
                  <th className="px-3 py-2 text-left border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="px-3 py-2">id</td><td className="px-3 py-2">uuid (PK)</td><td className="px-3 py-2">References auth.users</td></tr>
                <tr className="border-b"><td className="px-3 py-2">full_name</td><td className="px-3 py-2">text</td><td className="px-3 py-2">User's full name</td></tr>
                <tr className="border-b"><td className="px-3 py-2">username</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Unique username</td></tr>
                <tr className="border-b"><td className="px-3 py-2">phone</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Phone number</td></tr>
                <tr className="border-b"><td className="px-3 py-2">address</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Delivery address</td></tr>
                <tr className="border-b"><td className="px-3 py-2">created_at</td><td className="px-3 py-2">timestamp</td><td className="px-3 py-2">Creation date</td></tr>
                <tr><td className="px-3 py-2">updated_at</td><td className="px-3 py-2">timestamp</td><td className="px-3 py-2">Last update</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3">user_roles</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-border rounded-lg text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-3 py-2 text-left border-b">Column</th>
                  <th className="px-3 py-2 text-left border-b">Type</th>
                  <th className="px-3 py-2 text-left border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="px-3 py-2">id</td><td className="px-3 py-2">uuid (PK)</td><td className="px-3 py-2">Primary key</td></tr>
                <tr className="border-b"><td className="px-3 py-2">user_id</td><td className="px-3 py-2">uuid (FK)</td><td className="px-3 py-2">References auth.users</td></tr>
                <tr><td className="px-3 py-2">role</td><td className="px-3 py-2">app_role</td><td className="px-3 py-2">admin, moderator, user, employee</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3">products</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-border rounded-lg text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-3 py-2 text-left border-b">Column</th>
                  <th className="px-3 py-2 text-left border-b">Type</th>
                  <th className="px-3 py-2 text-left border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="px-3 py-2">id</td><td className="px-3 py-2">uuid (PK)</td><td className="px-3 py-2">Primary key</td></tr>
                <tr className="border-b"><td className="px-3 py-2">name</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Product name</td></tr>
                <tr className="border-b"><td className="px-3 py-2">description</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Product description</td></tr>
                <tr className="border-b"><td className="px-3 py-2">price</td><td className="px-3 py-2">decimal</td><td className="px-3 py-2">Price in BDT</td></tr>
                <tr className="border-b"><td className="px-3 py-2">category</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Product category</td></tr>
                <tr><td className="px-3 py-2">image_url</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Product image URL</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3">orders</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-border rounded-lg text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-3 py-2 text-left border-b">Column</th>
                  <th className="px-3 py-2 text-left border-b">Type</th>
                  <th className="px-3 py-2 text-left border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="px-3 py-2">id</td><td className="px-3 py-2">uuid (PK)</td><td className="px-3 py-2">Primary key</td></tr>
                <tr className="border-b"><td className="px-3 py-2">user_id</td><td className="px-3 py-2">uuid (FK)</td><td className="px-3 py-2">References auth.users</td></tr>
                <tr className="border-b"><td className="px-3 py-2">items</td><td className="px-3 py-2">jsonb</td><td className="px-3 py-2">Order items array</td></tr>
                <tr className="border-b"><td className="px-3 py-2">total_amount</td><td className="px-3 py-2">decimal</td><td className="px-3 py-2">Total order value</td></tr>
                <tr className="border-b"><td className="px-3 py-2">status</td><td className="px-3 py-2">order_status</td><td className="px-3 py-2">Order status</td></tr>
                <tr className="border-b"><td className="px-3 py-2">payment_method</td><td className="px-3 py-2">text</td><td className="px-3 py-2">cod / bkash</td></tr>
                <tr><td className="px-3 py-2">payment_status</td><td className="px-3 py-2">text</td><td className="px-3 py-2">pending / verified / failed</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">✨ Features</h2>
          
          <h3 className="text-xl font-semibold mb-3">User Features</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
            <li>Browse food menu with categories</li>
            <li>Add items to cart</li>
            <li>Place orders with delivery details</li>
            <li>Track order status</li>
            <li>View order history</li>
            <li>Send messages to admin</li>
            <li>Receive notifications</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Admin Features</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
            <li>Dashboard with analytics</li>
            <li>Manage products (CRUD)</li>
            <li>Manage orders (update status)</li>
            <li>Manage users and roles</li>
            <li>View and reply to messages</li>
            <li>Verify bKash payments</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Employee Features</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>View assigned orders</li>
            <li>Update order status</li>
            <li>View delivery details</li>
          </ul>
        </section>

        {/* Routes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">🛤️ Routes</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-3 py-2 text-left border-b">Path</th>
                  <th className="px-3 py-2 text-left border-b">Component</th>
                  <th className="px-3 py-2 text-left border-b">Access</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="px-3 py-2">/</td><td className="px-3 py-2">Home</td><td className="px-3 py-2">Public</td></tr>
                <tr className="border-b"><td className="px-3 py-2">/cart</td><td className="px-3 py-2">Cart</td><td className="px-3 py-2">Public</td></tr>
                <tr className="border-b"><td className="px-3 py-2">/order</td><td className="px-3 py-2">PlaceOrder</td><td className="px-3 py-2">Authenticated</td></tr>
                <tr className="border-b"><td className="px-3 py-2">/orders</td><td className="px-3 py-2">OrderHistory</td><td className="px-3 py-2">Authenticated</td></tr>
                <tr className="border-b"><td className="px-3 py-2">/profile</td><td className="px-3 py-2">Profile</td><td className="px-3 py-2">Authenticated</td></tr>
                <tr className="border-b"><td className="px-3 py-2">/messages</td><td className="px-3 py-2">Messages</td><td className="px-3 py-2">Authenticated</td></tr>
                <tr className="border-b"><td className="px-3 py-2">/admin</td><td className="px-3 py-2">AdminDashboard</td><td className="px-3 py-2">Admin Only</td></tr>
                <tr className="border-b"><td className="px-3 py-2">/admin/products</td><td className="px-3 py-2">ProductManagement</td><td className="px-3 py-2">Admin Only</td></tr>
                <tr className="border-b"><td className="px-3 py-2">/admin/users</td><td className="px-3 py-2">AdminUserManagement</td><td className="px-3 py-2">Admin Only</td></tr>
                <tr className="border-b"><td className="px-3 py-2">/admin/messages</td><td className="px-3 py-2">AdminMessages</td><td className="px-3 py-2">Admin Only</td></tr>
                <tr className="border-b"><td className="px-3 py-2">/admin/payments</td><td className="px-3 py-2">PaymentVerification</td><td className="px-3 py-2">Admin Only</td></tr>
                <tr><td className="px-3 py-2">/employee</td><td className="px-3 py-2">EmployeeDashboard</td><td className="px-3 py-2">Employee/Admin</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">🔐 Authentication</h2>
          <p className="text-muted-foreground mb-4">
            Authentication is handled using Supabase Auth with email/password sign-in.
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Sign up with email and password</li>
            <li>Sign in with existing credentials</li>
            <li>Password reset via email</li>
            <li>Session persistence with automatic refresh</li>
          </ul>
        </section>

        {/* Role-Based Access Control */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">👥 Role-Based Access Control</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-3 py-2 text-left border-b">Role</th>
                  <th className="px-3 py-2 text-left border-b">Permissions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2 font-medium">Admin</td>
                  <td className="px-3 py-2">Full access to all features, manage users, products, orders</td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2 font-medium">Employee</td>
                  <td className="px-3 py-2">View and update orders, access employee dashboard</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">User</td>
                  <td className="px-3 py-2">Browse menu, place orders, view order history, send messages</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Payment System */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">💳 Payment System</h2>
          
          <h3 className="text-xl font-semibold mb-3">Payment Methods</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
            <li><strong>Cash on Delivery (COD)</strong> - Pay when order arrives</li>
            <li><strong>bKash</strong> - Mobile payment with transaction ID verification</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Payment Status Flow</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li><code className="bg-muted px-1 rounded">pending</code> - Awaiting payment/verification</li>
            <li><code className="bg-muted px-1 rounded">verified</code> - Payment confirmed</li>
            <li><code className="bg-muted px-1 rounded">failed</code> - Payment failed/rejected</li>
          </ul>
        </section>

        {/* State Management */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">📦 State Management</h2>
          <p className="text-muted-foreground mb-4">
            The application uses React Context API for global state management:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li><strong>AuthContext</strong> - User authentication state and methods</li>
            <li><strong>StoreContext</strong> - Cart items, products, and cart operations</li>
          </ul>
        </section>

        {/* Footer */}
        <div className="text-center text-muted-foreground text-sm mt-12 pt-8 border-t">
          <p>© {new Date().getFullYear()} QuickBites. Built with ❤️ in Bangladesh.</p>
        </div>
      </div>
  );
};

export default About;
