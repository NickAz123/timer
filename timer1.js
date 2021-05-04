let timesAr = require(`yargs`).argv;

const timer = (timesAr) => {
  console.log(`Setting timers for the following times: ${timesAr}`);
  for (const times of timesAr){
    setTimeout(() => {
      process.stdout.write('. \n');
    }, times * 1000);
  }
}

timer(timesAr._)