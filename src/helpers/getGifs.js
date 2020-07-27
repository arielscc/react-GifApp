const getGifs = async ( category ) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=20&api_key=6mB0j0dSPEhJBKsp2e7exd5grVNcWGKT`;
  const resp = await fetch( URL );
  const { data } = await resp.json();
  const gifs = data.map( item => {
    return {
      id: item.id,
      title: item.title,
      url: item.images?.downsized_medium.url
    }
  })
  return gifs;
}


export default getGifs;