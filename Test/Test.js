document.addEventListener("DOMContentLoaded", function() {
    // Get the square container
    var squareContainer = document.getElementById("squareContainer");
    
    // Get the square element
    var square = document.getElementById("square");
    var rotationAngle = 0; // Variable to keep track of the rotation angle
    var gameActive = true; // Variable to track the game state
    var fallingSquareInterval; // Interval for creating falling squares
    var gameOverAlertShown = false; // Variable to track whether the "Game Over" alert has been shown
    var score = 0;

    // Function to rotate the square
    function rotateSquare(degrees) {
        rotationAngle = degrees % 360; // Ensure rotation angle stays within 0-359 degrees
        square.style.transform = "rotate(" + rotationAngle + "deg)";
    }

    // Function to create a bullet
    function createBullet() {
        var bullet = document.createElement("div");
        bullet.classList.add("bullet");
    
        // Position bullet at the tip of the square's rotated edge
        var squareRect = square.getBoundingClientRect();
        var squareCenterX = squareRect.left + squareRect.width / 2;
        var squareCenterY = squareRect.top + squareRect.height / 2;
        
        // Calculate the initial position of the bullet based on rotation angle
        var bulletOffset = 20; // Adjust this value to position the bullet closer or farther from the square center
        var angleInRadians = (rotationAngle - 90) * Math.PI / 180;
        var bulletX = squareCenterX + bulletOffset * Math.cos(angleInRadians);
        var bulletY = squareCenterY + bulletOffset * Math.sin(angleInRadians);
    
        // Set the position of the bullet
        bullet.style.left = bulletX + "px";
        bullet.style.top = bulletY + "px";
    
        squareContainer.appendChild(bullet);
    
        // Calculate bullet trajectory based on square's rotation angle
        var bulletSpeed = 25;
        var bulletVelocityX = bulletSpeed * Math.cos(angleInRadians);
        var bulletVelocityY = bulletSpeed * Math.sin(angleInRadians);
    
        // Animate bullet
        var bulletInterval = setInterval(function() {
            var bulletPositionX = parseInt(bullet.style.left);
            var bulletPositionY = parseInt(bullet.style.top);
    
            if (bulletPositionX < 0 || bulletPositionX > window.innerWidth || bulletPositionY < 0 || bulletPositionY > window.innerHeight) {
                clearInterval(bulletInterval);
                squareContainer.removeChild(bullet); // Remove bullet when it goes out of the screen
                score += 1;
            } else {
                bullet.style.left = (bulletPositionX + bulletVelocityX) + "px";
                bullet.style.top = (bulletPositionY + bulletVelocityY) + "px";
                
                // Check for collision with falling squares
                var bulletsRect = bullet.getBoundingClientRect();
                var bulletsCenterX = bulletsRect.left + bulletsRect.width / 2;
                var bulletsCenterY = bulletsRect.top + bulletsRect.height / 2;
                var fallingSquares = document.querySelectorAll(".falling-square");

                fallingSquares.forEach(function(fallingSquare) {
                    var squareRect = fallingSquare.getBoundingClientRect();
                    if (bulletsCenterX > squareRect.left && bulletsCenterX < squareRect.right && bulletsCenterY > squareRect.top && bulletsCenterY < squareRect.bottom) {
                        squareContainer.removeChild(bullet); // Remove bullet
                        squareContainer.removeChild(fallingSquare); // Remove falling square
                        clearInterval(bulletInterval); // Stop bullet animation
                    }
                });
            }
        }, 30);
    }

    // Function to create and animate falling square
    function createFallingSquare() {
        if (!gameActive) return; // Check if the game is still active
        
        var fallingSquare = document.createElement("div");
        fallingSquare.classList.add("falling-square");
        
        // Set initial position at a random x coordinate within the specified range
        var screenWidth = window.innerWidth;
        var minRange = screenWidth * 0.30; // 25% of the window width
        var maxRange = screenWidth * 0.70; // 75% of the window width
        var randomX = Math.floor(Math.random() * (maxRange - minRange + 1.5)) + minRange;
        fallingSquare.style.left = randomX + "px";
        fallingSquare.style.top = "0px"; // Start from the top of the screen
        
        squareContainer.appendChild(fallingSquare);

        // Animation: Move square down
        var moveInterval = setInterval(function() {
            var fallingSquarePositionY = parseInt(fallingSquare.style.top);
            var screenHeight = window.innerHeight;

            if (fallingSquarePositionY >= screenHeight) {
                clearInterval(moveInterval);
                squareContainer.removeChild(fallingSquare); // Remove square when it reaches the bottom of the screen
                stopGame(); // Stop the game when a falling square touches the bottom of the window
            } else {
                fallingSquare.style.top = (fallingSquarePositionY + 1) + "px"; // Decrease the speed (adjust this value as needed)
            }
        }, 30);
    }

    // Function to stop the game
    function stopGame() {
        gameActive = false; // Update game state

        clearInterval(fallingSquareInterval); // Clear falling square interval
        clearInterval(createBullet); // Clear bullet creation interval

        // Remove event listener for keyboard events
        document.removeEventListener("keydown", handleKeyboard);

        if (!gameOverAlertShown) {
            alert("Game over. Press CTRL+R to restart");
            gameOverAlertShown = true; // Update flag to indicate the alert has been shown
        }

    }

    // Event listener for keyboard events
    function handleKeyboard(event) {
        if (event.key === " ") {
            createBullet(); // Create a bullet when spacebar is pressed
        } else if (event.key === "ArrowRight") {
            // Rotate the square clockwise by 10 degrees
            rotateSquare(rotationAngle + 5);
        } else if (event.key === "ArrowLeft") {
            // Rotate the square counterclockwise by 10 degrees
            rotateSquare(rotationAngle - 5);
        }
    }
    document.addEventListener("keydown", handleKeyboard);

    // Set interval to create falling squares at random intervals
    fallingSquareInterval = setInterval(createFallingSquare, 1000); // Store the interval ID

});
