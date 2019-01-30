


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
score = 0;
lives = 3;



var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;




document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true;
  }
  else if(e.keyCode == 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = false;
  }
  else if(e.keyCode == 37) {
    leftPressed = false;
  }
}

document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}

function mouveMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeftl
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}


function collisionDetection() {
    for(var c=0; this.c < this.brickColumnCount; this.c++) {
        for(var r=0; r<brickRowCount; this.r++) {
            var b = this.bricks[this.c][this.r];
            if(b.this.status == 1) {
                if(this.x > b.this.x && this.x < b.this.x + this.brickWidth && this.y > b.this.y && this.y < b.this.y + this.brickHeight) {
                    this.dy = -this.dy;
                    b.this.status = 0;
                    this.score++;
                    if(score == this.brickRowCount * this.brickColumnCount) {
                        alert("You win! Congratulations!");
                        document.location.reload();
                        clearInterval(interval);
                    }
                }    
            }
        }
    }
}



// Potential Variables
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
// var rightPressed = false;
// var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;
// Potential Variables







class Ball {
    constructor(x, y, radius = 10) {
        this.x = 0;
        this.y = 0;
        this.dx = 2;
        this.dy = -2;
        this.radius = radius;
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;
    }

    render(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath(); 
    }
}
// ball.dx = 3;
// ball.dy = -3;
// const ball = new Ball(canvas.width / 2, canvas.height - 30)
// ball.move();
// ball.render(ctx);

/*Ball class,
Paddle class,
Brick class,
Score class,
Lives class,
Game class,*/

class Paddle {
    constructor(paddleX, paddleHeight, paddleWidth, rightPressed = false, leftPressed = false) {
        this.paddleX = 0
        this.paddleHeight = 10
        this.paddleWidth = 75;
        this.dx = 2;// umm
        this.dy = -2;// umm
        this.rightPressed = rightPressed;
        this.leftPressed = leftPressed;
    }

    // keyDownHandler(e) {
    //     if(e.keyCode == 39) {
    //         this.rightPressed = true;
    //     }
    //     else if(e.keyCode == 37) {
    //         this.leftPressed = true;
    //     }
    // }
    // keyUpHandler(e) {
    //     if(e.keyCode == 39) {
    //         this.rightPressed = false;
    //     }
    //     else if(e.keyCode == 37) {
    //         this.leftPressed = false;
    //     }
    // }

    // mouseMoveHandler(e) {
    //     var relativeX = e.clientX - canvas.offsetLeft;
    //     if(relativeX > 0 && relativeX < canvas.width) {
    //         paddleX = relativeX - paddleWidth/2;
    //     }
    // }





    // collisionDetection() {
    //     for(var c=0; this.c < this.brickColumnCount; this.c++) {
    //         for(var r=0; r<brickRowCount; this.r++) {
    //             var b = this.bricks[this.c][this.r];
    //             if(b.status == 1) {
    //                 if(this.x > b.this.x && this.x < b.this.x + this.brickWidth && this.y > b.this.y && this.y < b.this.y + this.brickHeight) {
    //                     this.dy = this.-dy;
    //                     b.status = 0;
    //                     score++;
    //                     if(score == this.brickRowCount * this.brickColumnCount) {
    //                         alert("You win! Congratulations!");
    //                         document.location.reload();
    //                         clearInterval(interval);
    //                     }
    //                 }    
    //             }
    //         }
    //     }
    // }
      

    // mouveMoveHandler(e) {
    //     var relativeX = e.clientX - canvas.offsetLeftl
    //     if(relativeX > 0 && relativeX < canvas.width) {
    //         paddleX = relativeX - paddleWidth/2;
    //     }
    // }


