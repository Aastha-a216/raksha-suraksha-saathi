import { useState } from "react";
import { PresentationSlide } from "@/components/PresentationSlide";
import { SlideNavigation } from "@/components/SlideNavigation";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  MapPin, 
  Users, 
  Smartphone, 
  Clock, 
  IndianRupee,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Heart
} from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slides = [
    // Slide 1: Title Slide
    <PresentationSlide key={0} background="gradient">
      <div className="text-center text-white">
        <div className="flex justify-center mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
            <Shield className="w-16 h-16 text-white" />
          </div>
        </div>
        <h1 className="text-6xl font-bold mb-4">Raksha Bandhan</h1>
        <h2 className="text-4xl font-semibold mb-6 text-white/90">Suraksha App</h2>
        <p className="text-xl mb-8 text-white/80 max-w-3xl mx-auto">
          A comprehensive women's safety innovation combining mobile technology, 
          offline trigger devices, and NCC cadet-led rapid response units
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Innovation 2025
          </Badge>
          <Badge variant="outline" className="text-lg px-4 py-2 border-white/30 text-white">
            NCC Initiative
          </Badge>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 2: Problem Statement
    <PresentationSlide key={1} background="subtle">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-emergency/10 rounded-full p-6">
            <AlertTriangle className="w-16 h-16 text-emergency" />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-8">The Challenge</h1>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-card p-6 rounded-xl shadow-elegant">
            <Heart className="w-12 h-12 text-emergency mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safety Concerns</h3>
            <p className="text-muted-foreground">
              Women face constant safety concerns while traveling, especially after dark
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-elegant">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Restricted Mobility</h3>
            <p className="text-muted-foreground">
              Families restrict girls' mobility due to fear, limiting opportunities
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-elegant">
            <Clock className="w-12 h-12 text-safety mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Delayed Response</h3>
            <p className="text-muted-foreground">
              Lack of immediate support or real-time safety networks
            </p>
          </div>
        </div>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          In semi-urban and rural areas, the absence of reliable safety infrastructure 
          creates vulnerability and limits women's participation in education and social activities.
        </p>
      </div>
    </PresentationSlide>,

    // Slide 3: Solution Overview
    <PresentationSlide key={2} background="white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">Our Solution</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          A community-driven safety ecosystem that empowers women through technology 
          and NCC cadet support networks
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Smartphone className="w-12 h-12" />}
            title="Mobile App"
            description="Emergency SOS alerts with real-time location tracking"
            variant="default"
          />
          <FeatureCard
            icon={<Shield className="w-12 h-12" />}
            title="Trigger Bracelet"
            description="Arduino-based offline emergency trigger device"
            variant="safety"
          />
          <FeatureCard
            icon={<Users className="w-12 h-12" />}
            title="NCC Response"
            description="Trained cadet patrol teams for immediate assistance"
            variant="emergency"
          />
          <FeatureCard
            icon={<MapPin className="w-12 h-12" />}
            title="Safe Zones"
            description="NCC-verified routes and checkpoint mapping"
            variant="default"
          />
        </div>
      </div>
    </PresentationSlide>,

    // Slide 4: Key Features
    <PresentationSlide key={3} background="subtle">
      <div>
        <h1 className="text-5xl font-bold text-center mb-12">Key Features</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-elegant">
              <div className="bg-primary/10 rounded-full p-3">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Emergency SOS Alert</h3>
                <p className="text-muted-foreground">
                  Instant alerts via mobile app or bracelet with offline support
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-elegant">
              <div className="bg-safety/10 rounded-full p-3">
                <MapPin className="w-6 h-6 text-safety" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-muted-foreground">
                  Live location sharing with cadets, police, and family
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-elegant">
              <div className="bg-primary/10 rounded-full p-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Safe Zone Mapping</h3>
                <p className="text-muted-foreground">
                  NCC-verified routes and checkpoints for secure navigation
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-elegant">
              <div className="bg-emergency/10 rounded-full p-3">
                <Users className="w-6 h-6 text-emergency" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">NCC Integration</h3>
                <p className="text-muted-foreground">
                  Dedicated Suraksha Patrol Teams for on-ground support
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-elegant">
              <div className="bg-safety/10 rounded-full p-3">
                <Smartphone className="w-6 h-6 text-safety" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Low-Data Support</h3>
                <p className="text-muted-foreground">
                  SMS-based alerts for areas with limited internet connectivity
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-elegant">
              <div className="bg-primary/10 rounded-full p-3">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Community Awareness</h3>
                <p className="text-muted-foreground">
                  Safety and self-defense sessions conducted by NCC cadets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 5: Implementation & Cost
    <PresentationSlide key={4} background="white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">Implementation & Cost</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Cost Breakdown</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-card rounded-lg shadow-elegant">
                <span>Arduino-based Trigger Bracelet</span>
                <span className="font-semibold flex items-center">
                  <IndianRupee className="w-4 h-4" />300
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-card rounded-lg shadow-elegant">
                <span>App Development (Prototype)</span>
                <span className="font-semibold flex items-center">
                  <IndianRupee className="w-4 h-4" />500
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-card rounded-lg shadow-elegant">
                <span>SMS Gateway (1000 alerts)</span>
                <span className="font-semibold flex items-center">
                  <IndianRupee className="w-4 h-4" />200
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-card rounded-lg shadow-elegant">
                <span>Awareness Material</span>
                <span className="font-semibold flex items-center">
                  <IndianRupee className="w-4 h-4" />200
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-primary text-white rounded-lg font-bold text-lg">
                <span>Total Per Location</span>
                <span className="flex items-center">
                  <IndianRupee className="w-5 h-5" />1,200
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Key Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <StatsCard
                icon={<IndianRupee className="w-8 h-8" />}
                value="₹1,200"
                label="Per Location"
                color="primary"
              />
              <StatsCard
                icon={<Clock className="w-8 h-8" />}
                value="< 2 min"
                label="Response Time"
                color="safety"
              />
              <StatsCard
                icon={<Users className="w-8 h-8" />}
                value="NCC"
                label="Cadet Support"
                color="emergency"
              />
              <StatsCard
                icon={<CheckCircle className="w-8 h-8" />}
                value="24/7"
                label="Availability"
                color="safety"
              />
            </div>
            <div className="mt-6 p-4 bg-safety/10 rounded-lg">
              <p className="text-sm text-safety font-medium">
                ✓ No third-party IPR infringement<br/>
                ✓ Fully designed in-house by NCC cadets<br/>
                ✓ Open-source development tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 6: Future Scope
    <PresentationSlide key={5} background="gradient">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-8">Future Scope</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Voice Commands</h3>
            <p className="text-white/80">
              Regional language support and voice-activated emergency features
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Police Integration</h3>
            <p className="text-white/80">
              Direct alert syncing with police stations nationwide
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">National Grid</h3>
            <p className="text-white/80">
              India-wide NCC network creating a national safety infrastructure
            </p>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Innovation Team</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <p><strong>NCC Cadets:</strong> Astha Srivastava, Astha Singh</p>
              <p><strong>College:</strong> United College Of Engineering And Research, Allahabad</p>
              <p><strong>NCC Unit:</strong> 1UPCTR</p>
            </div>
            <div>
              <p><strong>NCC Group HQ:</strong> Prayagraj</p>
              <p><strong>NCC Directorate:</strong> UP Dte (Lucknow)</p>
              <p><strong>Contact:</strong> aasthasrivastav627@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>
  ];

  return (
    <div className="relative">
      {slides[currentSlide]}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
      />
    </div>
  );
};

export default Index;