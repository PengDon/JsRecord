import {bubbleSort} from '../src/sort';

let nums = [1,43,65,33,2,5,6,8,112,4,21,63,30,9]; // 无序数组
let rst = [1,2,4,5,6,8,9,21,30,33,43,63,65,112];  // 正序数组

test(`bubbleSort toEqual ${rst}`, () => {
  expect(bubbleSort(nums)).toEqual(rst);
});

