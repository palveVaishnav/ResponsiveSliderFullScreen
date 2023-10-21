// document.getElementById('next').onclick = function () {
//   let lists = document.querySelectorAll('.item');
//   document.getElementById('slide').appendChild(lists[0]);
// }
// document.getElementById('prev').onclick = function () {
//   let lists = document.querySelectorAll('.item');
//   document.getElementById('slide').prepend(lists[lists.length - 1]);
// }


// Function to move to the next image
function moveToNextImage() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

// Function to move to the previous image
function moveToPreviousImage() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// Automatically change images in the forward direction after 1 second
setInterval(moveToNextImage, 5000);

// Assign the function to move to the previous image on click of the 'prev' button
document.getElementById('prev').onclick = moveToPreviousImage;
document.getElementById('next').onclick = moveToNextImage;
