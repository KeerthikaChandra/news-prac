import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <h3>{props.item.title}</h3>
        <b>Author : {props.item.author}</b>
        <img src={props.item.urlToImage} alt='item' />
        <p>{props.item.content}</p>
    </div>
)

export default Card;