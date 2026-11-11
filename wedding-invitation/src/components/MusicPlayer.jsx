
import { useRef, useState } from "react";
import invitationData from "../config/invitationData";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const musicEnabled = invitationData.music?.enabled;
  const musicSource = invitationData.music?.src;

  if (!musicEnabled || !musicSource) return null;

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Unable to play wedding music:", error);
      setIsPlaying(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`music-player ${isPlaying ? "is-playing" : ""}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        aria-pressed={isPlaying}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        <span className="music-player__bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      <audio
        ref={audioRef}
        src={musicSource}
        loop
        preload="none"
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </>
  );
};

export default MusicPlayer;
