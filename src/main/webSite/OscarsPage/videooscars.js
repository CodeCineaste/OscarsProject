// Get all the square elements
const squares = document.querySelectorAll('.square');

// Loop through each square
squares.forEach(square => {
    // Get the img element inside the square
    const img = square.querySelector('img');

    // Get the URL of the video file
    const videoUrl = square.dataset.videoUrl;

    // Add a mouseover event listener to the square
    square.addEventListener('mouseover', () => {
        // Replace the img src with the video URL
        img.src = videoUrl;
    });

    // Add a click event listener to the square
    square.addEventListener('click', () => {
        // Redirect the user to another page
        window.location.href = square.dataset.pageUrl;
    });
});
