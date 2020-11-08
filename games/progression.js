import { runGame, randomInteger, makeProgression } from '../src/index.js';

const progressionConfig = {
  length: {
    min: 5,
    max: 20,
  },
  start: {
    min: 0,
    max: 100,
  },
  step: {
    min: 1,
    max: 10,
  },
};

export default function run() {
  const description = 'What number is missing in the progression?';
  const questionAndAnswer = () => {
    const length = randomInteger(progressionConfig.length.min, progressionConfig.length.max);
    const start = randomInteger(progressionConfig.start.min, progressionConfig.start.max);
    const step = randomInteger(progressionConfig.step.min, progressionConfig.step.max);
    const progression = makeProgression(length, start, step);
    const hiddenIndex = randomInteger(0, length - 1);
    const answer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    return {
      question: progression.join(' '),
      answer,
    };
  };

  runGame(description, questionAndAnswer);
}
