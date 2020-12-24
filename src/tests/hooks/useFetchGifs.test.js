import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

import '@testing-library/jest-dom';

describe('Probando el hook useFetchGif', () => {
  test('debe de retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One punch')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('debe de retornar un arreglo de imagenes y el arreglo en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One punch')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data).toEqual(data);
    expect(loading).toBeFalsy();
  });
});
