const btns = document.getElementsByClassName("button");
const snd = document.getElementsByClassName("send");
let lastBtn = btns[2];

function helloWorld() {
    console.log("Hello World!");
}

function btnActive(event) {
    if (event.currentTarget != lastBtn) {
        event.currentTarget.classList.add("active");
        lastBtn.classList.remove("active");
        lastBtn = event.currentTarget;
    }
}

function changePage() {
    document.getElementsByClassName("rate")[0].innerHTML = findIndex(btns, lastBtn) + 1;
    document.getElementsByClassName("top")[0].style.display = "none";
    document.getElementsByClassName("top2")[0].style.display = "flex";
    document.getElementsByClassName("text")[0].style.display = "none";
    document.getElementsByClassName("results")[0].style.display = "initial";
    document.getElementsByClassName("buttons")[0].style.display = "none";
    document.getElementsByClassName("text2")[0].style.display = "initial";
    document.getElementsByClassName("send")[0].style.display = "none";
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", btnActive, false);
}

snd[0].addEventListener("click", changePage, false);

function findIndex(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            return i;
        }
    }
}