import Validator from '../nickname';

test('regular test true', () => {

   const regular = new Validator();

   const recevied = regular.validateUsername('name2w');

   const expected = true;

   expect(recevied).toEqual(expected);
});

test('regular test false', () => {
   const regular = new Validator();

   const recevied = regular.validateUsername('name2222w');

   const expected = false;

   expect(recevied).toEqual(expected);
})