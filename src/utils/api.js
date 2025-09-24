export const createApiCall = (endpoint, params = []) => {
  const baseUrl =
    process.env.REACT_APP_API_URL || "https://api.moonsunpower.com";
  const url = `${baseUrl}${endpoint}/${params.join("/")}`;

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};
