import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/10 via-background to-primary-glow/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-primary-glow fill-current" />
            ))}
          </div>
          <p className="text-muted-foreground text-lg">
            "This platform transformed how we build web applications. Simply amazing!"
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            - Sarah Johnson, Lead Developer
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary-glow bg-clip-text text-transparent">
          Ready to Get Started?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are already building amazing applications. 
          Start your journey today and see the difference.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            Start Building Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary/30 hover:border-primary">
            View Pricing
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <span>✓ Free 14-day trial</span>
          <span>✓ No credit card required</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
};