let timer = () => {
  let args = process.argv.slice(2);
  let highestValue = 0;
  for(let argument of args){
    argument = Number(argument);
    if(argument > 0 && argument !== NaN){
      if(argument > highestValue){
        highestValue = argument;
      }
      setTimeout(() => {
        process.stdout.write('\x07' + argument);
      }, argument * 1000);
    }
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, (highestValue * 1000) + 50);
}

timer();