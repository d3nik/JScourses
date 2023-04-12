class Button {
    constructor(width, height, text) {
        this.buttonWidth = width;
        this.buttonHeight = height;
        this.buttonText = text;
    }

    showBtn() {
        document.write(`<button class="button"></button>`);
    }
    
}

let buttonHTML = new Button(65, 30, "U r brave? Then press me.");

console.log(buttonHTML);
buttonHTML.showBtn();

class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this.buttonColor = color;
    }

    showBtn() {
        super.showBtn();
        let styleSheet = document.createElement("style");
        let styles = `
        button{ 
        min-width: ${this.buttonWidth}px; 
        min-height: ${this.buttonHeight}px;
        background-color: ${this.buttonColor};
        }
        button:after{
            content: "${this.buttonText}";
        }
        `; 
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    }
}

let styledButton = new BootstrapButton(65, 30, "U r brave? Then press me.", "red");
styledButton.showBtn();
console.log(styledButton);