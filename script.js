const display = document.querySelector(".display")
let isCalculated = false
function showValue(value) {
    if(display.textContent === "0" || isCalculated){
        display.textContent = value
        isCalculated = false
    } else{
        display.textContent = display.textContent + value
    }
}

function calculate() {
    display.textContent = eval(display.textContent.replace('%', '/100'))
}

function changeSign(){
    display.textContent = display.textContent * -1
}

function clearDisplay() {
    display.textContent = 0
}

function deleteLast(){
    display.textContent = display.textContent.slice(0, -1) || "0"
}

function clearEntry(){
    let text = display.textContent

    while(text.length > 0){
        let lastNum = text[text.length - 1]

        if(lastNum === '+' || lastNum === '-' || lastNum === '*' || lastNum ==='/'){
            break;
        }
        
        text = text.slice(0,-1)
    }

    display.textContent = text || '0'

}

function calculateSquare(){
    calculate()
    let current = +display.textContent
    display.textContent = (current ** 2).toString()
    isCalculated = true
}

function calculateSqrt(){
    calculate()
    let current = +display.textContent

    if(current < 0){
        display.textContent = "Fail"
    }else{
        display.textContent = (current ** 0.5).toString()
    }

    isCalculated = true
}


function calculateInverse(){
    calculate()

    let current = +display.textContent

    if(current === 0){
        display.textContent = "Деление на 0"
    } else{
        display.textContent = (1 / current).toString()
    }
    isCalculated = true
}


function changeTheme() {
    document.body.classList.toggle("lightMode")
}


document.addEventListener("keydown",(e) => {
    if((!isNaN(e.key)) || "+-*/.%".includes(e.key)){
        showValue(e.key)
    } else if(e.key === "Enter"){
        e.preventDefault()
        calculate()
        isCalculated = true
    }else if(e.key === "Backspace"){
        deleteLast()
    }else if(e.key.toLowerCase() === "c"){
        clearDisplay()
    }else if(e.key.toLowerCase() === "d" || e.key.toLowerCase() === "в"){
        document.body.classList.remove("lightMode")
    }else if(e.key.toLowerCase() === "l" || e.key.toLowerCase() === "д"){
        document.body.classList.add("lightMode")
    }

})
