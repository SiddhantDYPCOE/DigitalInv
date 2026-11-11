import { useState } from "react";

import OpeningScreen from "./components/OpeningScreen";
import Hero from "./components/Hero";
import InvitationDetails from "./components/InvitationDetails";
import CoupleSection from "./components/CoupleSection";
import CelebrationTimeline from "./components/CelebrationTimeline";
import Hashtag from "./components/Hashtag";
import Venue from "./components/Venue";
import MusicPlayer from "./components/MusicPlayer";
import ScrollCue from "./components/ScrollCue";

const App = () => {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  if (!isInvitationOpen) {
    return <OpeningScreen onOpen={() => setIsInvitationOpen(true)} />;
  }

  return (
    <main className="wedding-invitation">
      <Hero />
      <InvitationDetails />
      <CoupleSection />
      <CelebrationTimeline />
      <Hashtag />
      <Venue />
      <MusicPlayer />
      <ScrollCue />
    </main>
  );
};

export default App;
