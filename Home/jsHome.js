//Home page

//Slide show
let myImagesArray = [
    'imagesHome/main1.png',
    'imagesHome/main2.png',
    'imagesHome/main3.jpg',
  ];
  
let ImageNumber = 0;
let difference = myImagesArray.length - 1;
  
let delay = 3000; //3sec
  
setInterval('ChangeImages(1)', delay);

function ChangeImages(direction) {

ImageNumber = ImageNumber + direction;
  
if (ImageNumber > difference) {

        ImageNumber = 0;
    } 
  
    if (ImageNumber < 0) {
      
      ImageNumber = difference;
    } 
    
    document.getElementById('slideshow').src = myImagesArray[ImageNumber];
  } 