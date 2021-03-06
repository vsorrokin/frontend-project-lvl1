import runGame from '../index.js';
import { randomInteger } from '../utils.js';

function makeProgression(length, start, step) {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }

  return result;
}

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

const description = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const length = randomInteger(progressionConfig.length.min, progressionConfig.length.max);
  const start = randomInteger(progressionConfig.start.min, progressionConfig.start.max);
  const step = randomInteger(progressionConfig.step.min, progressionConfig.step.max);
  const progression = makeProgression(length, start, step);
  const hiddenIndex = randomInteger(0, length - 1);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  return {
    question: progression.join(' '),
    answer,
  };
};

export default () => runGame(description, getQuestionAndAnswer);
