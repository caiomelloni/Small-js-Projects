const form = document.forms[0];

const css = document.querySelector('.css');

const btn = document.querySelector('.btn');

const handleStyle = {
    backgroundColor(valor) {
        btn.style.backgroundColor = valor;
    },
    texto(valor) {
        btn.innerText = valor;
    },
    color(valor) {
        btn.style.color = valor;
    },
    height(valor) {
        btn.style.height = valor + 'px';
    },
    width(valor) {
        btn.style.width = valor + 'px';
    },
    border(valor) {
        btn.style.border = valor;
    },
    borderRadius(valor) {
        btn.style.borderRadius = valor + 'px';
    },
    fontFamily(valor) {
        btn.style.fontFamily = valor;
    },
    fontSize(valor) {
        btn.style.fontSize = valor + 'em';
    }
};



form.addEventListener('change',changeCss);

function changeCss(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value
    

    handleStyle[name](value);
    localStorage[name] = value;

    changeCssText(); 
}

function changeCssText() {
    if (btn.hasAttribute('style')){
        const estilo = btn.getAttribute('style').split("; ");

        css.innerHTML = estilo.join(";<br>");
    }
}

// LocalStorage session


setValues();

function setValues() {
    const properties = Object.keys(localStorage);

    properties.forEach((propertie) => {
        handleStyle[propertie](localStorage[propertie]);

        form.elements[propertie].value = localStorage[propertie];
    })

    changeCssText()
}