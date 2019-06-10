


function reqListener() {
  let data = JSON.parse(this.responseText);
  let list = document.getElementById("all-coins")

  //LOOP THROUGH OBJECT AND CREATE A LIST ITEM FOR EACH ONE
  for(var i = 0; i < data.length; i++){
    //GET LAST LIVE PRICE OF COIN FROM OBJECT ARRAY AND SET TO LOCAL VARIABLES
    let btc = data[11].lastPrice;
    let xrp = data[308].lastPrice;
    let eth = data[12].lastPrice;
    
    
    //GET THE HTML ELEMENT FOR THE PRICE DISPLAY
    let btcTd = document.getElementById('btc-price');
    let xrpTd = document.getElementById('xrp-price');
    let ethTd = document.getElementById('eth-price');
    
    
    //APPEND COIN PRICE TO THE HTML ELEMENT TO DISPLAY THE COIN PRICE
    btcTd.innerText = btc;
    xrpTd.innerText = xrp;
    ethTd.innerText = eth;
    
    //CALL THE FUNCTION AND PASS LOCAL VARIABLES TO SET GLOBAL VARIABLES FOR LIVE COIN PRICE
    setBTCPrice(btc);
    setXRPPrice(xrp);
    setETHPrice(eth);
    
    //DISPLAY ALL COIN PRICES AT BOTTOM OF PAGE
    //let items = document.createElement('li');
    //list.appendChild(items);
    //items.appendChild(document.createTextNode(data[i].symbol + " : $" + data[i].lastPrice));
    

    
    // ATTEMPTING TO FIND INDEX OF THE XRPUSDT IN THE OBJECT ARRAY
    //index = data.findIndex(x => x.symbol=="XRPUSDT");
    //console.log(index);
    //console.log(data[12].lastPrice);
    //console.log(data[308].lastPrice);
   //console.log(data[308].symbol);
  }
}


//SETS THE GLOBAL VARIABLE OF LIVE BITCOIN PRICE SO IT CAN BE USED IN THE add-to-shopping-cart CLASS
var liveBTC;
function setBTCPrice(price){
  liveBTC = price;
  console.log('livebtc: '+ liveBTC);
}

var liveXRP;
function setXRPPrice(price){
  liveXRP = price;
  console.log('liveXRP: '+ liveXRP);
}

var liveETH;
function setETHPrice(price){
  liveETH = price;
  console.log('liveeth: '+ liveETH);
}




function reqError(err) {
  console.log('Fetch Error :-S', err);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.onerror = reqError;
oReq.open('get', 'https://api.binance.com/api/v1/ticker/24hr', true);
oReq.send();