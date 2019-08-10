const DOM = {
show_flag: document.getElementById("showFlag"),
inputCountryFlag: document.getElementById("inputCountry")
};


document.getElementById("btnFlag").addEventListener("click", findFlag);







function findFlag() {
    const {inputCountryFlag} = DOM;
    const input = inputCountryFlag.value;
    
    const foundCountry = countries.find(function (item) {
    return item.name === input; 
    });
    const flag = foundCountry.flag 
    draw(flag); 
}

function draw(flag) {
    clearCard()
    const image = document.createElement("img");
    image.src = flag;
    image.alt = "picture"

    showFlag.append(image);

}


function clearCard() {
    DOM.show_flag.innerHTML = "";
}