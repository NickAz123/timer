let timesAr = require(`yargs`).argv;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (key) => {
  if (key === '\u0003') {
    rl.close();
  }

  if (key === 'b'){
    process.stdout.write('. \n');
  }
});

rl.question('Hi there! Enter a time between 1 and 9 seconds!', (answer) => {
  timer(answer);
});

const timer = (time) => {
  console.log(`Setting timer for ${time} seconds`);
    setTimeout(() => {
      process.stdout.write('. \n');
    }, time * 1000);
    setTimeout(() => {
      process.exit();
    }, time * 1000);
}

rl.on('close', () => { console.log("Thanks for using me! Cya nerd."); process.exit();})
