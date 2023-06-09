import React from 'react';
import renderer from 'react-test-renderer';
import MeuComponente from '../components/Meucomponente';

it('renders correctly', () => {
  const tree = renderer.create(<MeuComponente />).toJSON();
  expect(tree).toMatchSnapshot();
});

const can = {
    name: 'pamplemousse',
    ounces: 12,
  };
  
  describe('the can', () => {
    test('has 12 ounces', () => {
      expect(can.ounces).toBe(12);
    });
  
    test('has a sophisticated name', () => {
      expect(can.name).toBe('pamplemousse');
    });
  });

  test('drinks returns', () => {
    const drink = jest.fn(() => true);
  
    drink();
  
    expect(drink).toHaveReturned();
  });