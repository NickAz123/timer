let timesAr = require(`yargs`).argv;

const timer = (timesAr) => {

  for (const times of timesAr){
    setTimeout(() => {
      process.stdout.write('. \n');
    }, times * 1000);
  }
}

timer(timesAr._)