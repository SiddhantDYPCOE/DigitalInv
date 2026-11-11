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

const ASSET_BASE =
  "https://inviteutsav.com/wp-content/themes/inviteutsav/assets/templates/siyaram-raghukul/images";

const App = () => {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  if (!isInvitationOpen) {
    return <OpeningScreen onOpen={() => setIsInvitationOpen(true)} />;
  }

  return (
    <main className="wedding-invitation">
      <Hero />

      <div className="invitation-story">
        <picture className="invitation-story__base" aria-hidden="true">
          <source
            media="(min-width: 1024px)"
            srcSet={`${ASSET_BASE}/backgrounds/garden-bridge-desktop.webp`}
          />
          <img
            src={`${ASSET_BASE}/backgrounds/garden-bridge-mobile.webp`}
            alt=""
            draggable="false"
          />
        </picture>

        <InvitationDetails />
        <CoupleSection />
        <CelebrationTimeline />
      </div>

      <Hashtag />
      <Venue />
      <MusicPlayer />
      <ScrollCue />
    </main>
  );
};

export default App;
