import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Microscope, Palette, Music, Globe, Calculator, Users, Award } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "English Language Arts",
    description: "Comprehensive literacy program focusing on reading, writing, speaking, and critical analysis.",
    duration: "4 years",
    level: "Grades 9-12"
  },
  {
    icon: Calculator,
    title: "Mathematics",
    description: "From Algebra to Calculus, our math program builds strong analytical and problem-solving skills.",
    duration: "4 years",
    level: "Grades 9-12"
  },
  {
    icon: Microscope,
    title: "Science & Technology",
    description: "Hands-on laboratory experiences in Biology, Chemistry, Physics, and Computer Science.",
    duration: "4 years",
    level: "Grades 9-12"
  },
  {
    icon: Globe,
    title: "Social Studies",
    description: "World History, Government, Economics, and Geography for global citizenship.",
    duration: "4 years",
    level: "Grades 9-12"
  },
  {
    icon: Palette,
    title: "Visual Arts",
    description: "Painting, sculpture, digital art, and design to foster creativity and self-expression.",
    duration: "Elective",
    level: "All Grades"
  },
  {
    icon: Music,
    title: "Performing Arts",
    description: "Band, choir, theater, and individual music lessons for artistic development.",
    duration: "Elective",
    level: "All Grades"
  }
];

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Academic Programs
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive educational programs designed to challenge students and prepare them 
            for success in higher education and beyond.
          </p>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Curriculum</h2>
            <p className="text-xl text-muted-foreground">Essential subjects for well-rounded education</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                    <program.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{program.title}</CardTitle>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span className="bg-primary/10 px-2 py-1 rounded">{program.duration}</span>
                    <span className="bg-secondary/10 px-2 py-1 rounded">{program.level}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 px-6 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Programs</h2>
            <p className="text-xl text-muted-foreground">Unique opportunities for advanced learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Placement</h3>
              <p className="text-muted-foreground mb-4">
                Over 20 AP courses available, allowing students to earn college credit while in high school.
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">International Baccalaureate</h3>
              <p className="text-muted-foreground mb-4">
                Rigorous international program preparing students for global universities and careers.
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dual Enrollment</h3>
              <p className="text-muted-foreground mb-4">
                Partnership with local colleges allowing students to take college courses on campus.
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond the Classroom</h2>
            <p className="text-xl text-muted-foreground">Clubs, sports, and activities for every interest</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card/30 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Academic Clubs</h3>
              <p className="text-muted-foreground text-sm">Debate, Model UN, Science Olympiad, Math Club</p>
            </div>
            <div className="text-center p-6 bg-card/30 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Sports Teams</h3>
              <p className="text-muted-foreground text-sm">Basketball, Soccer, Tennis, Swimming, Track</p>
            </div>
            <div className="text-center p-6 bg-card/30 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Arts & Culture</h3>
              <p className="text-muted-foreground text-sm">Drama Club, Art Society, Photography, Dance</p>
            </div>
            <div className="text-center p-6 bg-card/30 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Service</h3>
              <p className="text-muted-foreground text-sm">Community Service, Environmental Club, Tutoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Our Programs?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a visit to see our facilities and meet our dedicated faculty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">Schedule a Tour</Button>
            <Button variant="outline" size="lg">Download Brochure</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;