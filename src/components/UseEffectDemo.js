import React, { useState, useEffect } from "react";

function UseEffectDemo() {
  let [text, setText] = useState("");
  let [news, setNews] = useState({});
  let [loading, setLoading] = useState(true);
  let API_KEY = "INSERT_YOUR_API_KEY_HERE";
  let url = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-31&sortBy=publishedAt&apiKey=${API_KEY}`;

  useEffect(() => {
    let isCancelled = false;
    console.log("useEffect function called");
    fetch(url)
      .then(data => data.json())
      .then(news => {
        console.log("news arrived");
        !isCancelled && setNews(news);
      })
      .catch(error => console.error(error))
      .finally(() => {
        console.log("setLoading(false)");
        !isCancelled && setLoading(false);
      });
    return () => {
      console.log("Unmounting...");
      isCancelled = true;
    };
  }, [url, text]);

  return (
    <div>
      <h3>UseEffect Demo</h3>
      <input value={text} onChange={e => setText(e.target.value)}></input>
      <p>{loading && "Loading..."}</p>
      <p>
        {API_KEY === "INSERT_YOUR_API_KEY_HERE" && (
          <em>Edit UseEffect.js and insert your API KEY</em>
        )}
      </p>
      <p>{news.articles && news.articles[0].title}</p>
    </div>
  );
}

export default UseEffectDemo;
