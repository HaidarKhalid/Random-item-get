let choosen = []
let inp = document.getElementById("input")
let list = document.getElementById("list")
let out = document.getElementById("output")

inp.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        add()
    }
})

function add() {
    if (inp.value == "" || inp.value == " "|| inp.value == "  "|| inp.value == "  ") {
        out.innerText = "You cant add empty item"
    } else {
        choosen.push(inp.value)
        console.log(choosen)
        inp.value = ''
        listUpdate()
    }

}

function listUpdate() {
    list.innerHTML = `
    `
    for (let i = 0; i < choosen.length; i++) {
    list.innerHTML += `
    <li>${choosen[i]}</li>
    `
    }
}

function getRandom() {
    if (choosen.length > 1) {
        let random = Math.floor(Math.random() * choosen.length)
        console.log(choosen[random])
        out.innerText = choosen[random]
    } else {
        out.innerText = "Add at least two things to the list"
    }
}

function reset() {
    choosen = []
    list.innerHTML = ``
    inp.value = ""
    out.innerText = "output"
}
