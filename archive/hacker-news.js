<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>




<script type="text/javascript">


  let url = "https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT";
  fetch(url)
    .then(r =>  {
      return r.json()
    })

    .then(

    data => {
      let totalResults = data.results;
      let body = document.querySelector("body");
      let articleList = document.createElement("ul");
      body.appendChild(articleList);

      totalResults.map(article => {
        let articleItem = document.createElement('li');
        articleItem.innerHTML = article.symbol;
        articleList.appendChild(articleItem);
      })
    })

    .catch(e => {
          console.log(`An error has occured: ${e}`);
    })

/*  let url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=2bb59b36f39d49b6a23e1a4b3e6078a1";
  fetch(url)
    .then(r =>  {
      return r.json()
    })

    .then(

    data => {
      let totalResults = data.articles;
      let body = document.querySelector("body");
      let articleList = document.createElement("ul");
      body.appendChild(articleList);

      totalResults.map(article => {
        let articleItem = document.createElement('li');
        articleItem.innerHTML = article.content;
        articleList.appendChild(articleItem);
      })
    })

    .catch(e => {
          console.log(`An error has occured: ${e}`);
    })
    */
</script>

  </body>
</html>
