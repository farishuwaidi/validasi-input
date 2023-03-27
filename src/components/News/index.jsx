import React, { Component } from 'react';
import axios from 'axios';
import { Row} from 'react-bootstrap';
import Navbar from './Navbar'

class NewsPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      query: ''
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ad935f0d60034b27844e872e1fa4e792`)
      .then(response => {
        this.setState({
          articles: response.data.articles,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  searchNews = () => {
    axios.get(`https://newsapi.org/v2/everything?q=${this.state.query}&apiKey=ad935f0d60034b27844e872e1fa4e792`)
      .then(response => {
        this.setState({
          articles: response.data.articles,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value
    }, () => {
      this.searchNews();
    });
  }

  render() {
    const { articles, loading } = this.state;
    // let card = '';
    return (
      <div>
        <Navbar/>
        <div className='d-flex justify-content-center'>
          <input id="search-input" class="form-control" value={this.state.query} onChange={this.handleInputChange} type="search" placeholder="Search" aria-label="Search" style={{marginTop: '100px', maxWidth:'700px'}}/>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Row>
            {articles.map(article => (
              <div class="col-lg-4 col-md-6 mt-3" key={article.url}>
                  <a href={article.url} class="text-decoration-none text-dark">
                      <div class="card" style={{height:'450px'}}>
                          <img src={article.urlToImage} class="card-img-top" alt="thumbnail" style={{height: '250px',objectFit:'cover'}}/>
                          <div class="card-body">
                              <h5 class="card-title fw-bold">{article.title}</h5>
                              <h6>{article.author} <span class="fw-normal">{article.publishedAt}</span></h6>
                              <p class="card-text" style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{article.content}</p>
                          </div>
                      </div>
                  </a>
              </div>
            ))}
          </Row>
        )}
      </div>
    );
  }
}

export default NewsPortal;