import React from 'react';
import './cardlist.styles.css';
import {Card} from '../card/card.component';
import {Link} from 'react-router-dom';

export const CardList = (props) => (
    <div className='card-list'>
        {
            props.articles.map((item, idx) =>
            <Link to={'/new'}>{<Card key={idx} item={item} />}</Link>
            )
        }
    </div>
)

export default CardList;