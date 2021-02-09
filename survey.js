const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What is your favorite activity? ', (activity) => {
    rl.question('What do you listen to when you do that? ', (music) => {
      rl.question('What is your favorite food? ', (food) => {
        rl.question('What is your favorite sport? ', (sport) => {
          rl.question('What is your secret superpower? ', (powers) => {
            console.log(`Hey I'm ${name}, and my favorite activity is ${activity}. \n
            When I ${activity} I like to listen to ${music}. My favorite food is ${food} \n 
            I love to watch ${sport}. Sometimes I think I can ${powers}.`)
            rl.close();
          })
        })
      })
    })
  })
});