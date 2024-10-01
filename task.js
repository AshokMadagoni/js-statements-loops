// 1.Answer

for(var a=1;a<=10;a++){
    console.log(a);  
}

var a=1;
while(a<=10){
    console.log(a);
    a++  
}

var a=1;
do{
    console.log(a);
    a++
}
while(a<=10)

// 2.Answer

for(var a=2;a<=10;a=a+2){
    console.log(a);
    
}

var a=2;
while(a<=10){
    console.log(a);
    a=a+2;
}

var a=2;
do{
    console.log(a);
    a=a+2;    
}
while(a<=10);

// 3.Answer

for(var a=1;a<=10;a=a+2){
    console.log(a);
}

var a=1;
while(a<=10){
    console.log(a);
    a=a+2;
}

var a=1;
do{
    console.log(a);
    a=a+2;
}
while(a<=10);

// 4.Answer

var a=40;
if(a>80 && a<=100){
    console.log(a+"grade A");
}
else if(a>60 && a<=80){
    console.log(a+"grade B");
}
else if(a>50 && a<=60){
    console.log(a+"grade c");
}
else if(a>35 && a<45){ 
    console.log(a+"grade D");   
}
else{
    console.log("fail");   
}