const btcDesc = '1 Bitcoin';
const btcItem = 'BTC';
const xrpDesc = '1 XRP';
const xrpItem = 'XRP';
const ethDesc = '1 Ethereum';
const ethItem = 'ETH';
let totalPrice = 0;

//ADDS 1 BITCOIN TO CART WHEN BUY BITCOIN BUTTON IS CLICKED
function addBitcoin(){
  let cart = document.getElementById("myCart");
  let row = cart.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  
  let img = document.createElement('img');
  img.src = "https://www.coinbase.com/assets/assets/1-8022fd53c251f18cb39cefede445f1c78a3b265989232f0bb46b9c4622e55a9e.png"
  cell1.appendChild(img);
  
  let height = document.createAttribute("height");
  height.value = "42";
  img.setAttributeNode(height);
 
  let width = document.createAttribute("width");
  width.value = "42";
  img.setAttributeNode(width);

  
  cell2.innerHTML = btcItem;
  cell3.innerHTML = btcDesc;
  cell4.innerHTML = liveBTC;
  
 //CREATE ID FOR ROW
  let rowId = document.createAttribute("id");
  rowId.value = "new-row";
  

  //CREATE ID ATTRIBUTE FOR CELL 4 AND SET THE VALUE OF ID TO "remove-btn"
  let cellId = document.createAttribute("id");
  cellId.value = "remove-btn";
  cell4.setAttributeNode(cellId);
  
  //CREATE THE BUTTON ELEMENT
  let btn = document.createElement("input");
  
  
  //CREATE ATTRIBUTES FOR THE INPUT BUTTON (CLASS, ONCLICK, TYPE, INPUTVALUE)
  //_____________________________________________________________________________//
  let className = document.createAttribute("class");
  className.value = "mdl-button mdl-js-button mdl-button--raised"
  
  let onClick = document.createAttribute("onclick");
  onClick.value = "deleteRow(this, liveBTC)"
  
  let type = document.createAttribute("type");
  type.value = "button";
  
  let inputValue = document.createAttribute("value");
  inputValue.value = "Remove";
  //_____________________________________________________________________________//
  

//ASSIGN THOSE ATTRIBUTES TO THE BUTTON
  btn.setAttributeNode(className);
  btn.setAttributeNode(onClick);
  btn.setAttributeNode(type);
  btn.setAttributeNode(inputValue);
  

  //ADD THE BUTTON TO CELL5
  cell5.appendChild(btn);
  

  totalPrice = totalPrice + parseFloat(liveBTC);
  document.getElementById("total").innerHTML = "Total: $" + totalPrice.toFixed(2);
return totalPrice;
}



//ADDS 1 XRP TO CART WHEN BUY XRP BUTTON IS CLICKED
function addXRP(){
  let cart = document.getElementById("myCart");
  let row = cart.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  
  let img = document.createElement('img');
  img.src = "https://www.coinbase.com/assets/assets/52-477a90ea7736b8757b093acef507a9aab6968e7b564e52716deb3803160ee49a.png"
  cell1.appendChild(img);
  
  let height = document.createAttribute("height");
  height.value = "42";
  img.setAttributeNode(height);
 
  let width = document.createAttribute("width");
  width.value = "42";
  img.setAttributeNode(width);
  
  cell2.innerHTML = xrpItem;
  cell3.innerHTML = xrpDesc;
  cell4.innerHTML = liveXRP;
  
   //CREATE ID FOR ROW
  let rowId = document.createAttribute("id");
  rowId.value = "new-row";
  

  //CREATE ID ATTRIBUTE FOR CELL 4 AND SET THE VALUE OF ID TO "remove-btn"
  let cellId = document.createAttribute("id");
  cellId.value = "remove-btn";
  cell4.setAttributeNode(cellId);
  
  //CREATE THE BUTTON ELEMENT
  let btn = document.createElement("input");
  
  
  //CREATE ATTRIBUTES FOR THE INPUT BUTTON (CLASS, ONCLICK, TYPE, INPUTVALUE)
  //_____________________________________________________________________________//
  let className = document.createAttribute("class");
  className.value = "mdl-button mdl-js-button mdl-button--raised"
  
  let onClick = document.createAttribute("onclick");
  onClick.value = "deleteRow(this, liveXRP)"
  
  let type = document.createAttribute("type");
  type.value = "button";
  
  let inputValue = document.createAttribute("value");
  inputValue.value = "Remove";
  //_____________________________________________________________________________//
  

//ASSIGN THOSE ATTRIBUTES TO THE BUTTON
  btn.setAttributeNode(className);
  btn.setAttributeNode(onClick);
  btn.setAttributeNode(type);
  btn.setAttributeNode(inputValue);
  

  //ADD THE BUTTON TO CELL5
  cell5.appendChild(btn);
  
  totalPrice = totalPrice + parseFloat(liveXRP);
  document.getElementById("total").innerHTML = "Total: $" + totalPrice.toFixed(2);
return totalPrice;
}

//ADDS 1 ETH TO CART WHEN BUY ETHEREUM BUTTON IS CLICKED
function addEthereum(){
  let cart = document.getElementById("myCart");
  let row = cart.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  
  let img = document.createElement('img');
  img.src = "https://www.coinbase.com/assets/assets/1027-99bf2102cc13a51bb226f931b8d0fa4c5b3ca9dc4179167e89d7ee3f677c3fdb.png"
  cell1.appendChild(img);
  
  let height = document.createAttribute("height");
  height.value = "42";
  let width = document.createAttribute("width");
  width.value = "42";
  
  img.setAttributeNode(height);
  img.setAttributeNode(width);
  

  cell2.innerHTML = ethItem;
  cell3.innerHTML = ethDesc;
  cell4.innerHTML = liveETH;
  
   //CREATE ID FOR ROW
  let rowId = document.createAttribute("id");
  rowId.value = "new-row";
  
  //CREATE ID ATTRIBUTE FOR CELL 4 AND SET THE VALUE OF ID TO "remove-btn"
  let cellId = document.createAttribute("id");
  cellId.value = "remove-btn";
  cell4.setAttributeNode(cellId);
  
  //CREATE THE BUTTON ELEMENT
  let btn = document.createElement("input");
  
  
  //CREATE ATTRIBUTES FOR THE INPUT BUTTON (CLASS, ONCLICK, TYPE, INPUTVALUE)
  //_____________________________________________________________________________//
  let className = document.createAttribute("class");
  className.value = "mdl-button mdl-js-button mdl-button--raised"
  
  let onClick = document.createAttribute("onclick");
  onClick.value = "deleteRow(this, liveETH)"
  
  let type = document.createAttribute("type");
  type.value = "button";
  
  let inputValue = document.createAttribute("value");
  inputValue.value = "Remove";
  //_____________________________________________________________________________//
  

//ASSIGN THOSE ATTRIBUTES TO THE BUTTON
  btn.setAttributeNode(className);
  btn.setAttributeNode(onClick);
  btn.setAttributeNode(type);
  btn.setAttributeNode(inputValue);
  

  //ADD THE BUTTON TO CELL5
  cell5.appendChild(btn);
  
  totalPrice = totalPrice + parseFloat(liveETH);
  document.getElementById("total").innerHTML = "Total: $" + totalPrice.toFixed(2);
return totalPrice;
}


//DELETE ROW
function deleteRow(btn, coinPrice) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
  totalPrice = totalPrice - parseFloat(coinPrice);
  document.getElementById("total").innerHTML = "Total: $" + totalPrice.toFixed(2);
return totalPrice;
} 