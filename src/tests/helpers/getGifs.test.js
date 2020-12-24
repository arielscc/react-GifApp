import getGifs from '../../helpers/getGifs';
import '@testing-library/jest-dom';

describe('Testing helper getGifs', () => {
  test('getGifs return 10 elements', async () => {
    const data = await getGifs('goku');
    expect(data.length).toBe(10);
  });
});
