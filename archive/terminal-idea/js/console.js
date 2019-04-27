log_loaded("js/console.js")

// ui appearances

var currentpath = "home"

var console_hint   = document.getElementById("console_hint")
var console_input  = document.getElementById("console_input")
var console_output = document.getElementById("console_output")

var inputheadertext = ">>> "
var inputheader = document.createElement("span")
updateInputHeader = function () { inputheader.innerText = inputheadertext }

var currentinput = ""

function parseInput() {
    let s = currentinput
    let span = document.createElement("span")
    span.innerText = s
    return span
}

function updateInput() {
    // remove all children except for header
    while (console_input.children.length > 1)
        console_input.removeChild(console_input.children[1])

    console_input.appendChild(parseInput())
}

function updateHint() {

}

function processInput() {
    if (currentinput == "ls") {
        log("[$] running `ls`", {color:"red"})
        runBinCommand("ls")
    }
}

// init console

// inputheader
inputheader.classList.add("inputheader")
updateInputHeader()
console_input.appendChild(inputheader)


// handle key input

document.body.addEventListener("keydown", function (evt) {
    let key   = evt.key
    let code  = evt.keyCode
    let ctrl  = evt.ctrlKey
    let alt   = evt.altKey
    let shift = evt.shiftKey
    let meta  = evt.metaKey

    // console.log(code)

    // enter
    if (key == "Enter") {
        processInput()
        currentinput = ""
    } else
    // delete
    if (key == "Backspace") {
        if (currentinput.length > 0) {
            currentinput = currentinput.substring(0,currentinput.length-1)
        }
    } else
    // escape
    if (key == "Escape") {
        // TODO
    } else
    // tab
    if (key == "Tab") {
        evt.preventDefault()
        updateHint()
    } else
    // ctrl-
    if (ctrl) {
        // TODO
    } else
    // alt-
    if (alt) {
        // TODO
    } else
    // shift-
    if (shift) {
        currentinput += key
    } else
    // meta
    if (meta) {
        // TODO
    }
    // normal
    else {
        currentinput += key
    }

    updateInput()
    return false
})

// start things off
console_output.appendChild(listDir(getDir(parsePath("/")), true).toHTML())