const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altTextPictures = {"pic1.jpg":"Picture of a human eye", 
    "pic2.jpg":"Picture of abstract brush strokes", 
    "pic3.jpg":"Picture of white and puprle flowers", 
    "pic4.jpg":"Picture of ancient egyptian hirogliphics", 
    "pic5.jpg":"Picture of butterfly on a leaf"
}
/* Looping through images */
for(let i = 0; i < pictures.length; i++){
    let currentPicture = pictures[i]
    const newImage = document.createElement('img');
    newImage.src = `./images/${currentPicture}`;
    newImage.alt = altTextPictures[currentPicture];
    thumbBar.appendChild(newImage);
};

thumbBar.addEventListener('click', function(event){
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
})

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () =>{
    const btnState = btn.getAttribute('class');
    if (btnState === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})