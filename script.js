let userInput = document.querySelector(".userInput");
let display = document.querySelector(".display");
let input;

function upperCase() {
    if ((userInput.value.trim() === "") || (!/^[a-zA-Z\s]+$/.test(userInput.value))) {
        // alert("Enter any string")
        Swal.fire({
            text: "Please Enter any String",
            icon: "error",
            // icon: "warning"
        })
    }
    else {
        display.innerHTML = "";
        let div = document.createElement("div");
        div.className = "textUpperCase";

        input = userInput.value.toUpperCase();
        div.append(input);
        display.append(div);
    }
}

function lowerCase() {
    if ((userInput.value.trim() === "") || (!/^[a-zA-Z\s]+$/.test(userInput.value))) {
        // alert("Enter any string")
        Swal.fire({
            text: "Please Enter any String",
            icon: "error",
        })
    }
    else {
        display.innerHTML = "";
        let div = document.createElement("div");
        div.className = "textLowerCase";

        input = userInput.value.toLowerCase();
        div.append(input);
        display.append(div);
    }
}

function capitalize() {
    if ((userInput.value.trim() === "") || (!/^[a-zA-Z\s]+$/.test(userInput.value))) {
        // alert("Enter any string")
        Swal.fire({
            text: "Please Enter any String",
            icon: "error",
        })
    }
    else {
        display.innerHTML = "";
        let div = document.createElement("div");
        div.className = "textCapitalize";

        input = userInput.value.toLowerCase().split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');

        div.append(input);
        display.append(div);
    }
}

function reverse() {
    if ((userInput.value.trim() === "") || (!/^[a-zA-Z\s]+$/.test(userInput.value))) {
        // alert("Enter any string")
        Swal.fire({
            text: "Please Enter any String",
            icon: "error",
        })
    }
    else {
        display.innerHTML = "";
        let div = document.createElement("div");
        div.className = "textReverse";

        input = userInput.value.split("").reverse().join("");

        div.append(input);
        display.append(div);
    }
}
function length() {
    if ((userInput.value.trim() === "") || (!/^[a-zA-Z\s]+$/.test(userInput.value))) {
        // alert("Enter any string")
        Swal.fire({
            text: "Please Enter any String",
            icon: "error",
        })
    }
    else {
        display.innerHTML = "";
        let div = document.createElement("div");
        div.className = "textLength";

        // This will gives theLength including Spaces
        // input = userInput.value.length;  

        // This will minus the spaces only of starting & ending of the String
        // input = userInput.value.trim().length;  

        // This will minus all the Spaces from the User Input
        input = userInput.value.replace(/\s/g, "").length;
        div.append("Length: ", input);
        display.append(div);
    }
}

function wordsCount() {
    if ((userInput.value.trim() === "") || (!/^[a-zA-Z\s]+$/.test(userInput.value))) {
        // alert("Enter any string")
        Swal.fire({
            text: "Please Enter any String",
            icon: "error",
        })
    }
    else {
        display.innerHTML = "";
        let div = document.createElement("div");
        div.className = "wCount";
        //  will display the words with capitalize first Alphabet of Word
        // input = userInput.value.toLowerCase().split(" ").map(word =>
        //     word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

        input = userInput.value.toLowerCase().split(/\s+/).map(word =>
            word.charAt(0) + word.slice(1)).length;

        div.append("Total Words: ", input);
        display.append(div);
    }
}
