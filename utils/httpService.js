const httpService = {
  get: async (url, options = {}) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
  post: async (url, options = {}) => {
    const { body } = options;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        ...body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return data;
  },
};

export default httpService;
