const handleErrors = (res) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
}

const getJSON = (path, options) => 
    fetch(path, options)
        .then(handleErrors)
        .then(res => res.json())
        .catch(err => {console.warn(`API_ERROR: ${err.message}`)});

class API {
  constructor() {
    this.url = "https://api.jikan.moe/v3";
  }

  getPath(path) {
    const options = {
      method: "GET",
    }
    return getJSON(`${this.url}/${path}`, options)
  }
}

export default new API()