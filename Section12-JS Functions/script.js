// Problem 1
function isEven(num){
  if(num % 2 === 0){
    return true;
  } else {
    return false;
  }
}

// Problem 2
function factorial(num){
  if(num === 0){
    return 1;
  } else {
    for(var i = num - 1; i > 0; i--){
      num *= i;
    }
    return num;
  }
}
function factorialTwo(num){
  var result = 1;
  for(var i = 2; i <= num; i++){
    result *= i;
  }
  return result;
}


// Problem 3
function kebabToSnake(arg){
  if(arg.indexOf('-') > -1){
    return arg.replace(/-/g, "_");
  } else {
    return "Need a kebab";
  }
}
