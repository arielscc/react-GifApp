# React Gif App

Project for search gifs, using React basic concepts
[live project](https://arielscc.github.io/react-GifApp/.)

#### toHaveBeenCalled

Esta funcion se ejecuta para evaluar si una funcion ha sido llamada almenoz una vez

#### renderHook

Esta funcion es usada para hacer pruebas de hooks, basada en una libreria llamada [react-hooks-testing-library](https://react-hooks-testing-library.com/)

```bash
npm install --save-dev @testing-library/react-hooks
```

ejemplo:
```js
test('debe de retornar el estado inicial del hook', () => {
  const { result } = renderHook( () => useFetchGifs( 'One punch' ) )
  const { data, loading } = result.current

  expect( data ).toEqual([])
  expect( loading ).toBeTruthy()
});
```
