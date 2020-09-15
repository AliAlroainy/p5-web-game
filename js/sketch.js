let bgColorR, bgColorG, bgColorB, bgColorRSpeed, bgColorGSpeed, bgColorBSpeed;
let fish, fishSize, fishSizeSpeed, fishDist, fishAlpha, fishColorR, fishColorG, fishColorB;
let mouthCurveL, mouthCurveR;
let happinessScore;

function setup() {
  createCanvas(600, 450);
  angleMode(DEGREES);
  
  //Load the fish image and set the size
  fish = loadImage('Fish.png');
  fishSize = 150;
  fishSizeSpeed = 0.3;
  
  //Set the background to a random color
  bgColorR = random(100, 255);
  bgColorG = random(100, 255);
  bgColorB = random(100, 255);
  bgColorRSpeed = 0.7;
  bgColorGSpeed = 0.8;
  bgColorBSpeed = 0.9;
  
  //Set the fish to a random color
  fishColorR = random(200, 255);
  fishColorG = random(200, 255);
  fishColorB = random(200, 255);
}

function draw() {
  background(bgColorR, bgColorG, bgColorB);
  
  //Get the distance between Gumball and Fish
  fishDist = dist(mouseX, mouseY, 212, 212);

  //Calculate the Happiness Score and make sure it's between 0 to 100
  happinessScore = map(fishDist, 0, 400, 100, 0);
  happinessScore = int(happinessScore) + 1;
  if (happinessScore > 100) {
    happinessScore -= 1;
  }
  
  if (happinessScore < 0) {
    happinessScore = 0;
  }
  
  //Slightly change the background color
  bgColorR += bgColorRSpeed;
  bgColorG += bgColorGSpeed;
  bgColorB += bgColorBSpeed;
  
  if (bgColorR > 255 || bgColorR < 100) {
    bgColorRSpeed *= -1;
  }
  
  if (bgColorG > 255 || bgColorG < 100) {
    bgColorGSpeed *= -1;
  }
  
  if (bgColorB > 255 || bgColorB < 100) {
    bgColorBSpeed *= -1;
  }
  
  //Move and resize Gumball
  push();
  translate(-20, -20);
  scale(0.8);
  
  //Draw his ears
  strokeWeight(3);
  fill(74, 193, 227);
  push();
  translate(156, 170);
  rotate(45);
  ellipse(0, 0, 170, 103);
  pop();
  ellipse(254.5, 122, 80, 130);
  
  //Draw his head
  ellipse(248, 219, 290, 260);  
  arc(282.5, 266, 290, 168, -26.3, 106.7)
  
  //Draw his eyebrows
  strokeWeight(10);
  arc(195, 162, 75, 67, 210, 270);
  arc(288, 155, 75, 67, 270, 325);
  
  //Draw his eyes
  strokeWeight(3);
  fill(255);
  circle(195, 204, 101);
  circle(315, 204, 101);
  fill(0);
  circle(197, 205, 41.4);
  circle(316, 205, 41.4);
  
  //Draw his mouth
  fill(241, 110, 116);
  mouthCurveL = map(happinessScore, 0, 100, 280, -320);
  mouthCurveR = map(happinessScore, 0, 100, 280, -220);
  curve(223, mouthCurveL, 231.5, 248.6, 323.6, 262.5, 356, mouthCurveR);
  
  //Draw his nose
  fill(206, 230, 238);
  curve(210.5, 270, 231.5, 248.6, 323.6, 262.5, 322.6, 400);
  curve(210.5, 150, 231.5, 248.6, 323.6, 262.5, 322.6, 180);
  line(285.6, 247, 293.5, 267);
  fill(238, 105, 54);
  arc(286, 247.5, 30, 13, 4, 182);
  
  //Draw his whiskers
  strokeWeight(5.5);
  push();
  strokeCap(SQUARE);
  line(123, 282, 143, 266);
  line(145, 312, 166, 288);
  line(176, 331, 193, 306);
  line(371, 298, 393, 321);
  line(397, 274, 420, 291);
  pop();
  
  pop();
  
  //Set the fish image as the cursor
  noCursor();
  imageMode(CENTER);
  fishAlpha = map(happinessScore, 0, 100, 500, 50);
  tint(fishColorR, fishColorG, fishColorB, fishAlpha);
  image(fish, mouseX, mouseY, fishSize, fishSize);
  fishSize += fishSizeSpeed;
  if (fishSize > 160 || fishSize < 140) {
    fishSizeSpeed *= -1;
  }
  
  //Create the scoreboard
  push();
  fill(255, 217, 63);
  noStroke();
  rect(0, 390, 600, 60);
  fill(0);
  textSize(30);
  textFont('Nunito');
  text("Gumball's Happiness Score", 30, 430);
  fill(237, 0, 128);
  rect(440, 350, 160, 120);
  fill(255, 217, 63);
  textFont('Arvo');
  textAlign(CENTER);
  textSize(80);
  text(happinessScore, 520, 430)
  pop();
}