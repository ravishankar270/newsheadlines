import React,{useState,useEffect} from 'react';
import '../css/news.css'

const News=()=>{
    const [news,setNews]=useState(null);
  useEffect(() => {
    fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-14&sortBy=publishedAt&apiKey=ec9fe4e340f045b19bf6ab584a9017d9').
        then(response=>response.json()).
        then(data=>{
            setNews(data)
           console.log(data)
        })
  }, []);
  const handleClick=()=>{
    setNews(null)
    fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-14&sortBy=publishedAt&apiKey=ec9fe4e340f045b19bf6ab584a9017d9').
        then(response=>response.json()).
        then(data=>{
            setNews(data)
           console.log(data)
        })
}
  if(news===null){
    return (
        <h1>Loading...</h1>
    )
  }
  else{

    
    return(
        <div>
            <div className='header'>
        <h1>HeadLines</h1>
        <i onClick={handleClick} class="fa fa-refresh" style={{fontSize:'36px',cursor:'pointer'}} ></i>
        </div>
        <div className='newsheadlines'>
            {news.articles.map((key,index)=><div className='title' key={index}><a href={key.url}>{key.title}</a></div>)}
        </div>
        </div>
        
    )
  }


}

export default News