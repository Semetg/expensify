import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses';

test('Should remove expense', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});