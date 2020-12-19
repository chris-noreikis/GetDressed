import dressCommandFactory from './dressCommandFactory';
import Person from "./person";
import readStdIn from "./stdInReader";

export default () => {
  let inputCommands = readStdIn();
  return addFailLabelIfLeaveMissing(
    parseCommandsIntoLabels(inputCommands)
  );
};

function parseCommandsIntoLabels(inputCommands) {
  let person = new Person();
  let labels = [];
  
  try {
    inputCommands.forEach((command) => {
      let dressCommand = dressCommandFactory(command);
      dressCommand.dressPerson(person);
      labels.push(dressCommand.label);
    });
  } catch (e) {
    labels.push('fail');
  }
  
  return labels;
}

function addFailLabelIfLeaveMissing(labels) {
  let lastClothingItem = labels[labels.length - 1];
  let lastItemIsFailOrLeave = lastClothingItem === 'leave' || lastClothingItem === 'fail';
  
  if (!lastItemIsFailOrLeave) {
    labels = [
      ...labels,
      'fail'
    ]
  }
  
  return labels;
}