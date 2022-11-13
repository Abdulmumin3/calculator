const buttons = document.querySelectorAll('button')
const result = document.getElementById('result')

buttons.forEach(function(button){
    button.addEventListener('click', calculate)
})

function calculate(event){
    const clickButtonValue = event.target.value

    if(clickButtonValue === "="){
        if(result.value !== ''){
            result.value = eval(result.value)
        }
    }else if(clickButtonValue === "C"){
        result.value = ''
    }else{
        result.value += clickButtonValue
    }
}