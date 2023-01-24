//Kattintásra blue nevű class
/*element
  esemény
  funkcionalitás
*/
let isBlue = false;

document.getElementById("element_0").onclick = function () {

    isBlue = !isBlue;

    if (isBlue) {
        document.getElementById("element_0").classList.add("blue");
    } else {
        document.getElementById("element_0").classList.remove("blue");
    }
    //console.log(isBlue);
}



let isHover = false;

document.getElementById("element_1").onmouseover = function () {
    isHover = true;

    renderElement_1();
};

document.getElementById("element_1").onmouseout = function () {
    isHover = false;

    renderElement_1();
};


function renderElement_1() {
    if (isHover) {
        document.getElementById("element_1").style.backgroundColor = "red";
    } else {
        document.getElementById("element_1").style.backgroundColor = "";
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

}

document.getElementById("element_2").onclick = function () {
    console.log(Math.random() * 20) + 1;
    document.getElementById("element_2").firstElementChild.innerHTML = getRandomNumber(1, 20);
};


document.getElementById("element_3").onclick = function () {
    document.getElementById("element_3").classList.add("hidden");
    setTimeout(function () {
        document.getElementById("element_3").classList.remove("hidden");
    }, 2000);
};

//ötödik
let borderR = "";
   document.getElementById("element_4").onclick = function () {
    borderR = !borderR;
    if (borderR) {
        let boxes = document.querySelectorAll(".shape");
        for (box of boxes) {
            box.classList.add("borderRadius");
        }
        
    } else {
        boxes = document.querySelectorAll(".shape");
        for (box of boxes) {
            box.classList.remove("borderRadius");
        }
    }
}


