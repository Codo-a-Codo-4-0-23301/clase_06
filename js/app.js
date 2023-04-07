import H1 from "./components/h1.js";
import Button from "./components/button.js";
import Input from "./components/input.js";
import Video from "./components/video.js";
/////////////////////////////////////////////

// datos
let mySuperArrayofStrings = ["Login", "Signup", "Reset", "Cancel"];
let inputArray = ["Username", "Surname", "E-mail", "Password"];
let inputArrayFiltered = inputArray.filter( element => element=="Username");
/////////////////////////////////////////////

// Funciones
function RenderButton(text) {
    let myButton = new Button("app", text);
    myButton.render();
}
function RenderInput(id, type,value) {
    let myInput = new Input("app", id, type, value);
    myInput.render();
} 
function RenderH1(text){
    let myH1 = new H1("app", text);
    myH1.render();
}
function RenderVideo(url, width, height, type){
    let myVideo = new Video("app", url, width, height, type);
    myVideo.render();
}
//////////////////////////////////////////////

// Logica de App
RenderH1(`- Array inicial:<br>[${inputArray}]`);

RenderH1("- inputs sin filter:<br>");
inputArray.forEach((element) => {
    RenderInput(element, element, element);
});

RenderH1("- inputs con filter by Username:<br>");
inputArrayFiltered.forEach(function (element) {
    RenderInput(element, element, element);
});

RenderH1("<br> - Video:");
RenderVideo("videoID", "https://www.w3schools.com/tags/movie.mp4", 240, 480, "video/mp4");

//////////////////////////////////////////////





