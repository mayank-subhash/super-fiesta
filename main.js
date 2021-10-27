var speech_recognition = window.webkitSpeechRecognition;
var recognition = new speech_recognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
    recognition.onresult = function(event) {
        console.log (event);
        var content = event.results[0][0].transcript;
        console.log(content);
        document.getElementById("textbox").innerHTML = content;

        if (content == "take my selfie") {
            speak();
            console.log("Taking Selfie");
        }
    }


function speak() {
   var synth = window.speechSynthesis;
   speak_data = "Taking Your Selfie In 5 Seconds";
   var utterThis = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);

   Webcam.attach (camera);

   setTimeout(function(){
       take_snapshot();
       save();
   },5000); 
}

Webcam.set({
   width : 360 ,
   height : 250 ,
   image_format : "png" ,
   png_quality : 90
}) ;

camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id = 'image' src = '"+ data_uri +"'>"; 
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("image").src;
    link.href = image;
    link.click();
}