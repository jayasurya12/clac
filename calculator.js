let main=document.createElement('div'); 

let numbersContainer=document.createElement('div');


numbersContainer.setAttribute('class',"numContainer");

let inputData=document.createElement('input');

inputData.setAttribute('id',"inputBox");



// let nums=10;
// for(i=1; i<nums; i++){
//     let calculator=document.createElement('button');
//     calculator.setAttribute('class',"grid-item");
//     calculator.setAttribute('onClick',"send(nums[i])")
//     calculator.innerText=i;
//     calculator.addEventListener('click',(e)=>{
//         console.log(e.target);
//     });
//     numbersContainer.appendChild(calculator);
// }


///One...
let one=document.createElement('button');
one.setAttribute('class',"grid-item");
one.setAttribute("onClick","send(1)");
one.innerText='1';
numbersContainer.appendChild(one);
//Two...
let two=document.createElement('button');
two.setAttribute('class',"grid-item");
two.setAttribute("onClick","send(2)");
two.innerText='2';
numbersContainer.appendChild(two);
//Three...
let three=document.createElement('button');
three.setAttribute('class',"grid-item");
three.setAttribute("onClick","send(3)");
three.innerText='3';
numbersContainer.appendChild(three);
//four...
let four=document.createElement('button');
four.setAttribute('class',"grid-item");
four.setAttribute("onClick","send(4)");
four.innerText='4';
numbersContainer.appendChild(four);
//five..
let five=document.createElement('button');
five.setAttribute('class',"grid-item");
five.setAttribute("onClick","send(5)");
five.innerText='5';
numbersContainer.appendChild(five);
//six..
let six=document.createElement('button');
six.setAttribute('class',"grid-item one");
six.setAttribute("onClick","send(6)");
six.innerText='6';
numbersContainer.appendChild(six);
//seven...
let seven=document.createElement('button');
seven.setAttribute('class',"grid-item one");
seven.setAttribute("onClick","send(7)");
seven.innerText='7';
numbersContainer.appendChild(seven);
//eight...
let eight=document.createElement('button');
eight.setAttribute('class',"grid-item one");
eight.setAttribute("onClick","send(8)");
eight.innerText='8';
numbersContainer.appendChild(eight);
//nine...
let nine=document.createElement('button');
nine.setAttribute('class',"grid-item one");
nine.setAttribute("onClick","send(9)");
nine.innerText='9';
numbersContainer.appendChild(nine);
//zero..
let zero=document.createElement('button');
zero.setAttribute('class',"grid-item");
zero.setAttribute("onClick","send(0)");
zero.innerText='0';
numbersContainer.appendChild(zero);

//Dot...
let dot=document.createElement('button');
dot.setAttribute('class',"grid-item");
dot.setAttribute("onClick","send('.')");
dot.innerText='.';
numbersContainer.appendChild(dot);

//plus..
let plus=document.createElement('button');
plus.setAttribute('class',"grid-item");
plus.setAttribute("onClick","send('+')");
plus.innerText='+';
numbersContainer.appendChild(plus);
//minus...
let minus=document.createElement('button');
minus.setAttribute('class',"grid-item");
minus.setAttribute("onClick","send('-')");
minus.innerText='-';
numbersContainer.appendChild(minus);
//divide...
let divide=document.createElement('button');
divide.setAttribute('class',"grid-item");
divide.setAttribute("onClick","send('/')");
divide.innerText='/';
numbersContainer.appendChild(divide);
//%...modulo..
let modulo=document.createElement('button');
modulo.setAttribute('class',"grid-item");
modulo.setAttribute("onClick","send('%')");
modulo.innerText='%';
numbersContainer.appendChild(modulo);modulo
//Log..
let log=document.createElement('button');
log.setAttribute('class',"grid-item");
log.setAttribute("onClick","send('log')");
log.innerText='log';
numbersContainer.appendChild(log);
//Squrt...
let sqrt=document.createElement('button');
sqrt.setAttribute('class',"grid-item");
sqrt.setAttribute("onClick","send('√')");
sqrt.innerText='√';
numbersContainer.appendChild(sqrt);

// Equals...
let equal=document.createElement('button');
equal.setAttribute('class',"grid-item equlas");
equal.setAttribute("onClick","send('=')");
equal.innerText='=';
numbersContainer.appendChild(equal);
//AC...
let ac=document.createElement('button');
ac.setAttribute('class',"grid-item ac");
ac.setAttribute("onClick","send('AC')");
ac.innerText='AC';
numbersContainer.appendChild(ac);

function send(i){
    switch(i){
        case 0:inputData.value+=0;break;
        case 1:inputData.value+=1;break;
        case 2:inputData.value+=2;break;
        case 3:inputData.value+=3;break;
        case 4:inputData.value+=4;break;
        case 5:inputData.value+=5;break;
        case 6:inputData.value+=6;break;
        case 7:inputData.value+=7;break;
        case 8:inputData.value+=8;break;
        case 9:inputData.value+=9;break;
        case "+":inputData.value+='+';break;
        case ".":inputData.value+='.';break;
        case "-":inputData.value+="-";break;
        case "/":inputData.value+="/";break;
        case "%":inputData.value+="%";break;
        case "AC":inputData.value=" ";break;
        
        case "=":inputData.value= eval(inputData.value);        
        break;  
        case "log":inputData.value= eval(Math.log10(inputData.value));        
        break;
        case '√':inputData.value= eval(Math.sqrt(inputData.value));        
        break;      
    }
}
main.appendChild(inputData);
main.appendChild(numbersContainer)
document.body.appendChild(main);


// let cal=parseInt(prompt("Enter "))

// let main= document.createElement('div');


// document.body.appendChild(main);

