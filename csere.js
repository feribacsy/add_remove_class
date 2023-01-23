//Kattintásra blue nevű class
/*element
  esemény
  funkcionalitás
*/
let isBlue = false;

document.getElementById("element_0").onclick = function(){

    isBlue = !isBlue;

    if(isBlue) {
        document.getElementById("element_0").classList.add("blue");
    } else {
        document.getElementById("element_0").classList.remove("blue");
    }

}

let isHover = false;