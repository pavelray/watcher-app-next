
const httpService = {
  get: async (url, options = {}) => {
    const response = await fetch(url);
    const data = await response.json()
    return data;
  },
};

export default httpService;
