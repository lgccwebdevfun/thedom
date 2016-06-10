// alert("hello world");
var imageNumber = 1;
var imageName = "images/classProject-";
var imageId = "classProject-";
 var mainImage = document.getElementById("main_image");
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// console.log(mainImage.src, nextButton, prevButton);
//on click
function goNext() {
  console.log("go next");
  if( imageNumber < 5 ) {
    hideImage(imageId + imageNumber);
    imageNumber = imageNumber + 1;
    showImage(imageId + imageNumber);
    // var newSrc = imageName + imageNumber + ".jpg";
    // console.log(newSrc);
    // mainImage.src = newSrc;
  }
}

function goBack() {
  console.log("go back");
  if( imageNumber > 1 ) {
    hideImage(imageId + imageNumber);
    imageNumber = imageNumber - 1;
    showImage(imageId + imageNumber);
  }
}

function showImage(imageId){
  var showImage = document.getElementById(imageId);
  showImage.classList.add('show');
  showImage.classList.remove('hide');

}

function hideImage(imageId){
  console.log("hideImage", imageId);
  var showImage = document.getElementById(imageId);
  showImage.classList.remove('show');
  showImage.classList.add('hide');
}



nextButton.addEventListener("click", goNext);
prevButton.addEventListener("click", goBack);
