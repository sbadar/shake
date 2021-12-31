var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

// Start listening to device motion
myShakeEvent.start(); 

// Register a shake event listener on window with your callback
window.addEventListener('shake', shakeEventDidOccur, false); 

//function to call when shake occurs
function shakeEventDidOccur () {

    //put your own code here etc.
    console.log("Device Is Shaking");
}
