let aPressed = false;
let bPressed = false;
let ring= neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)

input.onButtonPressed(Button.A, function () {
    if (aPressed == false) {
        aPressed = true
    } else {
        aPressed = false
    }
});
input.onButtonPressed(Button.B, function () {
   if(bPressed==false){
       ring.clear();
       bPressed = true;
   }else{
       startRainbow();
       bPressed = false;
   }
})
function startRainbow(){
    aPressed = false
    ring = neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)
    ring.setBrightness(20)
    ring.showRainbow(1, 360)
}
basic.forever(function () {
    if (aPressed == false) {
        ring.show()
        ring.rotate(1)
        basic.pause(100)
    } else {
        ring.show()
        ring.rotate(-1)
        basic.pause(100)
    }
})
startRainbow();