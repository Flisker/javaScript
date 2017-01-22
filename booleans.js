var myBoolean = true;
console.log(myBoolean);

var invertedBoolean = !myBoolean;
console.log(invertedBoolean);

var result = myBoolean === invertedBoolean;
console.log(result);

if(result){
  console.log('myBoolean === invertedBoolean');
} else {
  console.log('myBoolean !== invertedBoolean');
}
