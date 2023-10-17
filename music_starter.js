let firstRun = true
let Background;
let Background2;
let Water = [];
let stars = [];
let ColourStars = [];
let ColourStars2 = [];
let Meteors = [];

//vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(30)
  textFont('BrushScriptMT'); // please use CSS safe fonts,Garamond
  rectMode(CENTER)
  textSize(16);
  strokeWeight(2)


//background
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


//images
if (firstRun){
  rectMode(CENTER);
  Background = loadImage('bg.png');
  Background2 = loadImage('bg2.png');

  Water.push(loadImage('water_0.png'));
  Water.push(loadImage('water_1.png'));
  Water.push(loadImage('water_2.png'));
  Water.push(loadImage('water_3.png'));
  Water.push(loadImage('water_4.png'));

  stars.push(loadImage('stars_0.png'));
  stars.push(loadImage('stars_1.png'));
  stars.push(loadImage('stars_2.png'));
  stars.push(loadImage('stars_3.png'));
  stars.push(loadImage('stars_4.png'));
  stars.push(loadImage('stars_5.png'));

  ColourStars.push(loadImage('colourS_0.png'));
  ColourStars.push(loadImage('colourS_1.png'));
  ColourStars.push(loadImage('colourS_2.png'));
  ColourStars.push(loadImage('colourS_3.png'));
  ColourStars.push(loadImage('colourS_4.png'));

  ColourStars2.push(loadImage('colourS2_0.png'));
  ColourStars2.push(loadImage('colourS2_1.png'));
  ColourStars2.push(loadImage('colourS2_2.png'));
  ColourStars2.push(loadImage('colourS2_3.png'));
  ColourStars2.push(loadImage('colourS2_4.png'));

  Meteors.push(loadImage('meteors_0.png'));
  Meteors.push(loadImage('meteors_1.png'));
  Meteors.push(loadImage('meteors_2.png'));
  Meteors.push(loadImage('meteors_3.png'));
  Meteors.push(loadImage('meteors_4.png'));
  Meteors.push(loadImage('meteors_5.png'));
  Meteors.push(loadImage('meteors_6.png'));
  Meteors.push(loadImage('meteors_7.png'));
  Meteors.push(loadImage('meteors_8.png'));
  Meteors.push(loadImage('meteors_9.png'));
  Meteors.push(loadImage('meteors_10.png'));
  Meteors.push(loadImage('meteors_11.png'));
  Meteors.push(loadImage('meteors_12.png'));
  Meteors.push(loadImage('meteors_13.png'));
  Meteors.push(loadImage('meteors_14.png'));
  Meteors.push(loadImage('meteors_15.png'));
  Meteors.push(loadImage('meteors_16.png'));
  Meteors.push(loadImage('meteors_17.png'));
  Meteors.push(loadImage('meteors_18.png'));
  Meteors.push(loadImage('meteors_19.png'));
  Meteors.push(loadImage('meteors_20.png'));
  Meteors.push(loadImage('meteors_21.png'));

  firstRun = false
}
  var drumFrame = int(map(drum, 0, 100, 0, 21));
  console.log(drumFrame);
  push();
  scale(0.2);
  image(Meteors[drumFrame], 1300, 480)
  pop();

  image(Background2, 0, 0)//buildings

  var DrumFrame = int(map(drum, 0, 100, 0, 5));
  console.log(DrumFrame);
  push();
  scale(0.7);
  image(stars[DrumFrame], 950, 300)
  pop(); 

  var BassFrame = int(map(bass, 0, 100, 0, 4));
  console.log(BassFrame);
  push();
  scale(0.667);
  image(ColourStars[BassFrame], 0, 0)
  pop();

  var OtherFrame = int(map(other, 0, 100, 0, 4));
  console.log(OtherFrame);
  push();
  scale(0.667);
  image(ColourStars2[OtherFrame], 0, 10)
  pop();

//loops
let bassMap = map(bass, 0, 100, 0, 20);
let lengthOfLine = 30;
let lineStart = 563;
let lineEnd = lineStart+lengthOfLine;
stroke(65, 54, 103);
for(var i=1; i<= bassMap; i++){
  var lineStep = i*15;
  line (lineStart, lineStep+450, lineEnd, lineStep+450)
}

let drumMap = map(drum, 0, 100, 0, 15);
let lengthOfLine2 = 40;
let line2Start = 765;
let line2End = line2Start+lengthOfLine2;
stroke(156, 138, 166);
for(var i=1; i<= drumMap; i++){
  var line2Step = i*15;
  line (line2Start, line2Step+530, line2End, line2Step+530)
}

let otherMap = map(other, 0, 100, 0, 8);
let lengthOfLine3 = 58;
let line3Start = 1156;
let line3End = line3Start+lengthOfLine3;
stroke(123, 99, 141);
for(var i=1; i<= otherMap; i++){
  var line3Step = i*15;
  line (line3Start, line3Step+600, line3End, line3Step+600)
}

var VocalFrame = int(map(vocal, 0, 100, 0, 4));
console.log(VocalFrame);
push();
scale(0.667);
image(Water[VocalFrame], 0, 0)
pop();

image(Background, 0, 0)//ground



// display "words"
textAlign(CENTER);
textSize(vocal);
text(words, width/2.5, height/2.7);
}