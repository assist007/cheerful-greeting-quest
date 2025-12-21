import { Utensils, Truck, CreditCard, Users, Moon, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const features = [
    {
      icon: Utensils,
      title: "অনলাইন অর্ডার",
      description: "ঘরে বসে মেনু দেখুন এবং সহজে অর্ডার করুন"
    },
    {
      icon: Truck,
      title: "দ্রুত ডেলিভারি",
      description: "আপনার দরজায় দ্রুত খাবার পৌঁছে দিই"
    },
    {
      icon: CreditCard,
      title: "একাধিক পেমেন্ট",
      description: "ক্যাশ অন ডেলিভারি ও বিকাশ পেমেন্ট সুবিধা"
    },
    {
      icon: Users,
      title: "মাল্টি-রোল সিস্টেম",
      description: "অ্যাডমিন, এমপ্লয়ী এবং কাস্টমার আলাদা প্যানেল"
    },
    {
      icon: Moon,
      title: "ডার্ক/লাইট থিম",
      description: "আপনার পছন্দমতো থিম ব্যবহার করুন"
    },
    {
      icon: Bell,
      title: "রিয়েল-টাইম নোটিফিকেশন",
      description: "অর্ডার আপডেট এবং মেসেজ তাৎক্ষণিক জানুন"
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
          বাংলাদেশের জন্য তৈরি একটি আধুনিক ফুড ডেলিভারি প্ল্যাটফর্ম। 
          সহজে অর্ডার করুন, দ্রুত ডেলিভারি পান।
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

      {/* Tech Stack - Simple */}
      <div className="bg-muted/50 rounded-xl p-8 mb-12">
        <h2 className="text-xl font-bold mb-4 text-center">তৈরি করা হয়েছে</h2>
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
          এখনই অর্ডার শুরু করুন
        </p>
        <Link to="/">
          <Button size="lg" className="gap-2">
            <Utensils className="h-5 w-5" />
            মেনু দেখুন
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
