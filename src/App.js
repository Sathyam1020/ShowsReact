import React, { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import ShowDetails from "./components/ShowDetails";
import Home from "./components/Home";
import BookTickets from "./components/BookTickets";
import Header from "./components/Header";

function App() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((res) => {
      setShows(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-blue-600 min-h-[100vh]">
      <Header/>
      <Routes>
        <Route path="/" element={<Home shows={shows} loading={loading}/>}/>
        <Route path="/details/:id" element={<ShowDetails shows={shows} loading={loading}/>}/>
        <Route path="/book/:id" element={<BookTickets shows={shows} loading={loading}/>}/>
      </Routes>
    </div>
  );
}

export default App;
