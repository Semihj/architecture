const titles = document.getElementById("titles");
const history = document.getElementById('history');
const tourism = document.getElementById("tourism");
const design = document.getElementById("design");
const showtext = document.getElementById("showtext");


console.log(history.siblings);
history.addEventListener("click",() => {
    tourism.style.border = "1px solid #ccc "
    design.style.border = "1px solid #ccc";
    history.style.border = "3px solid blue";
    showtext.innerHTML = `The Eiffel Tower was built to be one the main attractions at the Paris World's Fair in 1889. That year, the World's Fair covered the entire Champ de Mars in Paris and its focus was the vast constructions in iron and steel that were the great industrial advancement of that time`
    const text = document.createElement("p");
    text.innerText = ""
    showtext.appendChild(text);
})
tourism.addEventListener("click",() => {
    history.style.border = "1px solid #ccc "
    design.style.border = "1px solid #ccc";

    tourism.style.border = "3px solid blue";
    showtext.innerHTML = ``
    const text = document.createElement("p");
    text.innerText = "Located in the 7th arrondissement, this immense iron monument, a true architectural and technical feat, is now the symbol of Paris and France for tourists from all over the world. The pride and joy of Parisians was quick to become the world's most visited paid admission monument!"
    showtext.appendChild(text);
})
design.addEventListener("click",() => {
    tourism.style.border = "1px solid #ccc "
    history.style.border = "1px solid #ccc "
    design.style.border = "3px solid blue";
    showtext.innerHTML = ``
    const text = document.createElement("p");
    text.innerText = "The Eiffel Tower is made almost entirely of open-lattice wrought iron. Gustave Eiffel used his advanced knowledge of the behaviour of metal arch and metal truss forms under loading to design a light and airy but strong structure that presaged a revolution in civil engineering and architectural design"
    showtext.appendChild(text);
})