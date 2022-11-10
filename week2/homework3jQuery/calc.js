/*
 * Implement all your JavaScript in this file!
 */
var disp=$("#display");
var b1=$("#button1");
var b2=$("#button2");
var b3=$("#button3");
var b4=$("#button4");
var b5=$("#button5");
var b6=$("#button6");
var b7=$("#button7");
var b8=$("#button8");
var b9=$("#button9");
var b0=$("#button0");
var ba=$("#addButton");
var bs=$("#subtractButton");
var bm=$("#multiplyButton");
var bd=$("#divideButton");
var be=$("#equalsButton");
var bc=$("#clearButton");
var v="0";

disp.val(v);

b1.click(function(){
    v="0"?"":v;
    v=v.concat("1");
    disp.val(v);
})

