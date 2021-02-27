import React from 'react';
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
    return <div>
        <button onClick={LoginNow}>Login </button>
    </div>
}
