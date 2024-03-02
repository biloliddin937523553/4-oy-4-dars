let son =(Math.floor(Math.random()*100))
alert(
    (`Randomda chiqqan son: ${son}`)
)    
 if(son %3 == 0 && son %5 == 0){
    alert(`${son} : fizzbazz`);
}
else if(son % 5 == 0){
    alert(`${son} : fizz`);
}
else if(son %3 && son %5 == 0){
    alert(`${son} : fizzbazz`);
}
else if(son % 3 == 0){
    alert(`${son} : bazz`);
}
else {
    alert(`${son} soni fizz ham bazz ham fizzbazz ham emas`);
}

