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
var v1="";var v2="";var v3="";var v4="";var v5="";var a=false;var s=false;var m=false;var d=false;var e=false;

disp.val(v1);

b1.click(function(){
    v1=v1.concat("1");
    disp.val(v1);
})
b2.click(function(){
    v1=v1.concat("2");
    disp.val(v1);
})
b3.click(function(){
    v1=v1.concat("3");
    disp.val(v1);
})
b4.click(function(){
    v1=v1.concat("4");
    disp.val(v1);
})
b5.click(function(){
    v1=v1.concat("5");
    disp.val(v1);
})
b6.click(function(){
    v1=v1.concat("6");
    disp.val(v1);
})
b7.click(function(){
    v1=v1.concat("7");
    disp.val(v1);1
})
b8.click(function(){
    v1=v1.concat("8");
    disp.val(v1);
})
b9.click(function(){
    v1=v1.concat("9");
    disp.val(v1);
})
b0.click(function(){
    v1=v1.concat("0");
    disp.val(v1);
})
bc.click(function(){
    v1="";v2="";v3="";v4="";v5="";a=false;s=false;m=false;d=false;e=false;
    disp.val(v1);
})
ba.click(function(){
    v2=(v2=="")?v1:v2;
    if(e==false&&(a==true||s==true||m==true||d==true))equals()
    v1="";
    a=true;
    s=false;m=false;d=false;e=false;
})
bs.click(function(){
    v2=(v2=="")?v1:v2;
    if(e==false&&(a==true||s==true||m==true||d==true))equals()
    v1="";
    s=true;
    a=false;m=false;d=false;e=false;
})
bm.click(function(){
    v2=(v2=="")?v1:v2;
    if(e==false&&(a==true||s==true||m==true||d==true))equals()
    v1="";
    m=true;
    a=false;s=false;d=false;e=false;
})
bd.click(function(){
    v2=(v2=="")?v1:v2;
    if(e==false&&(a==true||s==true||m==true||d==true))equals()
    v1="";
    d=true;
    a=false;s=false;m=false;e=false;
})
be.click(equals)

function equals(){
    if(v1!=""){
        v4=(e==false)?v1:v4;
        v5=(e==false)?v2:v5;
        e=true;
        v3= (a==true)?parseFloat(v5)+parseFloat(v4):
            (s==true)?parseFloat(v5)-parseFloat(v4):
            (m==true)?parseFloat(v5)*parseFloat(v4):
            (d==true)?parseFloat(v5)/parseFloat(v4):
            v1;
        v3=v3.toString();
        v5=v3;
        v1=v3;
        v2=v3;
        disp.val(v3); 
    }
    
}


