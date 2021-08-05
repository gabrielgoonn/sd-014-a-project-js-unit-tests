const myCounter = () => {
  var myArray = [];
  for (var i = 0; i <= 3; i += 1) {
    // myArray.push(counter);
    for (var j = 1; j <= 3; j += 1) {
      // myArray.push(counter);
      console.log(myArray[i][j]);
    }
  }
  return (myArray[i][j]);
};