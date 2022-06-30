var bg, backgroundIMG;
var balloon, balloonIMG;
var bird, avion, obstacleBalloon, obstacleBottom;
var obstacleTop;
var obstacleBottom1, obstacleBottom2, obstacleBottom3, obstacleBottom4, obstacleBottom5, obstacleBottom6, obstacleBottom7, obstacleBottom8;


function preload(){
    backgroundIMG = loadImage("./assets/dia1.png");
    balloonIMG = loadAnimation("./assets/balloon1.png", "./assets/balloon2.png", "./assets/balloon3.png");
    bird = loadImage("./assets/obsTop2.png");
    avion = loadImage("./assets/avion.png");
    obstacleBalloon = loadImage("./assets/obsTop1.png");
    obstacleBottom1 = loadImage("./assets/obsBottom1.png");
    obstacleBottom2 = loadImage("./assets/obsBottom2.png");
    obstacleBottom3 = loadImage("./assets/obsBottom3.png");
    obstacleBottom4 = loadImage("./assets/obstaculo2.png");
    obstacleBottom5 = loadImage("./assets/obstaculo3.png");
    obstacleBottom6 = loadImage("./assets/obstaculo4.png");
    obstacleBottom7 = loadImage("./assets/obstaculo10.png");
    obstacleBottom8 = loadImage("./assets/obstaculo12.png");
}

function setup(){
    createCanvas(1000,925);

    bg = createSprite(1000, 250, 100,20);
    bg.addImage(backgroundIMG);
    bg.scale = 0.4
    bg.velocityX = -3;

    balloon = createSprite(100, 350);
    balloon.addAnimation("baloonAnimation", balloonIMG);
    balloon.scale = 0.4;

}

function draw(){
    background("black");

    if(bg.x < -600){
        bg.x = 1600;
    }

    if(keyDown("space")){
        balloon.velocityY = -6;
    }

    balloon.velocityY +=2;

    spawnBottomObstacles();
    spawnTopObstacles();
    drawSprites();
}

function spawnTopObstacles(){
if(frameCount%180 === 0){
    obstacleTop = createSprite(1100, 50, 40, 30);
    obstacleTop.velocityX = -4;
    obstacleTop.y = Math.round(random(50,250));
    var rand = Math.round(random(1,3));
    switch(rand){
        case 1: obstacleTop.addImage(avion);
        obstacleTop.scale = 0.2;
        break;
        case 2: obstacleTop.addImage(bird);
        obstacleTop.scale = 0.2;
        break;
        case 3: obstacleTop.addImage(obstacleBalloon);
        obstacleTop.scale = 0.2;
        break;
        default: break;
    }
    obstacleTop.lifetime = 400;
    balloon.depth += 1;
}
}

function spawnBottomObstacles(){
    if(frameCount%180 === 0){
        obstacleBottom = createSprite(1100, 700, 40, 30);
        obstacleBottom.velocityX = -4;
        //obstacle.y = Math.round(random(50,250));
        var rand = Math.round(random(1,8));
        switch(rand){
            case 1: obstacleBottom.addImage(obstacleBottom1);
            obstacleBottom.scale = 0.2;
            break;
            case 2: obstacleBottom.addImage(obstacleBottom2);
            obstacleBottom.scale = 0.2;
            break;
            case 3: obstacleBottom.addImage(obstacleBottom3);
            obstacleBottom.scale = 0.2;
            break;
            case 4: obstacleBottom.addImage(obstacleBottom4);
            obstacleBottom.scale = 1.25;
            break;
            case 5: obstacleBottom.addImage(obstacleBottom5);
            obstacleBottom.scale = 2;
            break;
            case 6: obstacleBottom.addImage(obstacleBottom6);
            //obstacleBottom.scale = 0.2;
            break;
            case 7: obstacleBottom.addImage(obstacleBottom7);
            //obstacleBottom.scale = 0.2;
            break;
            case 8: obstacleBottom.addImage(obstacleBottom8);
            //obstacleBottom.scale = 0.2;
            break;
            default: break;
        }
        obstacleBottom.lifetime = 400;
        balloon.depth += 1;
    }
    }