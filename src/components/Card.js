import React from "react"
import "../styles/Card.scss"


function Card(props) {
    console.log(props);
    const { cards } = props
    return (
         cards.map((card, i) => {
             return (
            <div key={card.header + i} className="card" >
            <div className="trash-icon"><i class="fa fa-trash-o" aria-hidden="true" style={{cursor:"pointer"}}></i></div>
                <div className="card-left" >
                <div className="card-left-header">{card.header}</div>
                <div className="card-left-text">{card.text}</div>
            <div className="card-left-tag">{card.tag}</div>
           </div>
           
          <div className="card-right">
            <div className="card-right-image">IMG</div>
            <div className="card-right-date">{card.date}</div>
            <div  > </div>
          </div>
        </div>
             )
         })
    )
}

export default Card;