function reqListener() {
    let data = JSON.parse(this.responseText);
    let list = document.getElementById("all-coins")
    let btc,xrp,eth,ada,ltc,xlm;
    //LOOP THROUGH OBJECT AND CREATE A LIST ITEM FOR EACH ONE
    for(var i = 0; i < data.length; i++){

     //GET LAST LIVE PRICE OF COIN FROM OBJECT ARRAY AND SET TO LOCAL VARIABLES
  
      if(data[i].symbol === "BTCUSDT") {
        btc = data[i].lastPrice;
      }
      if(data[i].symbol === "XRPUSDT") {
        xrp = data[i].lastPrice;
      }
      if(data[i].symbol === "ETHUSDT") {
        eth = data[i].lastPrice;
      }
      if(data[i].symbol === "ADAUSDT") {
        ada = data[i].lastPrice;
      }
      if(data[i].symbol === "LTCUSDT") {
        ltc = data[i].lastPrice;
      }
      if(data[i].symbol === "XLMUSDT") {
        xlm = data[i].lastPrice;
      }
   }


      //GET THE HTML ELEMENT FOR THE PRICE DISPLAY
      let btcTd = document.getElementById('btc-price');
      let xrpTd = document.getElementById('xrp-price');
      let ethTd = document.getElementById('eth-price');
      let adaTd = document.getElementById('ada-price');
      let ltcTd = document.getElementById('ltc-price');
      let xlmTd = document.getElementById('xlm-price');


      //APPEND COIN PRICE TO THE HTML ELEMENT TO DISPLAY THE COIN PRICE
      btcTd.innerText = btc;
      xrpTd.innerText = xrp;
      ethTd.innerText = eth;
      adaTd.innerText = ada;
      ltcTd.innerText = ltc;
      xlmTd.innerText = xlm;

      //CALL THE FUNCTION AND PASS LOCAL VARIABLES TO SET GLOBAL VARIABLES FOR LIVE COIN PRICE
      setBTCPrice(btc);
      setXRPPrice(xrp);
      setETHPrice(eth);
      setADAPrice(ada);
      setLTCPrice(ltc);
      setXLMPrice(xlm);

  }


  //SETS THE GLOBAL VARIABLE OF LIVE BITCOIN PRICE SO IT CAN BE USED IN THE add-to-shopping-cart CLASS
  var liveBTC = 0;
  function setBTCPrice(price){
   liveBTC = price;
   console.log('livebtc: '+ liveBTC);
  }
  export { liveBTC };

  var liveXRP = 0;
  function setXRPPrice(price){
    liveXRP = price;
   console.log('liveXRP: '+ liveXRP);
  }

  var liveETH = 0;
  function setETHPrice(price){
   liveETH = price;
    console.log('liveeth: '+ liveETH);
  }

  var liveADA = 0;
  function setADAPrice(price){
   liveADA = price;
    console.log('liveada: '+ liveADA);
  }

  var liveLTC = 0;
  function setLTCPrice(price){
   liveLTC = price;
    console.log('liveltc: '+ liveLTC);
  }

  var liveXLM = 0;
  function setXLMPrice(price){
   liveXLM = price;
    console.log('livexlm: '+ liveXLM);
  }



  function reqError(err) {
    console.log('Fetch Error :-S', err);
  }

  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.onerror = reqError;
  oReq.open('get', 'https://api.binance.com/api/v1/ticker/24hr', true);
  oReq.send();