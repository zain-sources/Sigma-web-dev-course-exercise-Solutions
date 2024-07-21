import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div>
            <div className="card font-nunito">
                <img src="/img.avif"
                    alt="card image" />
                <div className="catagory">
                    <div>Reaction</div>
                    <div>Funny</div>
                </div>
                <h1>{props.title.split(" ").length>2 ? props.title.split(" ").slice(0, 2).join(" "): props.title}</h1>
                <p className="card-text">
                    {props.body.split(" ").length>10 ? props.body.split(" ").slice(0, 10).join(" "): props.body}
                </p>
                <button className="card-button">Read More</button>
            </div>
        </div>
    )
}

export default Card