const handleErrors = (res) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

const getJSON = (path, options) =>
  fetch(path, options)
    .then(handleErrors)
    .then((res) => res.json())
    .catch((err) => {
      console.warn(`API_ERROR: ${err.message}`);
    });

class API {
  constructor() {
    this.url = "https://api.jikan.moe/v3";
  }

  getPath(path) {
    // Would be correct to take options out and pass it in instead
    const options = {
      method: "GET",
    };
    return getJSON(`${this.url}/${path}`, options);
  }

  // Don't want to get banned
  getPathRetry = async (path, n) => {
    const options = {
      method: "GET",
    };
    try {
      return await fetch(`${this.url}/${path}`, options);
    } catch {
      if (n === 0) {
        return;
      }
      return await this.getPathRetry(path, n - 1);
    }
  };
}

export default new API();
