document.addEventListener('DOMContentLoaded', function () {
    const randomImage = document.getElementById('randomImage');
    const randomContentContainer = document.getElementById('contentType');
    const randomQuoteContainer = document.getElementById('randomQuote');
    const randomAuthorContainer = document.getElementById('randomAuthor');
    const localDateTimeElement = document.getElementById('localDateTime');
    
    // An array of image filenames in the "motivation" folder
    const catFilenames = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg', 'cat5.jpg'];
    const memeFilenames = ['meme1.jpg', 'meme2.jpg', 'meme3.jpg', 'meme4.jpg', 'meme5.jpg',]

    const quotes = [
        {
            quote: "You miss a 100% of the shots you don't take. - Wayne Gretzky",
            author: "Michael Scott (The Office)"
        },
        {
            quote: "Oh yes, the past can hurt. But, you can either run from it or learn from it.",
            author: "Rafiki (The Lion King)"
        },
        {
            quote: "Just keep swimming." ,
            author: "Dory (Finding Nemo)"
        },
        {
            quote: "Do or do not, there is no try.",
            author: "Yoda (Star Wars)"
        },
        {
            quote: "With great power comes great responsibility.",
            author: "Uncle Ben (Spider-man)"
        },
        {
            quote: "We do what we must because we can.",
            author: "Glados (Portal)"
        },  
        {
            quote: "Believe in the me that believes in you!",
            author: "Kamina (Gurren Lagann)"
        }, 
    ]
    
    // Function to display a random image
    function displayRandomCat() {
        const randomIndex = Math.floor(Math.random() * catFilenames.length);
        const randomFilename = catFilenames[randomIndex];
        randomImage.src = '/images/cats/' + randomFilename;
        randomContentContainer.textContent = "Daily Cat Photo!";
        randomImage.classList.remove('hidden');
        console.log(randomFilename);
        console.log("RandomCat");
    };

    // Function to display random meme
    function displayRandomMeme() {
        const randomIndex = Math.floor(Math.random() * memeFilenames.length);
        const randomFilename = memeFilenames[randomIndex];
        randomImage.src = '/images/memes/' + randomFilename;
        randomContentContainer.textContent = "Daily Meme!";
        randomImage.classList.remove('hidden');
        console.log(randomFilename);
        console.log("RandomCat");
    };

    // Function to display motivational quote
    function displayRandomMotivation() {
        const randomIndex = Math.floor(Math.random() * catFilenames.length);
        const randomQuote = quotes[randomIndex];
        randomContentContainer.textContent = "Daily Motivation!";
        randomQuoteContainer.textContent = randomQuote.quote;
        randomAuthorContainer.textContent = `- ${randomQuote.author}`;
    };

    function updateLocalDateTime() {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        const dateTimeString = now.toLocaleString(undefined, options);
        localDateTimeElement.textContent = dateTimeString;
    }


    // Function to randomize between memes, cat photos, and motivation
    function displayRandomContent() {
        // If you add more functions to display content, put them in this list
        const functions = [displayRandomCat, displayRandomMotivation, displayRandomMeme];
        const randomIndex = Math.floor(Math.random() * functions.length);
        functions[randomIndex]();
    };

    // Update the date and time every second (1000 milliseconds)
    setInterval(updateLocalDateTime, 1000);

    // Call the function to display the date and time immediately
    updateLocalDateTime();

    displayRandomContent();
    
});
