
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

  fill(255)
  let blueColor = color(8, 183, 189);
  let yellowColor = color(237, 203, 66);
  let vocalLerpNumber = map (vocal, 0, 100, 0, 1)
  let vocalColor = lerpColor(yellowColor, blueColor, vocalLerpNumber)
  
  strokeWeight(4)

  let sizeOfBlock = 400;

  for(let i = 1; i < sizeOfBlock; i++){
   let gradentAmount = map(i, 0, sizeOfBlock, 0, 1)
   let strokeColor = lerpColor(vocalColor, blueColor, gradentAmount)

  stroke(strokeColor)
   line(0, 100+i, width, 100+i)
}

let drumMap = map(drum, 0, 100, 5, 70);
let lengthOfLine = 300;
let lineStart = 100;
let lineEnd = lineStart+lengthOfLine;
stroke(drumMap,80,80);
for(var i=1; i<= drumMap; i++){
  var lineStep = i*20;
  line (lineStart, lineStep, lineEnd, lineStep)
}

  let EllipseSize = map(drum, 0, 100, 100, 200)
  let EllipseYOffset = map(vocal, 0, 300, 100, 250)

  let baseWave = map(bass, 0, 100, 20, 120)
  let waveHeight = baseWave;
  let waveFreq = 8

  let baseYLoki = height/2;
  beginShape()
  for(let i = 1; i < width; i++){
   vertex(i, baseYLoki-waveHeight*sin(waveFreq * i))
  }
  endShape()

  ellipse(width/2, EllipseYOffset, EllipseSize, EllipseSize)

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