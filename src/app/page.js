'use client'

import { useState, useEffect } from 'react';
import "./globals.css"
import Header from "./Header.js"

function App(){
  const bgform = {
    Name: "",
    Players: [
        {
            Player: "Evan",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "Chris",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "Kevin",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "Eric",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
        {
            Player: "",
            Winner: false,
            New: false,
            Score: 0,
            Faction: "",
            Picked: false
        },
    ],
    Groupwin: false,
    GameComments: "",
    url: "",
    theme: "",
    startDate: ""
  };

  // backend url
  const URL = `http://localhost:4000/bg/`;

  // date to control the date with the calendar
  const [date, setDate] = useState();
  // bglist controls the data from the database
  const [totalbgList, setTotalBgList] = useState(null);
  // grabs basic list for sorted list component.
  const [bgList, setBgList] = useState(null);
  // updates the form so that can be sent to the database.
  const [newbg, setNewbg] = useState(bgform);
  // what information is shown in the card data.
  const [show, setShow] = useState(null)

  const getTotalBgList = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setTotalBgList(data);
  };

  const createNewBg = async (bg) => {
    // make post request to create game
    await fetch(URL, {
      method: "POST",
      headers: {
          "Content-Type": "Application/json",
      },
      body: JSON.stringify(bg),
    });
    // update list of bg
    getTotalBgList();
  };

  const updateTotalBgList = async (bg, id) => {
    await fetch(URL + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify(bg),
    });
    getTotalBgList();
  }

  const deleteBg = async (id) => {
    await fetch(URL + id, {
        method: 'DELETE',
    })
    getTotalBgList();
  }

  const handleChange = (event) => {
    setNewbg({...newbg, [event.target.id]: event.target.value})
  }

  const onSubmit = () => {
    createNewBg(newbg);
    setNewbg(bgform)
  }

  const showComponent = (event) => {
    event.preventDefault();
    const id = bg.find(ele => ele._id === event.target.value)
    setShow(id)
    setDate(null)
  }

  return (
    <div className="App">
      <Header />
      <p>Landing Page</p>
    </div>
  )

}

export default App;

  // Call for the total list
  // useEffect(() => {
  //   getTotalBgList()
  // }, []);





// import {distance, closest} from 'fastest-levenshtein'
// import * as papa from 'papaparse'
// import BGG from "../output.csv"

  // const [ text, setText ] = useState();

  // const load = function(){
  //     fetch('./output.csv' )
  //         .then( response => response.text() )
  //         .then( responseText => {
  //           let data = papa.parse(responseText, {header:true});
  //           let titles = data.data.map((x)=> x.game_title)
  //           setText(titles)
  //           // console.log(titles)
  //         })
  // };
  // useEffect(() => {
  //   load()
  // }, []);

  // function findClosestMatch(event) {
  //   setNewbg({...newbg, [event.target.id]: event.target.value})
  //   let text2 = text.filter((x)=> typeof(x)=="string")
  //   let text3 = text2.filter((z) => distance(event.target?.value, z) < 6)
  //   let text4 = text2.filter((z) => new RegExp('^' + event.target.value, "gi").test(z))
  //   console.log(text4.sort())
  // }
