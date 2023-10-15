let firstRun = true
let bgImage;
let stars = [];
//let Meteors = [];
//vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(20);
  strokeWeight(5)
  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;

  let blueColor = color(45, 64, 139);
  let purpleColor = color(111, 75, 138);
  let pinkColor = color(169, 94, 143);
  let vocalLerpNumber = map (vocal, 0, 100, 0, 1)
  let vocalColor = lerpColor(blueColor, purpleColor, vocalLerpNumber)
  let sizeOfBlock = 720;

  for(let i = 1; i < sizeOfBlock; i++){
   let gradentAmount = map(i, 0, sizeOfBlock, 0, 1)
   let strokeColor = lerpColor(vocalColor, pinkColor, gradentAmount)

  stroke(strokeColor)
  strokeWeight(4)
   line(0, 100+i, width, 100+i)
}

if (firstRun){
  rectMode(CENTER);
  bgImage = loadImage('bg.png');
  stars.push(loadImage('stars_0.png'));
  stars.push(loadImage('stars_1.png'));
  stars.push(loadImage('stars_2.png'));
  stars.push(loadImage('stars_3.png'));
  stars.push(loadImage('stars_4.png'));
  stars.push(loadImage('stars_5.png'));

  firstRun = false
}
  image(bgImage, 0, 0)

  var DrumFrame = int(map(drum, 0, 100, 0, 5));
  console.log(DrumFrame);
  push();
  scale(0.7);
  image(stars[DrumFrame], 950, 300)
  pop();

let bassMap = map(bass, 0, 100, 0, 20);
let lengthOfLine = 30;
let lineStart = 560;
let lineEnd = lineStart+lengthOfLine;
stroke(65, 54, 103);
for(var i=1; i<= bassMap; i++){
  var lineStep = i*15;
  line (lineStart, lineStep+450, lineEnd, lineStep+450)
}


  // let baseWave = map(bass, 0, 100, 20, 120)
  // let waveHeight = baseWave;
  // let waveFreq = 8

  // let baseYLoki = height/2;
  // beginShape()
  // for(let i = 1; i < width; i++){
  //  vertex(i, baseYLoki-waveHeight*sin(waveFreq * i))
  // }
  // endShape()

  // let EllipseSize = map(drum, 0, 100, 100, 200)
  // let EllipseYOffset = map(vocal, 0, 300, 100, 250)
  //ellipse(width/2, EllipseYOffset, EllipseSize, EllipseSize)


   // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
}

// function draw_one_frame(words, vocal, drum, bass, other, counter) {
//   background(225);
 
// var drumHeight = map(drum, 0, 100, 0+ballSize/2, height);

// var ballSize = map(vocal, 0, 100, 40, 150);

// fill(5);
// ellipse(width/2, drumHeight, ballSize);
// }