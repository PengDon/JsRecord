import {
    sum,
    sum2,
    sum3,
    sum4
} from '../src/sum';

let arr = [1,4,5];
let rst = 10;

test(`方法1`, () => {
    expect(sum(arr)).toEqual(rst);
});

test(`方法2`, () => {
    expect(sum2(arr)).toEqual(rst);
});

test(`方法3`, () => {
    expect(sum3(arr)).toEqual(rst);
});

test(`方法4`, () => {
    expect(sum4(1)(4)(5)).toEqual(rst);
});