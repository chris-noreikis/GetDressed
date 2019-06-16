import dressCommandFactory from "./factory";
import constants from "./constants";

describe('Dress Command Factory', () => {
  const assertLabel = (constantId, label) => {
    expect(dressCommandFactory(constantId).label).toEqual(label);
  };
  
  const assertDressPerson = (constantId, functionName) => {
    let mockPutOnClothingItem = jest.fn();
    let mockPerson = {[functionName]: mockPutOnClothingItem};
    dressCommandFactory(constantId).dressPerson(mockPerson);
    expect(mockPutOnClothingItem).toHaveBeenCalled();
  };
  
  it('should have a hat label when called with a hat id', () => {
    assertLabel(constants.HAT, 'hat');
  });
  
  it('should put a hat on a person when called with a hat id', () => {
    assertDressPerson(constants.HAT, 'putOnHat');
  });
  
  it('should have a pants label when called with a pants id', () => {
    assertLabel(constants.PANTS, 'pants');
  });
  
  it('should put a pants on a person when called with a pants id', () => {
    assertDressPerson(constants.PANTS, 'putOnPants');
  });
  
  it('should have a shirt label when called with a shirt id', () => {
    assertLabel(constants.SHIRT, 'shirt');
  });
  
  it('should put a shirt on a person when called with a shirt id', () => {
    assertDressPerson(constants.SHIRT, 'putOnShirt');
  });
  
  it('should have a shoes label when called with a shoe id', () => {
    assertLabel(constants.SHOES, 'shoes');
  });
  
  it('should put shoes on a person when called with a shoes id', () => {
    assertDressPerson(constants.SHOES, 'putOnShoes');
  });
  
  it('should have a socks label when called with a sock id', () => {
    assertLabel(constants.SOCKS, 'socks');
  });
  
  it('should put socks on a person when called with a socks id', () => {
    assertDressPerson(constants.SOCKS, 'putOnSocks');
  });
  
  it('should have a leave label when called with a leave for work id', () => {
    assertLabel(constants.LEAVE, 'leave');
  });
  
  it('should leave for work when called with a leave id', () => {
    assertDressPerson(constants.LEAVE, 'leaveForWork');
  });
  
  it('should throw on non recognized input', () => {
    expect(() => dressCommandFactory('fish')).toThrow('Unknown clothing command: fish');
  });
});