
import { useState } from "react";

import OpeningScreen from "./components/OpeningScreen";
import Hero from "./components/Hero";
import InvitationDetails from "./components/InvitationDetails";
import WeddingDate from "./components/WeddingDate";
import CoupleSection from "./components/CoupleSection";
import CelebrationTimeline from "./components/CelebrationTimeline";
import Hashtag from "./components/Hashtag";
import Venue from "./components/Venue";
import MusicPlayer from "./components/MusicPlayer";
import ScrollReveal from "./components/ScrollReveal";
import ScrollCue from "./components/ScrollCue";

const App = () => {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  if (!isInvitationOpen) {
    return (
      <OpeningScreen
        onOpen={() => setIsInvitationOpen(true)}
      />
    );
  }

  return (
    <main className="min-h-screen overflow-hidden">

      {/* Hero: preserve existing parallax */}
      <Hero />

      {/* Invitation details */}
      <ScrollReveal animation="fade-up">
        <InvitationDetails />
      </ScrollReveal>

      {/* Wedding date */}
      <ScrollReveal animation="zoom-in">
        <WeddingDate />
      </ScrollReveal>

      {/* Couple introduction */}
      <ScrollReveal animation="fade-up">
        <CoupleSection />
      </ScrollReveal>

      {/* Wedding events */}
      <ScrollReveal animation="fade-up">
        <CelebrationTimeline />
      </ScrollReveal>

      {/* Wedding hashtag */}
      <ScrollReveal animation="zoom-in">
        <Hashtag />
      </ScrollReveal>

      {/* Venue and countdown */}
      <ScrollReveal animation="fade-up">
        <Venue />
      </ScrollReveal>

      {/* Floating music control */}
      <MusicPlayer />
      <ScrollCue />

    </main>
  );
};

export default App;
