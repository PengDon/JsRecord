import exChange from '../src/exchange';

let a = 33;
let b = 99;

test(`model 1 to equal [${b},${a}]`, () => {
  expect(exChange(1,a,b)).toEqual([b,a]);
})

test(`model 2 to equal [${b},${a}]`, () => {
  expect(exChange(2,a,b)).toEqual([b,a]);
})

test(`model 3 to equal [${b},${a}]`, () => {
  expect(exChange(3,a,b)).toEqual([b,a]);
})

test(`model 4 to equal [${b},${a}]`, () => {
  expect(exChange(4,a,b)).toEqual([b,a]);
})

test(`model 5 to equal [${b},${a}]`, () => {
  expect(exChange(5,a,b)).toEqual([b,a]);
})

test(`model 6 to equal [${b},${a}]`, () => {
  expect(exChange(6,a,b)).toEqual([b,a]);
})