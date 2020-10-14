import React, { useState, useEffect } from "react";
import "../css/news.css";

const News = () => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    fetch(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-14&sortBy=publishedAt&apiKey=ec9fe4e340f045b19bf6ab584a9017d9"
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        console.log(data);
      });
  }, []);
  const handleClick = () => {
    setNews(null);
    fetch(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-14&sortBy=publishedAt&apiKey=ec9fe4e340f045b19bf6ab584a9017d9"
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        console.log(data);
      });
  };
  if (news === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <div className="header">
          <h1>HeadLines</h1>
          <i
            onClick={handleClick}
            class="fa fa-refresh"
            style={{ fontSize: "36px", cursor: "pointer" }}
          ></i>
        </div>
        <div className="newsheadlines">
          {news.articles.map((key, index) => (
            <div className="title" key={index}>
                <img src={key.urlToImage} width="200xp" height="120px" />
               <div className='tt'>
              <a href={key.url}>
                {key.title}
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default News;

// ![screencapture-localhost-3000-1602651791452](https://user-images.githubusercontent.com/61575048/95946124-87c10300-0e09-11eb-8c90-97419f5823b2.png)
// ![screencapture-www-fxstreet-com-cryptocurrencies-news-cryptocurrencies-price-prediction-bitcoin-ethereum-chainlink-asian-wrap-13-oct-202010140406-1602652181477](https://user-images.githubusercontent.com/61575048/95946240-c5be2700-0e09-11eb-812c-ca3b6ac3cd32.png)
// ![screencapture-localhost-3000-1602651791452](https://user-images.githubusercontent.com/61575048/95946251-ca82db00-0e09-11eb-90ee-7aa8e4ad7e54.png)

// ![screencapture-localhost-3000-1602668169439](https://user-images.githubusercontent.com/61575048/95997228-35a3d000-0e51-11eb-8720-25bbf670c3bf.png)
