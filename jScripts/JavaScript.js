let scoops = 0;
const ExtrasNameEnglish = ["Pancakes", "Crepe", "BelgianWaffle", "Donuts"];
const saucesEnglish = ["Strawberry", "Berries", "Caramel"];
let selectedSauce = "";

function showIceCreamImage() {

    const images = document.getElementsByClassName("iceCreamImages");

    for (let img of images) {
        img.style.display = "none";
    }


    for (let i = 1; i <= 3; i++) {
        if (document.getElementById("scoop" + i).checked) {
            scoops = i;
        }
    }

    selectedSauce = "";

    for (let i = 0; i < saucesEnglish.length; i++) {
        if (document.getElementById("sauce" + saucesEnglish[i]).checked) {
            selectedSauce = saucesEnglish[i];
        }
    }

    let targetImageId = "";

    if (scoops > 0) {
        targetImageId = "imgScoop" + scoops;

        if (selectedSauce !== "") {
            targetImageId = targetImageId + selectedSauce;
        }
    }

    if (targetImageId !== "") {
        const targetImage = document.getElementById(targetImageId);

        if (targetImage !== null) {
            targetImage.style.display = "block";
        }
    }

    checkForm();
}


function addExtras() {

    const extrasImages = document.getElementsByClassName("extras");

    for (let i = 0; i < ExtrasNameEnglish.length; i++) {
        if (document.getElementById(ExtrasNameEnglish[i]).checked) {
            extrasImages[i].classList.add("selected");
        } else {
            extrasImages[i].classList.remove("selected");
        }
    }
}


function checkForm() {

    const clientName = document.getElementById("clientName").value;
    const submitBtn = document.getElementById("submitBtn");

    if (clientName !== "" && scoops > 0 && selectedSauce !== "") {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}


function sendOrder() {
    const clientName = document.getElementById("clientName").value;

    let clientNotes = document.getElementById("clientNotes").value;

    const saucesNamesHebrew = ["תות", "פירות יער", "קרמל מלוח"];

    const sauceText = saucesNamesHebrew[saucesEnglish.indexOf(selectedSauce)];

    const ExtrasNameHebrew = ["פנקייקים", "קרפ", "וופל בלגי", "דונאטס"];


    const selectedExtras = ExtrasNameEnglish
        .filter(id => document.getElementById(id).checked)
        .map(id => ExtrasNameHebrew[ExtrasNameEnglish.indexOf(id)]);

    let extrasText = selectedExtras.join(", ");

    if (extrasText === "") {
        extrasText = "ללא תוספות";
    }

    if (clientNotes === "") {
        clientNotes = "ללא הערות";
    }

    const summaryString =
        "סיכום ההזמנה<br>" +
        "שם הלקוח: " + clientName + "<br>" +
        "כמות כדורים: " + scoops + "<br>" +
        "רוטב: " + sauceText + "<br>" +
        "תוספות: " + extrasText + "<br>" +
        "הערות: " + clientNotes;

    document.getElementById("summaryContent").innerHTML = summaryString;
    document.getElementById("summaryContent").style.display = "block";
}