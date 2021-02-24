import { useEffect, useState } from "react";
import API from "./api";

function useAnimeSearch(query, page) {
  const [anime, setAnime] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  console.log(page);

  useEffect(() => {
    setAnime([]);
  }, [query]);

  useEffect(() => {
    API.getPath(`search/anime?q=${query}&page=${page}&genre=12&genre_exclude=0`)
      .then((j) => {
        if (j) {
          setAnime(anime => {
            return [...anime, ...j.results];
          });
          if (anime.length > 100) {
            setHasMore(false);
          } else {
            setHasMore(true);
          }
        }
      })
  }, [page, query]);

  return { anime, hasMore };
}

export default useAnimeSearch;
