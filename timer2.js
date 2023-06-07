const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// on any input from stdin (standard input), output a "." to stdout
process.stdin.on('data', (key) => {
  timer = 0;
  if(key == "b"){
    process.stdout.write('\x07');
  }
  else if((typeof Number(key)) !== NaN && Number(key) > 0){//check if the value is a number and is not 0
    process.stdout.write(`Setting Timer To ${key} seconds...\n`);
    timer = Number(key);
    setTimeout(() => {//set timeout to play chime when the number of milliseconds have passed
      process.stdout.write('\x07');
    }, key * 1000);
  }
  else if (key === "\u0003"){
    process.stdout.write(`Thanks for using me, caio\n`);
    process.exit();
  }
  
});

console.log('after callback');