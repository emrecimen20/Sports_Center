// Javascript codes that change the content when I click on the buttons
// OUR CLASSES SECTİON

const classesBtnH = document.getElementById("header1");
const classesBtnP = document.getElementById("parag2");
const classesBtnImg = document.getElementById("classes-img");
let btns = document.querySelector("#btns");
let reverseDiv = document.getElementById("btns");

const showYoga = () => {
    classesBtnH.textContent = "Why Should You Do Yoga?";
    classesBtnImg.src = "images/yoga.jpg";
    classesBtnP.innerHTML = "Saturday-Sunday: 8.00am - 10.00am <br>Monday-Tuesday: 10.00am - 12.00pm<br>Wednesday-Friday: 3.00pm - 6.00pm"
    

}
const showGroup = () => {
    classesBtnH.textContent = "Why Should You Do Group?";
    classesBtnImg.src = "images/group.webp";
    classesBtnP.innerHTML = "Monday-Tuesday: 9.00am - 11.00am <br>Thursday-Friday: 11.00am - 1.00pm<br>Friday-Saturday: 4.00pm - 7.00pm"
}
const showSolo = () => {
    classesBtnH.textContent = "Why Should You Do Solo?";
    classesBtnImg.src ="images/solo.jpg";
    classesBtnP.innerHTML = "Tuesday-Wednesday: 7.00am - 9.00am <br>Thursday-Friday: 10.00am - 12.00pm<br>Saturday-Sunday: 4.00pm - 7.00pm"
   
 
}
const showStretch = () => {
    classesBtnH.textContent = "Why Should You Do Stretch?";
    classesBtnImg.src = "images/stret.webp";
    classesBtnP.innerHTML = "Monday-Wednesday: 8.00am - 10.00am <br>Thursday-Friday: 10.00am- 12.00pm"
}

btns.addEventListener("click", (event) => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        buttons.forEach(btn => {
          btn.classList.remove('selected');
        });
        this.classList.add('selected');
      });
    });
    const btnId = event.target.id;
    switch (btnId) {
        case "yoga-btn" :
            showYoga();
            break;
        case "group-btn" :
            showGroup();
            break;
        case "solo-btn" :
            showSolo();
            break;
        case "stretch-btn":
            showStretch();
            break;
        default:
        return;
    }
})

//BMI calculatin operations
document.getElementById("weight").addEventListener("input", calculator);
document.getElementById("height").addEventListener("input", calculator);

function calculator() {
    let heightInput = document.getElementById("height").value;
    let weightInput = document.getElementById("weight").value;

    let height = parseInt(heightInput);
    let weight = parseInt(weightInput);
    let result = weight / ((height / 100) ** 2);

    let roundedResult = result.toFixed(1);
    if (!isNaN(result)) {
        let resultInput = document.getElementById("result");
        resultInput.textContent = roundedResult;

        var inputValue = parseFloat(resultInput.textContent); 
        var element = document.querySelector(".after"); 

       
        if (inputValue < 18.5 ) {
            element.style.setProperty('--after-left', '10%');
        } else if (inputValue < 25) {
            element.style.setProperty('--after-left', '30%');
        } else if (inputValue < 30){
            element.style.setProperty('--after-left', '45%');
        } else if (inputValue < 35) {
            element.style.setProperty('--after-left', '60%');
        } else  {
            element.style.setProperty('--after-left', '80%');
        }
    }
}