import stdInReader from "./stdInReader";

describe('StdInReader', () => {
  it('should correctly parse numeric input', () => {
    process.argv = ['node', '/file/name', '1', '2']
    expect(stdInReader()).toEqual([1, 2]);
  });
  
  it('should throw on non numeric input', () => {
    process.argv = ['node', '/file/name', '1', '2', 'fish'];
    expect(() => stdInReader()).toThrow('Unknown program input: fish');
  });
});