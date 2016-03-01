'use strict';

var pixels = [];
var sizeOfPixel = 90;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  var c = createCanvas(windowWidth, windowHeight);
  c.parent('sketch-frame');

  for(var i = 0; i < windowWidth/sizeOfPixel; i++){
    for(var j = 0; j < windowHeight/sizeOfPixel; j++){
        pixels.push(new Pixel(i*sizeOfPixel, j*sizeOfPixel));
    }
  }
}

function draw(){
    for(var i = 0; i < pixels.length ; i++){
            pixels[i].update();
    }
}

var Pixel = function(x, y){
    this.r = Math.random() * 200;
    this.g = Math.random() * 25;
    this.b = Math.random() * 230;
    this.x = x;
    this.y = y;
    this.fOffset = Math.random() * 200;
    this.speed = 90;
}

Pixel.prototype.update = function() {
    this.newR = this.r * Math.sin((frameCount/this.speed) + this.fOffset);
    this.newG = this.g * Math.sin((frameCount/this.speed) + this.fOffset);
    this.newB = this.b * Math.sin((frameCount/this.speed) + this.fOffset);
    fill(this.newR, this.newG, this.newB);
    strokeWeight(0);
    rect(this.x, this.y, sizeOfPixel, sizeOfPixel);
}