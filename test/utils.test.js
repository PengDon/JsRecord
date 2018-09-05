import {swap,max,min} from '../src/utils';

test('[55,77] to [77,55] ', () => {
   expect(swap([55,77],0,1)).toEqual([77,55]);
})


let arr = [1,23,5,56,44,99];
test(`${arr} max value should 99`, () => {
  expect(max(arr)).toEqual(99)
})


test(`${arr} min value should 1`, () => {
  expect(min(arr)).toEqual(1)
})