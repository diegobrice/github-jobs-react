import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import JobCard from "./components/JobCard";
import Header from "./components/Header";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

  async function getJobs() {
    try {
      const { data } = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1"
      );
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      {console.log(jobs)}
      <Header />
      {jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  );
}

export default App;
