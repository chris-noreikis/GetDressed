import * as stdInReader from './stdInReader';
import getDressed from './getDressed';
import constants from "./constants";

describe('Get Dressed', () => {
  let stdInReaderMock;
  beforeEach(() => {
    stdInReaderMock = jest.spyOn(stdInReader, 'default');
  });
  
  it('should successfully process socks, pants, shirt, shoes, leave', () => {
    stdInReaderMock.mockReturnValue([
      constants.SOCKS, constants.PANTS, constants.SHIRT, constants.SHOES, constants.LEAVE
    ]);
    expect(getDressed()).toEqual(['socks', 'pants', 'shirt', 'shoes', 'leave']);
  });
  
  it('should successfully process shirt, socks, pants, shoes, leave', () => {
    stdInReaderMock.mockReturnValue([
      constants.SHIRT, constants.SOCKS, constants.PANTS, constants.SHOES, constants.LEAVE
    ]);
    expect(getDressed()).toEqual(['shirt', 'socks', 'pants', 'shoes', 'leave']);
  });
  
  it('should successfully process shirt, pants, socks, shoes, leave', () => {
    stdInReaderMock.mockReturnValue([
      constants.SHIRT, constants.PANTS, constants.SOCKS, constants.SHOES, constants.LEAVE
    ]);
    expect(getDressed()).toEqual(['shirt', 'pants', 'socks', 'shoes', 'leave']);
  });
  
  it('should successfully process shirt, socks, pants, hat, shoes, leave', () => {
    stdInReaderMock.mockReturnValue([
      constants.SHIRT, constants.SOCKS, constants.PANTS, constants.HAT, constants.SHOES, constants.LEAVE
    ]);
    expect(getDressed()).toEqual(['shirt', 'socks', 'pants', 'hat', 'shoes', 'leave']);
  });
  
  it('should fail when attempting to put on shoes before socks', () => {
    stdInReaderMock.mockReturnValue([
      constants.SHIRT, constants.PANTS, constants.SHOES, constants.SOCKS, constants.LEAVE
    ]);
    expect(getDressed()).toEqual(['shirt', 'pants', 'fail']);
  });
  
  it('should fail when attempting to put on shoes before pants', () => {
    stdInReaderMock.mockReturnValue([
      constants.SHIRT, constants.SOCKS, constants.SHOES, constants.PANTS, constants.LEAVE
    ]);
    expect(getDressed()).toEqual(['shirt', 'socks', 'fail']);
  });
  
  it('should fail when attempting to put on hat before shirt', () => {
    stdInReaderMock.mockReturnValue([
      constants.SOCKS, constants.PANTS, constants.SHOES, constants.HAT, constants.SHIRT, constants.LEAVE
    ]);
    expect(getDressed()).toEqual(['socks', 'pants', 'shoes', 'fail']);
  });
  
  it('should fail if the person forgets to leave for work', () => {
    stdInReaderMock.mockReturnValue([
      constants.SHIRT, constants.PANTS, constants.SOCKS, constants.SHOES
    ]);
    expect(getDressed()).toEqual(['shirt', 'pants', 'socks', 'shoes', 'fail']);
  });
  
  it('should fail if the person tries to leave before fully dressed', () => {
    stdInReaderMock.mockReturnValue([
      constants.SOCKS, constants.PANTS, constants.SHIRT, constants.LEAVE, constants.SHOES
    ]);
    expect(getDressed()).toEqual(['socks', 'pants', 'shirt', 'fail']);
  });
  
  it('should output fail if a person doesn\t put on any clothes at all', () => {
    stdInReaderMock.mockReturnValue([]);
    expect(getDressed()).toEqual(['fail']);
  });
});