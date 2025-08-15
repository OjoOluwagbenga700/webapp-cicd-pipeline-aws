import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, FileText, Users, DollarSign, Clock, CheckCircle } from "lucide-react";

const admissionSteps = [
  {
    icon: FileText,
    title: "Application",
    description: "Submit your completed application form with required documents"
  },
  {
    icon: CalendarDays,
    title: "Visit & Interview",
    description: "Schedule a campus tour and admission interview"
  },
  {
    icon: Users,
    title: "Assessment",
    description: "Complete academic and behavioral assessments"
  },
  {
    icon: CheckCircle,
    title: "Decision",
    description: "Receive admission decision within 2 weeks"
  }
];

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Join Our Community
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Begin your journey at Excellence Academy. We're here to guide you through 
            every step of the admission process.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h2>
            <p className="text-xl text-muted-foreground">Simple steps to join our school community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Tuition */}
      <section className="py-16 px-6 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Requirements */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold">Admission Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Academic Transcripts</h4>
                    <p className="text-muted-foreground text-sm">Previous 2 years of academic records</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Application Form</h4>
                    <p className="text-muted-foreground text-sm">Completed student application with essays</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Recommendations</h4>
                    <p className="text-muted-foreground text-sm">Two teacher recommendation letters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Assessment Test</h4>
                    <p className="text-muted-foreground text-sm">Standardized placement examination</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tuition */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold">Tuition & Fees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Annual Tuition</h4>
                  <div className="text-3xl font-bold text-primary">$18,500</div>
                  <p className="text-muted-foreground text-sm">Per academic year</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Registration Fee</span>
                    <span className="font-semibold">$500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technology Fee</span>
                    <span className="font-semibold">$800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Activity Fee</span>
                    <span className="font-semibold">$300</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Financial aid and scholarships available. Payment plans offered.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Application</h2>
            <p className="text-xl text-muted-foreground">Fill out this form to begin the admission process</p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="grade">Applying for Grade</Label>
                  <Input id="grade" placeholder="e.g., Grade 9" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="previousSchool">Previous School</Label>
                <Input id="previousSchool" placeholder="Enter previous school name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Academic Interests</Label>
                <Textarea 
                  id="interests" 
                  placeholder="Tell us about your academic interests and goals..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea 
                  id="message" 
                  placeholder="Any additional information you'd like us to know..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" variant="hero" size="lg" className="flex-1">
                  Submit Application
                </Button>
                <Button type="button" variant="outline" size="lg">
                  Save Draft
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Important Dates</h2>
            <p className="text-xl text-muted-foreground">Mark your calendar for these key admission deadlines</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Early Decision</CardTitle>
                <CardDescription>November 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Submit early application for priority consideration and scholarships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CalendarDays className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle>Regular Decision</CardTitle>
                <CardDescription>February 1, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Final deadline for fall semester admission applications.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Enrollment</CardTitle>
                <CardDescription>May 1, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Deadline to confirm enrollment and submit deposit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;