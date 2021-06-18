import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import TeamList from '../TeamList/TeamList';

const Home = () => {
    const [teams,setTeams] = useState([]);
    console.log(teams)
    useEffect(()=>{
      fetch(
          'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
          )
      .then(res=>res.json())
      .then(data=>setTeams(data.teams));
      
    },[])
    return (
        <div className="row main-team-container">
            <Header></Header>
            {
                teams.map(team => <TeamList team={team}></TeamList>)
            }
        </div>
    );
};

export default Home;