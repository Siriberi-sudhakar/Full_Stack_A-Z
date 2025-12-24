//import { useState } from 'react'
import './App.css'
import TeamMemberCard from './Components/TeamMemberCard.jsx';
import {team} from './Data/Data';

function App() {
  return (
    <>
      <h1>Hey Guys This   is my Team</h1>
      {
        team.map(member =>{
          return <TeamMemberCard name={member.Name} role={member.Role} img={member.img}/>
        })
      }
    </> 
  )
}
export default App
