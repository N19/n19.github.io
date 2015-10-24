(function(){var e=0;var t=["ms","moz","webkit","o"];for(var n=0;n<t.length&&!window.requestAnimationFrame;++n){window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(t,n){var r=(new Date).getTime();var i=Math.max(0,16-(r-e));var s=window.setTimeout(function(){t(r+i)},i);e=r+i;return s};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(e){clearTimeout(e)}})()

var canvas = document.getElementById('bullets')
  , ctx = canvas.getContext('2d')
  , w = window.innerWidth
  , h = window.innerHeight
  , n = 300
  , bullets = [];

function Bullet() {
  this.x = ~~(Math.random() * w);
  this.y = ~~(Math.random() * h);
  this.sx = ~~(Math.random() * 25) + 1;
  this.dx = Math.random() > .5 ? true : false;
  this.dy = Math.random() > .5 ? true : false;

  bullets.push(this);
}

Bullet.prototype = {

  draw: function() {
    ctx.beginPath();
    ctx.fillStyle = "#5C5C5C";
    ctx.arc(this.x, this.y, 1, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
  },
  
  update: function() {
    if (this.x > w || this.x < -1) this.dx = !this.dx;
    if (this.y > h || this.y < -1) this.dy = !this.dy;
    this.dx ? this.x += this.sx : this.x -= this.sx;
    this.dy ? this.y++ : this.y--;
  }

};

while(n--) new Bullet();

function main() {
  canvas.width = w = window.innerWidth;
  canvas.height = h = window.innerHeight;
  
  ctx.fillRect(0, 0, w, h);
  
  bullets.forEach(function(blt) {
    blt.update();
    blt.draw();
  });
  
  requestAnimationFrame(main);
}

main();