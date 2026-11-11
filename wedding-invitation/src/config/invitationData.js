
const invitationData = {
  couple: {
    bride: "Harsha Myakalwar",
    groom: "Abhilash Jallawar",
    introduction: "Two hearts, one beautiful journey, and a lifetime of togetherness."
  },

  wedding: {
    date: "2026-12-12",
    displayDate: "12 December 2026",
    day: "Sunday",
    time: "7:00 PM"
  },

  family: {
    brideFamily: "Daughter of Mr. & Mrs. Myakalwae's Parents",
    groomFamily: "Son of Mr. & Mrs. Jallawar's Parents"
  },

  events: [
    {
      id: 1,
      name: "Haldi",
      date: "10 December 2026",
      time: "10:00 AM onwards",
      description: "A celebration filled with sunshine, laughter, and blessings.",
      location: "Family Residence",
      image: "/assets/events/haldi.jpg"
    },
    {
      id: 2,
      name: "Sangeet",
      date: "13 February 2027",
      time: "7:00 PM onwards",
      description: "An evening of music, dance, and unforgettable memories.",
      location: "Celebration Venue",
      image: "/assets/events/sangeet.jpg"
    },
    {
      id: 3,
      name: "Wedding Ceremony",
      date: "14 February 2027",
      time: "7:00 PM onwards",
      description: "Join us as we begin our forever together.",
      location: "Wedding Venue",
      image: "/assets/events/wedding.jpg"
    }
  ],

  hashtag: "#ForeverTogether",

  venue: {
    name: "Wedding Venue",
    address: "Enter your complete venue address here",
    mapUrl: "https://maps.google.com/"
  },

  music: {
    enabled: true,
    src: "/assets/music/wedding-music.mp3"
  }
};

export default invitationData;
