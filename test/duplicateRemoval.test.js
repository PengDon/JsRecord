import removeSome from '../src/duplicateRemoval';

let arr = [2,5,6,33,7,5,6,7,5,4,11,23,42];
let rst = [2,5,6,33,7,4,11,23,42];

test('model 1 to equal [2,5,6,33,7,4,11,23,42]', () => {
  expect(removeSome(1,arr)).toEqual(rst);
})
