import { Utensils, Truck, CreditCard, Users, Moon, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const features = [
    {
      icon: Utensils,
      title: "Online Ordering",
      description: "Browse our menu and place orders easily from home"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick delivery right to your doorstep"
    },
    {
      icon: CreditCard,
      title: "Multiple Payments",
      description: "Cash on Delivery and bKash payment options"
    },
    {
      icon: Users,
      title: "Multi-Role System",
      description: "Separate panels for Admin, Employee, and Customers"
    },
    {
      icon: Moon,
      title: "Dark/Light Theme",
      description: "Choose your preferred theme for comfortable viewing"
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Instant updates on orders and messages"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-hero mb-6">
          <span className="text-4xl">🍔</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Quick<span className="text-primary">Bites</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A modern food delivery platform built for Bangladesh. 
          Order easily, get fast delivery.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="bg-muted/50 rounded-xl p-8 mb-12">
        <h2 className="text-xl font-bold mb-4 text-center">Built With</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["React", "TypeScript", "Tailwind CSS", "Supabase", "Shadcn/UI"].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 bg-background rounded-full text-sm font-medium border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Start ordering now
        </p>
        <Link to="/">
          <Button size="lg" className="gap-2">
            <Utensils className="h-5 w-5" />
            View Menu
          </Button>
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center text-muted-foreground text-sm mt-12 pt-8 border-t">
        <p>© {new Date().getFullYear()} QuickBites. Made with ❤️ in Bangladesh.</p>
      </div>
    </div>
  );
};

export default About;
