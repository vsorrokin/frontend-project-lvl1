import promptly from 'promptly';

export async function runGame(description, questionAndAnswer) {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  const gamesCount = 3;

  for (let i = 0; i < gamesCount; i += 1) {
    const { question, answer } = questionAndAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = await promptly.prompt('Your answer:? ');

    if (userAnswer !== answer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}

export function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
