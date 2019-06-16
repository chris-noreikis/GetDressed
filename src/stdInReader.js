const convertToCommandNumbers = (clothingCommands) => {
  return clothingCommands.map((command) => {
    let parsedNumber = parseInt(command, 10);
    if (isNaN(parsedNumber)) {
      throw new Error(`Unknown program input: ${command}`);
    }
    
    return parsedNumber;
  });
};

export default () => {
  let clothingCommands = process.argv.slice(2);
  return convertToCommandNumbers(clothingCommands);
};