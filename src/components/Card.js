import React from "react"
import "../styles/Card.scss"


function Card(props ) {
    console.log(props);
    
    const { cards  ,groupId,cardDelete } = props;
    console.log(groupId);
    return (
         cards.map((card, i) => {
             return (
            <div key={card.header + i} className="card" >
                <div className="card-left" >
                <div className="card-left-header">{card.header}</div>
                <div className="card-left-text">{card.text}</div>
                <div className="card-left-tag">{card.tag}</div>
           </div>
           
            <div className="card-right">
               <div className="card-right-image">IMG</div>
               <div className="card-right-date">{card.date}</div>
            </div>
               <button key={cards.groupId +groupId} onClick={()=>cardDelete(groupId)} className="">DELETE CARD</button>
          </div>
          
        
             )
         })
    );
}

export default Card;