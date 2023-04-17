class CssClass {
    constructor(ClassName, Styles) {
        this.ClassName = ClassName;
        this.StylesArray = Styles;
    }

    styleAdd() {
        let n = +prompt("Enter the number of styles you want to add:");

        for(let i = 0; i < n; i++) {
            let key = prompt("Enter name of property for class style:"); 
            StyleArray[key] = prompt("Enter the value:");
        }
    }
    
    styleDel() {
        let name = prompt("Enter the name of style you want to delete:");
        Object.keys(this.StylesArray).forEach(key => {
            if(key === name) {
                delete StyleArray[key];
            }
        })
    }

    getCSS() {
        document.write(`<p>.${this.ClassName}{</p>`);

        Object.keys(this.StylesArray).forEach(key => {
            document.write(`<p>${key}: ${this.StylesArray[key]}</p>`);
        })
        document.write(`<p>}</p>`);
    }
}

let StyleArray = {};
let center = new CssClass("center", StyleArray);

console.log(center);

center.styleAdd();
// center.styleDel();
center.getCSS();