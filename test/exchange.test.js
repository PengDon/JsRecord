import exChange from '../src/exchange';

let a = 33;
let b = 99;

test('model 1 to equal 99 33', () => {
  expect(exChange(1,a,b)).toEqual([b,a]);
})

test('model 2 to equal 99 33', () => {
  expect(exChange(2,a,b)).toEqual([b,a]);
})

test('model 3 to equal 99 33', () => {
  expect(exChange(3,a,b)).toEqual([b,a]);
})

test('model 4 to equal 99 33', () => {
  expect(exChange(4,a,b)).toEqual([b,a]);
})

test('model 5 to equal 99 33', () => {
  expect(exChange(5,a,b)).toEqual([b,a]);
})

test('model 6 to equal 99 33', () => {
  expect(exChange(6,a,b)).toEqual([b,a]);
})