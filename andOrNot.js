var a = 10;
var b = 20;
var c = 10;

if(a === b || a === c){
  console.log('first condition');
} else {
  console.log('condition is not met');
}

if((a === c && a === b) || b === c){
  console.log('first condition');
} else {
  console.log('condition is not met');
}

if(!(a === b)) { //negating argument
  console.log('first condition');
} else {
  console.log('condition is not met');
}
