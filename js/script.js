window.addEventListener("load", Init);

let num1;
let num2;

let firtsNumber = [];

function Init(){
  document.querySelector(".one").addEventListener("click", getNumber);
    document.querySelector(".two").addEventListener("click", getNumber);
    document.querySelector(".three").addEventListener("click", getNumber);
    document.querySelector(".four").addEventListener("click", getNumber);
    document.querySelector(".five").addEventListener("click", getNumber);
    document.querySelector(".six").addEventListener("click", getNumber);
    document.querySelector(".seven").addEventListener("click", getNumber);
    document.querySelector(".eight").addEventListener("click", getNumber);
    document.querySelector(".nine").addEventListener("click", getNumber);
    document.querySelector(".zero").addEventListener("click", getNumber);
    document.querySelector(".clear").addEventListener("click", Clear);

    document.querySelector(".plus").addEventListener("click", Plus);
    document.querySelector(".multiply").addEventListener("click", Multiply);

    document.querySelector(".equal").addEventListener("click", Equal);
}

function Clear(){
    let screenVar = document.querySelector(".screen");
    screenVar.innerHTML = 0;
}

function getNumber(){
   
 
    let screenVar = document.querySelector(".screen");
    console.log(this.textContent);
    firtsNumber.push(this.textContent)
    screenVar.innerHTML = "";
   
    for(let i = 0 ; i < firtsNumber.length; i++){
        screenVar.innerHTML += firtsNumber[i];
    }
    
}




function Plus()
{
    firtsNumber.push(this.textContent)

}

function Multiply()
{
    firtsNumber.push(this.textContent)

}

function Equal()
{
    num1=firtsNumber[0];
    num1=parseInt(num1);
    num2=firtsNumber[2];
    num2=parseInt(num2);

    let screenVar = document.querySelector(".screen");
    
    if(firtsNumber.find(el=>el=="+"))
    {
    screenVar.innerHTML=num1+num2;
}else if(firtsNumber.find(el=>el=="*")){
    screenVar.innerHTML=num1*num2;
}

    firtsNumber=[];
    num1=0;
    num2-0;

}