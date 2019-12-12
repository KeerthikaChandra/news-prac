import React from 'react';
import './new-card.styles.css';

export const NewCard = (props) => (
    <div className='card-container'>
        <h3>{props.item.title}</h3>
        <b>Author : {props.item.author}</b>
        <img src={props.item.urlToImage} alt='item' />
        <p>{props.item.content}</p>
    </div>
)

export default NewCard;