let shakeThreshold = 2; // Adjust based on testing for sensitivity
let lastAcceleration = { x: null, y: null, z: null };

window.addEventListener('devicemotion', function(e) {
    let acceleration = e.accelerationIncludingGravity;
    if (!acceleration.x && !acceleration.y && !acceleration.z) return;

    if (lastAcceleration.x !== null) {
        let deltaX = Math.abs(lastAcceleration.x - acceleration.x);
        let deltaY = Math.abs(lastAcceleration.y - acceleration.y);
        let deltaZ = Math.abs(lastAcceleration.z - acceleration.z);

        // Log deltas to find an appropriate threshold
        console.log(deltaX, deltaY, deltaZ);

        if (deltaX + deltaY + deltaZ > shakeThreshold) {
            console.log("Shake detected");
            rollDice();
        }
    }

    lastAcceleration.x = acceleration.x;
    lastAcceleration.y = acceleration.y;
    lastAcceleration.z = acceleration.z;
});

function rollDice() {
    // Placeholder for your dice rolling logic
    console.log("Dice rolled!");
    // Example: Show a random number between 1 and 6
    let result = Math.floor(Math.random() * 6) + 1;
    console.log("Result: ", result);
    document.getElementById("heading").innerText = result;
}

