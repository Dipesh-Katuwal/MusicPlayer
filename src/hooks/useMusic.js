import { useState } from "react";


export const useMusic = () => {
  const songsPath = `${import.meta.env.BASE_URL}songs/`;
  const [songs] = useState([
    {
      id: 1,
      title: "Alag Aasmaan",
      artist: "Anuv Jain",
      url: `${songsPath}Anuv Jain - ALAG AASMAAN (a song on the ukulele).mp3`,
      duration: 226,
    },
    {
      id: 2,
      title: "Downers At Dusk",
      artist: "Talha Anjum",
      url: `${songsPath}Downers At Dusk - Talha Anjum  Prod. by Umair (Official Music Video) (1).mp3`,
      duration: 256,
    },
    {
      id: 3,
      title: "Flash",
      artist: "Cigarettes After Sex",
      url: `${songsPath}Flash - Cigarettes After Sex.mp3`,
      duration: 274,
    },
    {
      id: 4,
      title: "Hataash",
      artist: "Prince Deukadi",
      url: `${songsPath}Hataash - Prince Deukadi.mp3`,
      duration: 260,
    },
    {
      id: 5,
      title: "Running Up That Hill",
      artist: "Kate Bush",
      url: `${songsPath}Kate Bush - Running Up That Hill - Official Music Video.mp3`,
      duration: 298,
    },
    {
      id: 6,
      title: "Hey There Delilah",
      artist: "Plain White T's",
      url: `${songsPath}Plain White T's - Hey There Delilah (Lyrics).mp3`,
      duration: 232,
    },
    {
      id: 7,
      title: "Sweet",
      artist: "Cigarettes After Sex",
      url: `${songsPath}Sweet - Cigarettes After Sex.mp3`,
      duration: 291,
    },
    {
      id: 8,
      title: "August",
      artist: "Taylor Swift",
      url: `${songsPath}Taylor Swift  august (Official Lyric Video).mp3`,
      duration: 261,
    },
    {
      id: 9,
      title: "Firfirey",
      artist: "Yabesh Thapa",
      url: `${songsPath}Yabesh Thapa - Firfirey  OFFICIAL MUSIC VIDEO.mp3`,
      duration: 256,
    },
    {
      id: 10,
      title: "Kasari",
      artist: "Yabesh Thapa",
      url: `${songsPath}Yabesh Thapa - Kasari  कसर.mp3`,
      duration: 251,
    },
  ]);

  return { songs };
};
