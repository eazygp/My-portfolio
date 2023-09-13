function skill() {
    let counter = 0;
    let array = ["Discipline", "Hard work", "Team working", "Problem solving", "AI addicted"];
    let elementoOutput = document.getElementById("manda");

    function updateText() {
        elementoOutput.textContent = array[counter];
        counter++;
        if (counter >= array.length) {
            counter = 0;
        }
    }

    updateText();
    setInterval(updateText, 1000);
}

skill();