    render(ctx) {
        ctx.beginPath();
        ctx.rect(this.paddleX, canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}

// const paddle = new Paddle((canvas.width-paddleWidth)/2, 10, 75)
// paddle.keyUpHandler(e);
// paddle.keyDownHandler(e);
// paddle.mouseMoveHandler(e);
// paddle.collisionDetection();
// paddle.render(ctx);



class Brick {
    constructor(brickRowCount = 5, brickColumnCount = 3, brickWidth = 75, brickHeight = 20, brickPadding = 10, brickOffsetTop = 30, brickOffsetLeft = 30) {
        this.brickRowCount = brickRowCount;
        this.brickColumnCount = brickColumnCount;
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.brickPadding = brickPadding;
        this.brickOffsetTop = brickOffsetTop;
        this.brickOffsetLeft = brickOffsetLeft;
        this.status = 1

    }

    // brickNumber() {
    //     var bricks = [];
    //     for(var c = 0; this.c<this.brickColumnCount; this.c++) { // keeps getting an error here
    //         bricks[c] = [];
    //         for( r = 0; r < this.brickRowCount; r++) {
    //             bricks[c][r] = { x: 0, y: 0, status: 1 }; // Come back to this part *************
    //         }
    //     }

    // }

    // collisionDetection() {
    //     for(var c=0; this.c < this.brickColumnCount; this.c++) {
    //         for(var r=0; r<brickRowCount; this.r++) {
    //             var b = this.bricks[this.c][this.r];
    //             if(b.this.status == 1) {
    //                 if(this.x > b.this.x && this.x < b.this.x + this.brickWidth && this.y > b.this.y && this.y < b.this.y + this.brickHeight) {
    //                     this.dy = -this.dy;
    //                     b.this.status = 0;
    //                     this.score++;
    //                     if(score == this.brickRowCount * this.brickColumnCount) {
    //                         alert("You win! Congratulations!");
    //                         document.location.reload();
    //                         clearInterval(interval);
    //                     }
    //                 }    
    //             }
    //         }
    //     }
    // }


    render(ctx) {

        var bricks = [];
        for(var c = 0; this.c<this.brickColumnCount; this.c++) { // keeps getting an error here
            bricks[c] = [];
            for( r = 0; r < this.brickRowCount; r++) {
                bricks[c][r] = { x: 0, y: 0, status: 1 }; // Come back to this part *************
            }
        }
        for(var c=0; c<brickColumnCount; c++) {
            // ctx.fillStyle = '#' + Math.floor(Math.random()*0xffffff).toString(16); ||||| Creates literally random colors BUT per row, versus all the same random color
            for(var r = 0; r < this.brickRowCount; r++) {
                if(bricks[c][r].status == 1) {
                    var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                    var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                    this.bricks[this.c][this.r].x = brickX;
                    this.bricks[this.c][this.r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    // ctx.fillStyle = randomColor();  //  for every color different (but random)
                    ctx.fillStyle = "0095DD";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
}

// const brick = new Brick(5, 3, 75, 20, 10, 30, 30);
// brick.brickNumber();
// brick.collisionDetection();
// brick.render(ctx);


class Score {
    constructor() {
    }

    render(ctx) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: " + score, 8, 20); // brick.score???? maybe???
    }
    
}

// const score = new Score();
// score.render(ctx);

class Lives {
    constructor() {

    }
    render(ctx) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: "+ lives, canvas.width-65, 20);
    }
    
}

// const lives = new Lives();
// lives.render(ctx);


// class Game {
//     constructor() {
//         this.ball = new Ball(x, y);
//     }
// }




const ball = new Ball(canvas.width / 2, canvas.height - 30)
ball.dx = 3;
ball.dy = -3;
ball.move();
ball.render(ctx);

const scores = new Score();
scores.render(ctx);

const currentLives = new Lives();
currentLives.render(ctx);


const paddle = new Paddle((canvas.width-this.paddleWidth)/2, 10, 75)
// paddle.keyUpHandler(e);
// paddle.keyDownHandler(e);
// paddle.mouseMoveHandler(e);
// paddle.collisionDetection();
paddle.render(ctx);

const brick = new Brick(5, 3, 75, 20, 10, 30, 30);
// brick.brickNumber();
// brick.collisionDetection();
brick.render(ctx);
