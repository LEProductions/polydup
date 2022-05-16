//polytopia pass around version once this is done i will be able to create multiplayer quite easily
//each player starts with one city and can only level up one city they can destroy other peoples cities though
/*
board
0 = water
1 = land
2 = city
3 = port
units
1 = bob




*/
var board = [];
var units = [];
var players = ['joe','billy'];
var playercoins = [];
var turn = 0;
var cities = [];

function generateBoard() {
  document.getElementById('board').innerHTML = "";
  for (var i = 1;i <= 100;i++) {
  document.getElementById('board').innerHTML += "<div onclick='buy("+i+");' id='tile"+i+"' class='tile'></div>";
    board.push(0);
    units.push(0);
  }
  for (var i = 1;i <= 100;i++) {
    var type = Math.floor(Math.random() * 2);
    if (type == 0) {
      document.getElementById('tile'+i).style.backgroundColor = "#0e637d";
    }
    else { document.getElementById('tile'+i).style.backgroundColor = "#0e7d4f";
      board[i] = 1;
    }
  }
}
generateBoard();
function generateCities() {
  for (var i = 0;i <= players.length-1;i++) {
    var type = Math.floor(Math.random() * 99)+1; 
    var col1 = Math.floor(Math.random() * 254)+1; 
    var col2 = Math.floor(Math.random() * 254)+1; 
    var col3 = Math.floor(Math.random() * 254)+1; 
document.getElementById('tile'+type).style.backgroundColor = "rgb("+col1+","+col2+","+col3+")";
    board[type] = 2;
  }
}
generateCities();
function newThing(type,cords) {
  //if statments for objects to be placed down
  if (type == 'port') {
    //cities[turn] += 2; 
    document.getElementById('tile'+cords).innerHTML = "<img src='pics/port.png'/>";
    board[cords] = 6;
  }
  else if (type == 'bob') { document.getElementById('tile'+cords).innerHTML = "<img src='pics/bob2.png'/>";
    units[cords] = 1;
  }
}
function pay(amount) {
  if (playercoins[turn] <= amount) {
    playercoins[turn] -= amount;
    return true;
  }
  else {
    alert("too poor");
    return false;
  }
}
function buy(tile) {
  //opens specific tile menu should include buy buttons in .innerHTML statements should redirect to newThings then to pay
  if (board[tile] == 1) {
    document.getElementById('buy').innerHTML = "<h1>Land</h1>";
  }
  else if (board[tile] == 2) {
    document.getElementById('buy').innerHTML = "<h1>City</h1><buys onclick='newThing(`bob`,"+tile+");'>Bob</buys>";
  }
  else if (units[tile] == 1) {
    document.getElementById('buy').innerHTML = "<h1>Bob</h1>";
    showmove(tile);
  }
  else {
    document.getElementById('buy').innerHTML = "<h1>Water</h1><buys onclick='newThing(`port`,"+tile+");'>Port</buys>";
  }
  document.getElementById('buy').style.display = "block";
}
function move(tile,bobmove) {
  
}
function showmove(tile) {
  
}