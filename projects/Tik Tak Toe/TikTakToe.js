let chance = "X";
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");

const change_case = () => {
    if (chance == "X") {
        chance = "O"
    } else {
        chance = "X"
    }
}


btn1.addEventListener("click", () => {
    const current = chance;
    btn1.innerText = chance
    change_case()
    Winner(current)

}
)

btn2.addEventListener("click", () => {
    const current = chance;
    btn2.innerText = chance
    change_case()
    Winner(current)

}
)

btn3.addEventListener("click", () => {
    const current = chance;
    btn3.innerText = chance
    change_case()
    Winner(current)

}
)

btn4.addEventListener("click", () => {
    const current = chance;
    btn4.innerText = chance
    change_case()
    Winner(current)

}
)

btn5.addEventListener("click", () => {
    const current = chance;
    btn5.innerText = chance
    change_case()
    Winner(current)

}
)

btn6.addEventListener("click", () => {
    const current = chance;
    btn6.innerText = chance
    change_case()
    Winner(current)

}
)

btn7.addEventListener("click", () => {
    const current = chance;
    btn7.innerText = chance
    change_case()
    Winner(current)

}
)

btn8.addEventListener("click", () => {
    const current = chance;
    btn8.innerText = chance
    change_case()
    Winner(current)

}
)

btn9.addEventListener("click", () => {
    const current = chance;
    btn9.innerText = chance
    change_case()
    Winner(current)

}
)
let winner = document.querySelector(".winner")
function Winner(player) {
    if (btn1.innerText == btn2.innerText && btn1.innerText == btn3.innerText && btn1.innerText != "") {
        winner.innerText=(player + "  Win")
        winner.style.boxShadow ="0 0 15px 10px #bbbbbbff"
    } else if (btn4.innerText == btn5.innerText && btn4.innerText == btn6.innerText && btn4.innerText != "") {
        winner.innerText=(player + "  Win")
        winner.style.boxShadow ="0 0 15px 10px #bbbbbbff"
    } else if (btn7.innerText == btn8.innerText && btn7.innerText == btn9.innerText && btn7.innerText != "") {
        winner.innerText=(player + "  Win")
        winner.style.boxShadow ="0 0 15px 10px #bbbbbbff"
    } else if (btn1.innerText == btn5.innerText && btn1.innerText == btn9.innerText && btn1.innerText != "") {
        winner.innerText=(player + "  Win")
        winner.style.boxShadow ="0 0 15px 10px #bbbbbbff"
    } else if (btn1.innerText == btn4.innerText && btn1.innerText == btn7.innerText && btn1.innerText != "") {
        winner.innerText=(player + "  Win")
        winner.style.boxShadow ="0 0 15px 10px #bbbbbbff"
    } else if (btn2.innerText == btn5.innerText && btn2.innerText == btn8.innerText && btn2.innerText != "") {
        winner.innerText=(player + "  Win")
        winner.style.boxShadow ="0 0 15px 10px #bbbbbbff"
    } else if (btn3.innerText == btn6.innerText && btn1.innerText == btn9.innerText && btn3.innerText != "") {
        winner.innerText=(player + "  Win")
        winner.style.boxShadow ="0 0 15px 10px #bbbbbbff"
    } else if (btn3.innerText == btn5.innerText && btn3.innerText == btn7.innerText && btn3.innerText != "") {
        winner.innerText=(player + "  Win")
        winner.style.boxShadow ="0 0 15px 10px #bbbbbbff"
    } else if (btn3.innerText == btn6.innerText && btn1.innerText == btn9.innerText && btn3.innerText != "") {
        winner.innerText=(player + "  Win")
        winner.style.boxShadow ="0 0 15px 10px #bbbbbbff"
    } else if (btn3.innerText == btn5.innerText && btn3.innerText == btn7.innerText && btn3.innerText != "") {
        winner.innerText=(player + "  Win")
        winner.style.boxShadow ="0 0 15px 10px #bbbbbbff"
    }
}
let restart = document.querySelector(".restart")
restart.addEventListener("click", () => {
    btn1.innerText = ""
    btn2.innerText = ""
    btn3.innerText = ""
    btn4.innerText = ""
    btn5.innerText = ""
    btn6.innerText = ""
    btn7.innerText = ""
    btn8.innerText = ""
    btn9.innerText = ""
    winner.innerText = ""
    winner.style.boxShadow="none"
})