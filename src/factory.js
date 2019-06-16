import constants from "./constants";

const buildDressCommand = (label, dressPerson) => ({label, dressPerson});

export default function dressCommandFactory(clothingCommandCode) {
  switch (clothingCommandCode) {
    case constants.HAT:
      return buildDressCommand('hat', (person) => person.putOnHat());
    case constants.PANTS:
      return buildDressCommand('pants', (person) => person.putOnPants());
    case constants.SHIRT:
      return buildDressCommand('shirt', (person) => person.putOnShirt());
    case constants.SHOES:
      return buildDressCommand('shoes', (person) => person.putOnShoes());
    case constants.SOCKS:
      return buildDressCommand('socks', (person) => person.putOnSocks());
    case constants.LEAVE:
      return buildDressCommand('leave', (person) => person.leaveForWork());
    default:
      throw new Error(`Unknown clothing command: ${clothingCommandCode}`);
  }
}