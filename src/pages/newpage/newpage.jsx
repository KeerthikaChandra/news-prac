import React from 'react';
import './newpage.styles.css';
import {NewCardList} from '../../components/new-card-list/new-card-list.component';

class NewPage extends React.Component {
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
        
        // //new code begins
        // const filteredArray = articles.filter(article => 

        //     )
        // //new code ends    
        return(
            <div className='newpage-styles'>
            <h1>Page with more information!</h1>
            <NewCardList articles={articles} />
            </div>
        );
    }
}



export default NewPage;