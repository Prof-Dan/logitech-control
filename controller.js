var Logitech = require('logitech-dual-action-controller')
var robot = require('robotjs')

var controller = new Logitech();

var xMoveSpeed = 0;
var yMoveSpeed = 0;

controller.on('left:move', function (data) {

  xMoveSpeed = data.x / 4;

  //console.log(data.x);

  if(data.x < 10 && data.x > -15) xMoveSpeed = 0;

  yMoveSpeed = -data.y / 4;

  if(data.y < 10 && data.y > -10) yMoveSpeed = 0;

})

controller.on('2:press', function() {

  robot.mouseClick();

})

setInterval(function() {

  var mousePos = robot.getMousePos();

  //console.log('move');

  if(xMoveSpeed != 0 || yMoveSpeed != 0)robot.moveMouse(mousePos.x+xMoveSpeed, mousePos.y+yMoveSpeed)

}, 33)
