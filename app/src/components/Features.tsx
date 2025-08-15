import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Microscope, Palette, Globe } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Rigorous curriculum designed to challenge students and prepare them for higher education and career success."
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Personalized attention with average class sizes of 15 students, ensuring every student receives individual support."
  },
  {
    icon: Award,
    title: "Award-Winning Faculty",
    description: "Our dedicated teachers are recognized experts in their fields, committed to student growth and achievement."
  },
  {
    icon: Microscope,
    title: "Advanced STEM Programs",
    description: "State-of-the-art laboratories and technology resources for hands-on learning in science and engineering."
  },
  {
    icon: Palette,
    title: "Creative Arts",
    description: "Comprehensive arts program including visual arts, music, theater, and digital media production."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International exchange programs and multicultural curriculum preparing students for a global society."
  }
];

export const Programs = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational programs designed to nurture academic excellence and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <program.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="premium" size="lg" className="px-8 py-4 text-lg">
            Learn More About Programs
          </Button>
        </div>
      </div>
    </section>
  );
};