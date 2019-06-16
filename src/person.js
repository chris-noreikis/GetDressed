export default class Person {
  putOnSocks() {
    this.isWearingSocks = true;
  }
  
  putOnShoes() {
    if (!this.isWearingSocks) {
      throw new Error(this._getFormattedClothingError('socks', 'shoes'));
    }
    
    if (!this.isWearingPants) {
      throw new Error(this._getFormattedClothingError('pants', 'shoes'));
    }

    this.isWearingShoes = true;
  }
  
  putOnShirt() {
    this.isWearingShirt = true;
  }
  
  putOnPants() {
    this.isWearingPants = true;
  }
  
  putOnHat() {
    if (!this.isWearingShirt) {
      throw new Error(this._getFormattedClothingError('shirt', 'hat'));
    }
    
    this.isWearingHat = true;
  }
  
  isProperlyDressed() {
    return Boolean(this.isWearingSocks && this.isWearingShoes && this.isWearingShirt && this.isWearingPants);
  }
  
  leaveForWork() {
    if (!this.isProperlyDressed()) {
      throw new Error('Person told to leave for work and is NOT FULLY DRESSED!');
    }
  }
  
  _getFormattedClothingError(requiredClothingItem, attemptedClothingItem) {
    return `Cannot put on ${attemptedClothingItem} without ${requiredClothingItem}!`;
  }
}