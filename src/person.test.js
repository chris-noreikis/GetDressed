import Person from "./person";

describe('Person', () => {
  let person;
  
  beforeEach(() => {
    person = new Person();
  });
  
  it('should allow a person to put on socks', () => {
    person.putOnSocks();
    expect(person.isWearingSocks).toBeTruthy();
  });
  
  it('should allow a person to put on pants', () => {
    person.putOnPants();
    expect(person.isWearingPants).toEqual(true);
  });
  
  it('should allow a person to put on a shirt', () => {
    person.putOnShirt();
    expect(person.isWearingShirt).toEqual(true);
  });
  
  it('should allow a person to put on a hat', () => {
    person.putOnShirt();
    person.putOnHat();
    expect(person.isWearingHat).toBeTruthy();
  });
  
  it('should allow a person to put on shoes if they\'re wearing socks and pants', () => {
    person.putOnPants();
    person.putOnSocks();
    person.putOnShoes();
    expect(person.isWearingShoes).toEqual(true);
  });
  
  it('should throw if a person tries to put on shoes before socks', () => {
    expect(() => person.putOnShoes()).toThrow('Cannot put on shoes without socks!');
  });
  
  it('should throw if a person tries to put on shoes before pants', () => {
    person.putOnSocks();
    expect(() => person.putOnShoes()).toThrow('Cannot put on shoes without pants!');
  });
  
  it('should throw if a person tries to put on a hat before a shirt', () => {
    expect(() => person.putOnHat()).toThrow('Cannot put on hat without shirt!');
  });
  
  it('should throw if a person tries to put on shoes before pants', () => {
    person.putOnSocks();
    expect(() => person.putOnShoes()).toThrow();
  });
  
  it('should confirm a person as dressed if they are wearing shirt, shoes, socks, & pants', () => {
    person.putOnSocks();
    person.putOnPants();
    person.putOnShirt();
    person.putOnShoes();
    expect(person.isProperlyDressed()).toEqual(true);
  });
  
  it('should say a person is not dressed if they are missing shoes', () => {
    person.putOnSocks();
    person.putOnPants();
    person.putOnShirt();
    expect(person.isProperlyDressed()).toEqual(false);
  });
});