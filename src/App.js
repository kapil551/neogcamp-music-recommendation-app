import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  Pop: [
    {
      name: "Counting Stars",
      artist: "OneRepublic",
      year: "2013"
    },
    {
      name: "She Doesn't Mind",
      artist: "Sean Paul",
      year: "2011"
    },
    {
      name: "Give Me Everything",
      artist: "Pitbull",
      year: "2011"
    },
    {
      name: "Down",
      artist: "Jay Sean",
      year: "2009"
    },
    {
      name: "Beautiful People",
      artist: "Ed Sheeran",
      year: "2019"
    },
    {
      name: "The Hills",
      artist: "The Weeknd",
      year: "2015"
    }
  ],

  HipHop: [
    {
      name: "Hotline Bling",
      artist: "Drake",
      year: "2015"
    },
    {
      name: "Mirror",
      artist: "Lil Wayne",
      year: "2012"
    },
    {
      name: "Better Now",
      artist: "Post Malone",
      year: "2018"
    },
    {
      name: "Call Out My Name",
      artist: "The Weeknd",
      year: "2018"
    },
    {
      name: "No Love",
      artist: "Eminem",
      year: "2010"
    },
    {
      name: "Not Afraid",
      artist: "Eminem",
      year: "2010"
    }
  ],
  Soul: [
    {
      name: "Talk",
      artist: "Khalid",
      year: "2019"
    },
    {
      name: "Turn Up the Music",
      artist: "Chris Brown",
      year: "2012"
    },
    {
      name: "I Feel It Comming",
      artist: "The Weeknd",
      year: "2017"
    },
    {
      name: "Smack That",
      artist: "Akon",
      year: "2009"
    },
    {
      name: "DJ Got Us Falling In Love",
      artist: "Usher",
      year: "2010"
    },
    {
      name: "All of Me",
      artist: "John Legend",
      year: "2013"
    }
  ],
  Electronic: [
    {
      name: "Wake Me Up",
      artist: "Avicii",
      year: "2013"
    },
    {
      name: "Blame",
      artist: "Calvin Harris",
      year: "2014"
    },
    {
      name: "Titanium",
      artist: "David Guetta",
      year: "2011"
    },
    {
      name: "Where Are U Now",
      artist: "Justin Bieber",
      year: "2015"
    },
    {
      name: "So Far Away",
      artist: "Martin Garrix",
      year: "2017"
    },
    {
      name: "Club Can't Handle Me",
      artist: "Flo Rida",
      year: "2010"
    }
  ],
  RythmBlues: [
    {
      name: "Earned It",
      artist: "The Weeknd",
      year: "2015"
    },
    {
      name: "Beautiful",
      artist: "Akon",
      year: "2009"
    },
    {
      name: "Umbrella",
      artist: "Rihanna",
      year: "2009"
    },
    {
      name: "Ride It",
      artist: "Jay Sean",
      year: "2008"
    },
    {
      name: "Better",
      artist: "Khalid",
      year: "2018"
    },
    {
      name: "Leave the Door Open",
      artist: "Bruno Mars",
      year: "2021"
    }
  ]
};

let musicGenre = Object.keys(musicDB);
// console.log(musicGenre);

export default function App() {
  // useState for the genre ==> currentlt selected genre
  const [selectedGenre, setGenre] = useState("HipHop");

  // genre click handler function
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        {" "}
        <span role="img" aria-label="music">
          🎵
        </span>{" "}
        Listen Up
      </h1>
      <p> </p>
      <div className="genre-container">
        {musicGenre.map((item) => {
          return (
            <button
              key={item}
              className="btn-genre"
              onClick={() => genreClickHandler(item)}
            >
              {" "}
              {item}{" "}
            </button>
          );
        })}
      </div>

      <div className="songs-constainer">
        <ul className="list-unordered">
          {musicDB[selectedGenre].map((song) => {
            return (
              <li key={song.name}>
                <div
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    paddingBottom: "0.4rem"
                  }}
                >
                  {" "}
                  {song.name}{" "}
                </div>
                <div className="song-details">
                  <div>{song.artist} </div>
                  <div> {song.year}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
