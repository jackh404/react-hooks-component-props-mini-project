import React from "react";

function Article({title,date = "January 1, 1970",preview,minutes}){
    let timeMoji
    let timeMojis = ''
    let cups
    console.log(minutes)
    if(minutes < 30){
        cups = Math.floor(minutes/5)
        timeMoji = '☕'
    } else {
        cups = Math.floor(minutes/10)
        timeMoji = '🍱'
    }
    console.log(cups)
    for(let i=0; i<cups; i++){
        timeMojis += timeMoji
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {timeMojis} {minutes} minute read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article