import React from 'react';
import './new-card-list.styles.css';
import {NewCard} from '../new-card/new-card.component';

export const NewCardList = (props) => (
    <div className='new-card-list'>
        {
            // props.articles.map((item, idx) =>
            // <NewCard key={idx} item={item} />)
            
             props.articles.map((item, idx) =>
             <NewCard key={idx}item={item} />
             )
            
        }
    </div>
)

export default NewCardList;