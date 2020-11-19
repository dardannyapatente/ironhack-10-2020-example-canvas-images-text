const canvasElement = document.querySelector('canvas');

const context = canvasElement.getContext('2d');

// Text

context.fillStyle = 'yellowgreen';

context.font = '32px sans-serif';

context.fillText('Hello World', 300, 400);

// Background gradients

const blueGradient = context.createLinearGradient(0, 200, 100, 200);

blueGradient.addColorStop(0, 'aqua');
blueGradient.addColorStop(1, 'darkblue');

context.fillStyle = blueGradient;

context.fillRect(0, 0, 300, 300);

// Background patterns

/*
const background = new Image();
background.src = 'images/field.jpg';

background.addEventListener('load', () => {
  const pattern = context.createPattern(background, 'repeat');
  context.fillStyle = pattern;
  context.fillRect(0, 0, 1000, 1000);
});
*/

// Images

const marioImage = new Image();
marioImage.src = 'images/mario.png';

// Takes a callback function and the amount of time in milliseconds
// before the callback is meant to run

// setTimeout(function () {
//   context.drawImage(marioImage, 100, 100, 200, 200);
// }, 1 * 1000);

marioImage.addEventListener('load', () => {
  // Draw only with starting point
  // context.drawImage(marioImage, 100, 100);
  // Draw setting width and height
  context.drawImage(marioImage, 100, 100, 200, 300);
  // Draw only portion of image
  // context.drawImage(marioImage, 150, 150, 700, 700, 100, 100, 200, 300);
});

// Race condition

const linkImage = new Image();
linkImage.src = 'images/link.png';

linkImage.addEventListener('load', () => {
  const width = 200;
  const ratio = linkImage.height / linkImage.width;
  context.drawImage(linkImage, 200, 200, width, width * ratio);
});

/*
1400 ------ 300
1087 ------ x

x = 1087 * 300 / 1400
x = 232
*/
