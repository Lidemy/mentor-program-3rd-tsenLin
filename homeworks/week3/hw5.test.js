const add = require('./hw5');

describe('hw5', () => {
  it('should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111', () => {
    expect(add('111111111111111111111111111111111111', '111111111111111111111111111111111111')).toBe('222222222222222222222222222222222222');
  });

  it('should return correct answer when a=12312383813881381381 and b=129018313819319831', () => {
    expect(add('12312383813881381381', '129018313819319831')).toBe('12441402127700701212');
  });

  it('should return correct answer when a=123 and b=5456', () => {
    expect(add('123', '5456')).toBe('5579');
  });

  it('should return correct answer when a=978 and b=154', () => {
    expect(add('978', '154')).toBe('1132');
  });
});
