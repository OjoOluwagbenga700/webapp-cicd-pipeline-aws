import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Calendar, Users } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We're here to answer your questions and help you learn more about Excellence Academy. 
            Reach out to us today!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Address</h3>
              <p className="text-muted-foreground text-sm">
                123 Education Street<br />
                Academic City, AC 12345<br />
                United States
              </p>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">
                Main Office: (555) 123-4567<br />
                Admissions: (555) 123-4568<br />
                Fax: (555) 123-4569
              </p>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">
                info@excellenceacademy.edu<br />
                admissions@excellenceacademy.edu<br />
                support@excellenceacademy.edu
              </p>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Office Hours</h3>
              <p className="text-muted-foreground text-sm">
                Monday - Friday<br />
                8:00 AM - 5:00 PM<br />
                Closed Weekends
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-6 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactFirstName">First Name</Label>
                      <Input id="contactFirstName" placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactLastName">Last Name</Label>
                      <Input id="contactLastName" placeholder="Enter last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email Address</Label>
                    <Input id="contactEmail" type="email" placeholder="Enter email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Phone Number</Label>
                    <Input id="contactPhone" placeholder="Enter phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactMessage">Message</Label>
                    <Textarea 
                      id="contactMessage" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder & Visit Info */}
            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold">Visit Our Campus</CardTitle>
                  <CardDescription>
                    Experience Excellence Academy firsthand with a guided campus tour.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Campus Tours</h4>
                        <p className="text-muted-foreground text-sm">
                          Available Monday-Friday at 10 AM and 2 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <h4 className="font-semibold">Group Visits</h4>
                        <p className="text-muted-foreground text-sm">
                          Special arrangements for groups of 10 or more
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Tour Duration</h4>
                        <p className="text-muted-foreground text-sm">
                          Approximately 90 minutes including Q&A session
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="lg" className="w-full mt-6">
                    Schedule a Tour
                  </Button>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <h3 className="font-bold text-lg">Interactive Map</h3>
                    <p className="text-muted-foreground text-sm">
                      View our location and surrounding area
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Ways to Connect</h2>
            <p className="text-xl text-muted-foreground">Multiple channels to get the information you need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Admissions Hotline</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Speak directly with our admissions team about enrollment and requirements.
              </p>
              <Button variant="outline" size="sm">Call Now</Button>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Parent Portal</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Access grades, schedules, and communicate with teachers online.
              </p>
              <Button variant="outline" size="sm">Login</Button>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Virtual Events</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Join online information sessions and virtual campus tours.
              </p>
              <Button variant="outline" size="sm">View Events</Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;