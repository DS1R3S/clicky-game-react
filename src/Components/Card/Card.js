import React from "react"
import "./Card.css"

const Card = props => (
    <div onClick={() => props.clickCount(props.id)}>
            <img className="item" alt="" src={props.image} />
    </div>
)

export default Card;