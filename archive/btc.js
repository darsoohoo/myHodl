var burl = "https://api.binance.com";
var query = '/api/v3/avgPrice'
query += '?symbol=BTCUSDT';
var url = burl + query;
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET',url,true);
ourRequest.onload = function(){
  console.log(ourRequest.responseText);
  console.log('hi');
}
ourRequest.send();
console.log('ho');
