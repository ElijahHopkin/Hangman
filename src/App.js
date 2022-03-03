
import './App.css';
import React, {useState} from 'react'

/*
This page is a loader page for the game.
Includes: 
-Welcome,
-Challenge to play
  -acceptance of challenge opens a name entry for interaction
  -is there an api that lists hangable offences in old England? it would be fun to tell the player that they're on the hook and they are playing for their lives because they did "X". Guess the word right and save your skin! here's a shortlist https://www.mylearning.org/stories/prison-and-penal-reform-in-the-1800s/380?
-selection of level for words (stretch) {otherwise it will just be a single list}
-An animation(should it reference pirates, or old England in general?)
*/

function App() {
const [entryLog, setEntryLog] = useState([])
const [entry, setEntry] = useState([])

function play() {

}

  return (
    <div className="App">
      <h1>What's up!</h1>
    </div>
  );
}

export default App;
