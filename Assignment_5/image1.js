

// Array of image URLs
const images = [
        "https://cdn.pixabay.com/photo/2023/11/28/08/53/skyscraper-8416953_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/05/31/16/53/bookmarks-5243253_1280.jpg",
        "https://media.istockphoto.com/id/1868060029/photo/capitol-building-in-washington-dc-usa.jpg?s=2048x2048&w=is&k=20&c=9XV--FsN71UuSU01WqKpgIwYsGoNZUpqUzhnglyeqU4=",
        "https://cdn.pixabay.com/photo/2022/01/03/19/39/flag-6913477_1280.jpg",
];

let currentIndex = 0;

// Function to update image
function updateImage() {
    let img = document.getElementById("sliderImage");
    img.style.opacity = "0";
    setTimeout(() => {
        img.src = images[currentIndex];
        img.style.opacity = "1";
    }, 300);
}

// Show first image initially
updateImage();

// Function to show previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Function to show next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}
            
            
 