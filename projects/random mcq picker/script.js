let btn = document.querySelector(".btn");
let current = document.querySelector(".current");
let number = ""
let rand = Math.ceil((Math.random()) * 10);
let correctMcqs = 0;
let score = document.querySelector(".Score");
score.innerText = correctMcqs;
function createCard(statement, optA, optB, optC, optD, correct) {
    let html = `<div class="statement"><h1>${statement}</h1></div>
    <div class="opt1 opt"><input type="radio" name="radio" class="radio" id="A"><p>${optA}</p></div>
    <div class="opt2 opt"><input type="radio" name="radio" class="radio" id="B"><p>${optB}</p></div>
    <div class="opt3 opt"><input type="radio" name="radio" class="radio" id="C"><p>${optC}</p></div>
    <div class="opt4 opt"><input type="radio" name="radio" class="radio" id="D"><p>${optD}</p></div>`
    document.querySelector(".container").innerHTML = html;
    div.setAttribute("class","created")
    document.querySelector(".container").prepend(div);
}
btn.addEventListener("click",()=>{
    number++;
    btn.innerText = "Next"
    current.innerText = number;
    rand = Math.ceil((Math.random()) * 10);

switch (rand) {
    case 0:
        createCard("Your name is:", "Muneeb", "Haseeb", "Ajwa", "Muheeb", "Muneeb");
        break;
    case 1:
        createCard("Your age is:", "16", "18", "20", "17", "17");
        break;
    case 2:
        createCard("Your cast is:", "Bhatti", "Niazi", "Butt", "Dogar", "Niazi");
        break;
    case 3:
        createCard("Your country is:", "India", "America", "Pakistan", "Japan", "Pkaistan");
        break;
    case 4:
        createCard("Your city is:", "Karachi", "Islamabad", "Pindi", "Lahore", "Lahore");
        break;
    case 5:
        createCard("Your school is:", "Govt. High School", "Punjab Grammar School", "Orial School", "Beacon House", "Punjab Grammar School");
        break;
    case 6:
        createCard("Your date of birth is:", "12 Sept 2008", "12 sept 2001", "2 Feb 2005", "19 Jan 2009", "12 Sept 2008");
        break;
    case 7:
        createCard("Your gender is:", "Female", "Prefer not to say", "Male", "Both", "Male");
        break;
    case 8:
        createCard("Your favourite color is:", "Blueviolet", "Blue", "Biege", "Black", "Blueviolet");
        break;
    case 9:
        createCard("Your favourite food is:", "Tikka", "Biryani", "Korma", "Pizza", "Biryani");
        break;
    case 10:
        createCard("Your favourite fruit is:", "Apple", "Banana", "Pine Apple", "Peach", "Apple");
        break;
    default:
        document.querySelector(".container").innerText = "WELCOME"
        break;
}

})







