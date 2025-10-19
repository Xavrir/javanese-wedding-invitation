import { useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { WayangOpening } from "./components/WayangOpening";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Invitation } from "./components/Invitation";
import { Couple } from "./components/Couple";
import { Event } from "./components/Event";
import { PhotoGallery } from "./components/PhotoGallery";
import { RsvpSection } from "./components/RsvpSection";
import { GiftSection } from "./components/GiftSection";
import { MusicPlayer } from "./components/MusicPlayer";
import { NewFooter } from "./components/NewFooter";

export default function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      
      {/* Opening Animation */}
      {!showContent && (
        <WayangOpening onComplete={() => setShowContent(true)} />
      )}

      {/* Main Content */}
      {showContent && (
        <>
          <Navigation />
          <MusicPlayer />
          
          <main className="pt-16">
            <div id="home" className="scroll-mt-24 lg:scroll-mt-32">
              <Hero />
            </div>
            
            <Invitation />
            
            <Couple />
            
            <div id="event" className="scroll-mt-24 lg:scroll-mt-32">
              <Event />
            </div>
            
            <div id="rsvp" className="scroll-mt-24 lg:scroll-mt-32">
              <RsvpSection />
            </div>
            
            <div id="gift" className="scroll-mt-24 lg:scroll-mt-32">
              <GiftSection />
            </div>
            
            <div id="gallery" className="scroll-mt-24 lg:scroll-mt-32">
              <PhotoGallery />
            </div>
            
            <div id="location" className="scroll-mt-24 lg:scroll-mt-32">
              {/* Location section is integrated in Event component */}
            </div>
            
            <NewFooter />
          </main>
        </>
      )}
    </div>
  );
}
