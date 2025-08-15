import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";
import schoolHero from "@/assets/school-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-background pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${schoolHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-10 animate-float">
        <BookOpen className="w-8 h-8 text-primary opacity-60" />
      </div>
      <div className="absolute top-48 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Award className="w-6 h-6 text-secondary opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Users className="w-5 h-5 text-primary-light opacity-80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <BookOpen className="w-6 h-6 text-primary mr-2" />
          <span className="text-primary font-medium">Excellence in Education</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent leading-tight">
          Shape Your
          <br />
          <span className="text-primary">Future Today</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover excellence in education at Excellence Academy. Where academic achievement meets personal growth, 
          and every student is empowered to reach their full potential.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            Apply Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary/30 hover:border-primary">
            Schedule Tour
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-primary">2,500+</span>
            <span className="text-muted-foreground">Students</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-secondary">98%</span>
            <span className="text-muted-foreground">Graduation Rate</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-primary">25+</span>
            <span className="text-muted-foreground">Programs</span>
          </div>
        </div>
      </div>
    </section>
  );
};