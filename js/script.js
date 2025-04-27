// const answers = {
//     one: "oneA",    // Правильный ответ на 1 вопрос
//     two: "twoB",    // Правильный ответ на 2 вопрос
//     three: "threeA",
//     four: "fourA",
//     five: "fiveB",
//     six: "sixA",
//     seven: "sevenA",
//     eight: "eightA",
//     nine: "nineA",
//     ten: "tenA"
// };

const btn = document.getElementById("myBtn");


const oneA = document.getElementById("oneA") //

const twoB = document.getElementById("twoB")

const threeA = document.getElementById("threeA")

const fourA = document.getElementById("fourA")

const fiveB = document.getElementById("fiveB")

const sixA = document.getElementById("sixA")

const sevenA = document.getElementById("sevenA")

const eightA = document.getElementById("eightA")

const nineA = document.getElementById("nineA")

const tenA = document.getElementById("tenA")

const result = document.getElementById("result")



btn.onclick = function(){
    let score = 0;
    if(oneA.checked){
        score++
    } else{
        console.error("Неправильно")
    }
    if(twoB.checked){
        score++
    } else{
        console.error("Неправильно")
    }
    if(threeA.checked){
        score++
    } else{
        console.error("Неправильно")
    }
    if(fourA.checked){
        score++
    } else{
        console.error("Неправильно")
    }
    if (fiveB.checked && fiveA.checked && fiveChecked) {
        console.error("Неправильно");
    } else if (fiveB.checked && fiveA.checked) {
        score++;
    } else {
        console.error("Неправильно");
    }
    if(sixA.checked){
        score++
    } else{
        console.error("Неправильно")
    }
    if(sevenA.checked){
        score++
    } else{
        console.error("Неправильно")
    }
    if(eightA.checked ){
        score++
    } else{
        console.error("Неправильно")
    }
    if(nineA.checked){
        score++
    } else{
        console.error("Неправильно")
    }
    if(tenA.checked){
        score++
    } else{
        console.error("Неправильно")
    }
    
switch(true){
    case score == 10:
        result.textContent = `Превосходно! Ты блестяще справился(лась) — все 10 из 10! Это просто великолепный результат!`;
        break;
    case score >= 7 && score >= 9:
        result.textContent = `Очень хорошо! Ты набрал(а) ${score} из 10. Ты демонстрируешь отличный уровень знаний!`;
        break;
    case score >= 4 && score < 7:
        result.textContent = `Неплохо, ты набрал(а) ${score} из 10! Продолжай практиковаться, и ты сможешь добиться ещё лучших результатов!`;
        break;
    case score >= 1 && score < 4:
        result.textContent = `Тебе нужно повторить математику, так как ты набрал(а) всего ${score} из 10.`
        break;
    default:
        result.textContent = `Ни одно задание не было решено правильно. Попробуй ещё раз!`
}
}