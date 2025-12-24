import React from 'react'

function TeamMemberCard({name, role, img}){
    return(
        <>
            <h4>Name : {name}</h4>
            <h4>Role : {role}</h4>
            <img src={img} alt={name} />
        </>
    )
}   
export default TeamMemberCard