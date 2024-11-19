//*====================== Task 1 =================*\\
const choiceDdrink = document.querySelector('.choice-drink')
const text = document.querySelector('.text')

choiceDdrink.addEventListener('change', ()=>{
    let msg = '';

     switch (choiceDdrink.value) {
        case "coffee":
            msg = "you picked coffe"
             break;
         case "tea":
            msg = "you picked tea"
             break;
         case "juice":
            msg = "you picked juice"
            break;
     
         default:
             msg = "pick something"
            break;
    }
    
    text.textContent = msg;
})
//*====================== Task 2 =================*\\
function checkDay() {
            const day = document.getElementById('dayInput').value.trim().toLowerCase();
            const messageElement = document.getElementById('message');
            const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
            const weekend = ["saturday", "sunday"];
            
            // Перевірка дня тижня
            if (weekdays.includes(day)) {
                messageElement.textContent = "This is a work day";
            } else if (weekend.includes(day)) {
                messageElement.textContent = "THis is weekend";
            } else {
                messageElement.textContent = "Please, enter a correct day";
            }
}
        
//*====================== Task 3 =================*\\
function getSeason() {
            const month = parseInt(document.getElementById("monthInput").value);
            let season = "";

            if (month >= 1 && month <= 2 || month === 12) {
                season = "Winter";
            } else if (month >= 3 && month <= 5) {
                season = "Spring";
            } else if (month >= 6 && month <= 8) {
                season = "Summer";
            } else if (month >= 9 && month <= 11) {
                season = "Fall";
            } else {
                season = "Incorrect value. Enter a number within 1-12";
            }

            document.getElementById("output").textContent = season;
        }
//*====================== Task 4 =================*\\
 function getDaysInMonth() {
            const month = parseInt(document.getElementById("monthInput").value);
            let days;

            switch (month) {
                case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                    days = 31;
                    break;
                case 4: case 6: case 9: case 11:
                    days = 30;
                    break;
                case 2:
                    days = "28 або 29 (leap year)";
                    break;
                default:
                    days = "Incorrect value. Enter a number within 1-12";
            }

           document.getElementById("output").textContent =`In this month: ${days}.`;
        }
//*====================== Task 5 =================*\\

function checkColor() {
            const color = document.getElementById('colorInput').value.trim().toLowerCase();
            const messageElement = document.getElementById('message');
            let message = '';

            switch(color) {
                case 'red':
                    message = 'stop';
                    break;
                case 'green':
                    message = 'go';
                    break;
                case 'yellow':
                    message = 'wait';
                    break;
                default:
                    message = 'Enter a correct color: red, green, or yellow';
            }

            messageElement.textContent = message;
}
        
//*====================== Task 6 =================*\\


function calculate() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const operation = document.getElementById('operation').value;
            const resultElement = document.getElementById('result');
            let result;

            // Перевірка на введення чисел
            if (isNaN(num1) || isNaN(num2)) {
                resultElement.textContent = 'Please enter correct value';
                return;
            }

            // Виконання операції
            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        resultElement.textContent = 'Error: division by zero!';
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    resultElement.textContent = 'Unknown operation';
                    return;
            }

            resultElement.textContent = `result: ${result}`;
        }
