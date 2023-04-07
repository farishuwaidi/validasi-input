import React,{useState, useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { Row, Form } from 'react-bootstrap';

const Index = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getNews()
  },[query])

  const getNews = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=ad935f0d60034b27844e872e1fa4e792&q=${query}`)
      .then(response => {
        setArticles(response.data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const searchNews = () => {
    axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=ad935f0d60034b27844e872e1fa4e792`)
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

  const handleInputChange = (event) => {
    setQuery(event.target.value,() =>{searchNews()})
  }

  return (
    <div>
      <Navbar/>
      <Form className='d-flex justify-content-center'>
        <input class="form-control" placeholder='Search' type="text" value={query} onChange={handleInputChange} style={{marginTop: '100px', maxWidth:'700px'}}/>
      </Form>
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
  )
}

export default Index