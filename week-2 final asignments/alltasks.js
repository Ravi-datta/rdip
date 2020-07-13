/* calculator functions */


var expression = "", operand, decimal = 1;
blockEq(true);

function DisplayNum(val){
    document.getElementById('textfield').value += val;  
    expression += val;
    blockSqMod(false);
    return true;
}

function blockNum(val){
    document.getElementById("1").disabled =val;
    document.getElementById("2").disabled =val;
    document.getElementById("3").disabled =val;
    document.getElementById("4").disabled =val;
    document.getElementById("5").disabled =val;
    document.getElementById("6").disabled =val;
    document.getElementById("7").disabled =val;
    document.getElementById("8").disabled =val;
    document.getElementById("9").disabled =val;
    document.getElementById("0").disabled =val;
    return true;
}

function blockOp(val){
    document.getElementById("+").disabled =val;
    document.getElementById("-").disabled =val;
    document.getElementById("*").disabled =val;
    document.getElementById("/").disabled =val;
    document.getElementById("%").disabled =val;
    document.getElementById("absolute").disabled =val;
    document.getElementById("sqroot").disabled =val;
    return true;
}

function blockDec(val){
    document.getElementById(".").disabled =val;
    return true;
}

function blockEq(val){
    document.getElementById("=").disabled = val;
    return true;
}

function blockSqMod(val){
    document.getElementById("absolute").disabled = val;
    document.getElementById("sqroot").disabled = val;
    return true;
}

function DisplayOperator(val){
    document.getElementById('textfield').value += val;
    expression +=val;
    operand = val;
    decimal = 1;

    blockEq(false);
    if( val==' sqrt ' || val==' mod ' ){
        blockDec(true);
        return true;
    }
    else{
        blockOp(true);
        blockSqMod(true);
    }
    return true;
}

function Clear(){
    document.getElementById('textfield').value = "";
    blockDec(false);
    blockNum(false);
    blockOp(false);
    blockSqMod(true);
    expression = "";
    decimal=1;
    return true;
}

function DisplayDec(){
    if(decimal==1){
        document.getElementById('textfield').value += ".";
        expression += ".";
        decimal = 0;
    }
    return true;
}

function solve(){
    var arr = expression.split(operand);

    if(!(operand == ' sqrt ' || operand == ' mod ')){

        var operator1 = parseFloat(arr[0]);
        var operator2 = parseFloat(arr[1]);

        if(operand == '+'){
            document.getElementById('textfield').value = String(Add(operator1,operator2));
        }
        else if(operand == '-'){
            document.getElementById('textfield').value = String(Sub(operator1,operator2));
        }
        else if(operand == '*'){
            document.getElementById('textfield').value = String(Mul(operator1,operator2));
        }
        else if(operand == '/'){
            document.getElementById('textfield').value = String(Div(operator1,operator2));
        }
        else if(operand == '%'){
            document.getElementById('textfield').value = String(Per(operator1,operator2));
        }
    }

    else{

        var operator1 = parseFloat(arr[0]);

        if(operand == ' sqrt '){
             var x = String(Sqrt(operator1));
             var i = x.indexOf(".");
             document.getElementById('textfield').value = x.substr(0,i+4);
        }
        else if(operand == ' mod '){
            document.getElementById('textfield').value = String(Mod(operator1));
        }
    }
    
    return true;
}

function Add(a,b){
    return a+b;
}

function Sub(a,b){
    return a-b;
}

function Mul(a,b){
    return a*b;
}

function Div(a,b){
    return a/b;
}

function Per(a,b){
    return (a/100)*b;
}

function Sqrt(a){
    return String(Math.sqrt(parseFloat(a)));
}

function Mod(a){
    return Math.abs(parseFloat(a));
}

/* Form validation functions  */



function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error_message");
  var text;
  error_message.style.padding = "10px";

  if(name.length == 0){
    text = "Please fill out Name field";
    error_message.innerHTML = text;
    return false;
  }
   if(!isNaN(name[0])){
    text = "Name should not start with number";
    error_message.innerHTML = text;
    return false;
  }
   if(!isNaN(name)){
    text = "Only Characters are allowed";
    error_message.innerHTML = text;
    return false;
  }
  if(name.length <=2){
    text = "Enter characters more than 2";
    error_message.innerHTML = text;
    return false;
  }
  if(email.length == 0){
    text = "Please fill out Email field";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6 || (/(\.\w{2,3})+$/.test(email) == false)){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(phone.length == 0){
    text = "Please fill out Phone Number field";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter 10 digit Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}



// task-3 functions

function palindrome() {
    var inputStr = document.getElementById("palindromeInput").value;
    console.log(inputStr);
    var outStr =inputStr.split('').reverse().join('');
    if (outStr === inputStr) {
        alert('It is a palindrome');
        return true;
    }
    else {
        alert('it is not a palindrome');
        return false;
    }
}
function anagram() {
    var str1 = document.getElementById("anagramInput_1").value;
    var str2 = document.getElementById("anagramInput_2").value;
     str1 = str1.toLowerCase().split('').sort().join('').trim();
     str2 = str2.toLowerCase().split('').sort().join('').trim();
    if (str1 === str2) {
        alert('It is a anagram');
        return true;
    }
    else {
        alert('it is not a anagram');
        return false;
    }
}


// task 4 functions


var object1 = "";
var object2 = "";
var turn;
var objects;

function start(){
    turn =0;

    objects = new Map();

    objects.set(0,'Human');
    objects.set(1,'Cockroach');
    objects.set(2,'Nuclear Bomb');
    return true;
}


function generateObject1(){
    object1 = objects.get( Math.floor(Math.random() * (1001))%3 );
    document.getElementById("pob1").innerHTML = "Object 1 : "+ String( object1 );
    turn += 1;
    document.getElementById("ob1").disabled=true;
    return true;
}

function generateObject2(){
    object2 = objects.get( Math.floor(Math.random() * (1001))%3 );
    document.getElementById("pob2").innerHTML = "Object 2 : "+ String(object2 );
    turn += 1;
    document.getElementById("ob2").disabled=true;
    return true;
}

function survival(){

    if(turn!=2)
    {
        alert("Generate both the objects");
        return false;
    }

    if(object1==object2){
        document.getElementById("winner").innerHTML = "Ouch ! That ended in a Tie !!";
    }
    else if((object2 == "Human" && object1 == "Cockroach") || (object1 == "Human" && object2 == "Cockroach")){
        document.getElementById("winner").innerHTML = "Human Survives !! Cockroach dies ...";
    }
    else if((object2 == "Nuclear Bomb" && object1 == "Cockroach") || (object1 == "Nuclear Bomb" && object2 == "Cockroach")){
        document.getElementById("winner").innerHTML = "Cockroach Survives !! ";
    }
    else if((object2 == "Nuclear Bomb" && object1 == "Human") || (object1 == "Nuclear Bomb" && object2 == "Human")){
        document.getElementById("winner").innerHTML = "Human Dies ... As Nuclear Bomb Explodes !!";
    }

    return true;
}

function clearGame(){
    if(turn==2){
        document.getElementById("pob1").innerHTML = "Click this button to generate Object 1";
        document.getElementById("pob2").innerHTML = "Click this button to generate Object 2";
        document.getElementById("winner").innerHTML = "Check Here !!";
        document.getElementById("ob1").disabled = false;
        document.getElementById("ob2").disabled = false;
        turn = 0;
    }
    return true;
}
