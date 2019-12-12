import React from 'react';
import './homepage.styles.css';
import {CardList} from '../../components/card-list/cardlist.component';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            articles : []
        }
    }

    componentDidMount(){
        fetch('https://newsapi.org/v2/everything?q=apple&from=2019-12-09&to=2019-12-09&sortBy=popularity&apiKey=a0e99c8c595f41a3959589b28f8279a3')
        .then(response => response.json())
        .then(response => this.setState({
            articles : response.articles
        }))
    }

    render() {
        const {articles} = this.state;
        return(
            <div className='homepage-styles'>
            <h1>Find the Latest News updates here!!!</h1>
            <CardList articles={articles} />
            </div>
        );
    }
}

export default HomePage;