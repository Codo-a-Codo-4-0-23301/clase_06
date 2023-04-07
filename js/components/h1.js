export default class H1 {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }

    render(){
        let myApp = document.getElementById(this.parentID);
        const myButtonHTML = myApp.innerHTML + "<h1>"+ this.text + "</h1>";
        myApp.innerHTML = myButtonHTML; 
    }
}