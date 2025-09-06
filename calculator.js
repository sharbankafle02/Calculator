const display=document.getElementById("display");
const ac_button=document.getElementById("ac_button");
const de_button=document.getElementById("de_button");
const dot_button=document.getElementById("dot_button");
const division_button=document.getElementById("division_button");
const seven_button=document.getElementById("seven_button");
const eight_button=document.getElementById("eight_button");
const nine_button=document.getElementById("nine_button");
const multiplication_button=document.getElementById("multiplication_button");
const four_button=document.getElementById("four_button");
const five_button=document.getElementById("five_button");
const six_button=document.getElementById("six_button");
const subtraction_button=document.getElementById("subtraction_button");
const one_button=document.getElementById("one_button");
const two_button=document.getElementById("two_button");
const three_button=document.getElementById("three_button");
const addiction_button=document.getElementById("addiction_button");
const double0_button=document.getElementById("double0_button");
const zero_button=document.getElementById("zero_button");
const equal_button=document.getElementById("equal_button")
let result='';
ac_button.onclick=function(){
    result='';
    display.textContent=result;
}
de_button.onclick=function(){
    result=String(result).slice(0,-1);
    display.textContent=result;
}
dot_button.onclick=function(){
    result+='.';
    display.textContent=result;
}
division_button.onclick=function(){
    result+='/';
    display.textContent=result;
}
seven_button.onclick=function(){
    result+='7';
    display.textContent=result;
}
eight_button.onclick=function(){
    result+='8';
    display.textContent=result;
}
nine_button.onclick=function(){
    result+='9';
    display.textContent=result;
}
multiplication_button.onclick=function(){
    result+='*';
    display.textContent=result;
}
four_button.onclick=function(){
    result+='4';
    display.textContent=result;
}
five_button.onclick=function(){
    result+='5';
    display.textContent=result;
}
six_button.onclick=function(){
    result+='6';
    display.textContent=result;
}
subtraction_button.onclick=function(){
    result+='-';
    display.textContent=result;
}
one_button.onclick=function(){
    result+='1';
    display.textContent=result;
}
two_button.onclick=function(){
    result+='2';
    display.textContent=result;
}
three_button.onclick=function(){
    result+='3';
    display.textContent=result;
}
addiction_button.onclick=function(){
    result+='+';
    display.textContent=result;
}
double0_button.onclick=function(){
    result+='00';
    display.textContent=result;
}
zero_button.onclick=function(){
    result+='0';
    display.textContent=result;
}
equal_button.onclick=function(){
    result=eval(result);
    console.log(result);
    display.textContent=result;
}