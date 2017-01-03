var player = new Player();
var computer = new Computer();
var ball = new Ball(397, 295);

var render = function() {
  player.render();
  computer.render();
  ball.render();
};

var field_canvas = document.getElementById("field");
var field_context = field_canvas.getContext("2d");
field_context.fillRect(5, 25, 800, 600);
field_context.strokeStyle="white";
field_context.strokeRect(10, 30, 785, 565 );
field_context.moveTo(405,30);
field_context.lineTo(400,595);
field_context.stroke();


function Paddle (x,y,width,height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

function Computer() {
  this.paddle = new Paddle(30,280,10,40);
};

function Player() {
  this.paddle = new Paddle(765,280,10,40);
};

function Ball(x,y) {
  this.x = x;
  this.y = y;
};

Paddle.prototype.render = function() {
  field_context.fillStyle = "white";
  field_context.fillRect(this.x, this.y, this.width, this.height);
};

Player.prototype.render = function() {
  this.paddle.render();
};

Computer.prototype.render = function() {
  this.paddle.render();
};

Ball.prototype.render = function() {
  field_context.beginPath();
  field_context.fillStyle = "white";
  field_context.fillRect(this.x, this.y, 10, 10);
};

window.onload = function() {
  render();
};
