function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function changeColorRandomly(){
    let colors_dic = {
        0: "red",
        1: "blue",
        2: "green",
        3: "yellow",
        4: "pink",
        5: "magenta",
        6: "orange",
        8: "cyan",

    }
    let elements = document.querySelectorAll(".box")
    num_of_colors = Object.keys(colors_dic).length
    elements.forEach(element => {
        element.style.backgroundColor = colors_dic[getRandomNumber(0, num_of_colors)]
        element.style.color = colors_dic[getRandomNumber(0, num_of_colors)]
    })
}
