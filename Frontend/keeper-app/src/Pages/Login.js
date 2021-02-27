import React from 'react';
import { Link } from 'react-router-dom';
import constants from './../constants.json';

async function LoginNow(){
// let re = await fetch(constants.login);
    var win = window.open(constants.login, "MyDialog", 720, 600, "menubar=0,toolbar=0");
    let re = await fetch(constants.search,{
        method:"POST",
        headers:{
            'Content-type':'Application/json'
        },
        body:JSON.stringify({
            tagSearch:'react'
        })
    });
    let data = await re.json();

    console.log(data)

}
export default function(){
    return <Link  className="nav-links" style={{margin:0,padding:'10px',background:'transparent',outline:0,border:0,color:'rgba(255, 255, 255, 0.7)',fontSize:'24px'}} onClick={LoginNow}>Login </Link>
}
