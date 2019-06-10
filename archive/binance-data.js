
/*
  var burl = "https://api.binance.com";
  var query = '/api/v3/ticker/price'
  //query += '?symbol=BTCUSDT';
  var url = burl + query;
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET',url,true);
  ourRequest.onload = function(){
    console.log(ourRequest.responseText);
  }
  ourRequest.send();

*/


/*
  fetch('https://api.binance.com/api/v3/ticker/price')
  .then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here


    let coinArray = data.array;
    let btcPrice = coinArray;
    console.log(data);
    response.addHeader("Access-Control-Allow-Origin", "https://api.binance.com");

  }).catch(err => {
    // Do something for an error here
  });
*/