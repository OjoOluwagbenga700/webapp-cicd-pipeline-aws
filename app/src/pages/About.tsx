import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Globe, Award, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Excellence Academy
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            For over 50 years, Excellence Academy has been committed to providing exceptional education 
            that prepares students for success in an ever-changing world.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a nurturing and challenging educational environment that empowers students 
                  to achieve academic excellence, develop critical thinking skills, and become responsible 
                  global citizens who contribute positively to society.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a leading educational institution that inspires lifelong learning, 
                  fosters innovation, and prepares students to thrive in a dynamic global community 
                  while maintaining the highest standards of academic integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History & Stats */}
      <section className="py-16 px-6 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Legacy</h2>
            <p className="text-xl text-muted-foreground">Five decades of educational excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1973</div>
              <div className="text-muted-foreground">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">2,500+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-muted-foreground">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">College Acceptance</div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Excellence Academy was founded in 1973 with a simple yet powerful vision: to create an 
              educational environment where every student could reach their full potential. What began 
              as a small school with 100 students has grown into a thriving community of learners, 
              educators, and families committed to excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Throughout our history, we have continuously evolved our programs and facilities to meet 
              the changing needs of our students and society. Today, we stand as a beacon of educational 
              innovation, preparing students not just for college, but for life.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">Experienced educators dedicated to student success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">DS</span>
                </div>
                <CardTitle>Dr. Sarah Johnson</CardTitle>
                <CardDescription>Principal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Ph.D. in Educational Leadership with 20+ years of experience in academic administration.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary-foreground">MC</span>
                </div>
                <CardTitle>Michael Chen</CardTitle>
                <CardDescription>Vice Principal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  M.Ed. in Curriculum Development, specializing in innovative teaching methodologies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">ER</span>
                </div>
                <CardTitle>Emily Rodriguez</CardTitle>
                <CardDescription>Academic Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  M.A. in Educational Psychology, focused on student development and academic support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;