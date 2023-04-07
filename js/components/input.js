export default class Input {
    constructor(parentID, id, type, value) {
        this.parentID = parentID;   
        this.id = id;
        this.type = type;
        this.value = value;

    }

    render() {
        let myApp = document.getElementById(this.parentID);        
        const myInputHTML = myApp.innerHTML + `<input id=${this.id} type=${this.type} value=${this.value}>`;
        myApp.innerHTML = myInputHTML;

    }
}
