export default class Button {
    constructor(parentID, id, text, onClick) {
        this.parentID = parentID;        
        this.id = id;
        this.text = text;
        this.onClick = onClick;
    }

    render(){
        let myApp = document.getElementById(this.parentID);
        const myButtonHTML = myApp.innerHTML + `<button id=${this.id} onClick=${this.onClick}>${this.text} </button>`;
        myApp.innerHTML = myButtonHTML; 
    }
}