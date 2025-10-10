export const createApiCall = (endpoint, params = []) => {
  // 개발 환경에서는 프록시 사용, 프로덕션에서는 직접 API 호출
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? ""
      : process.env.REACT_APP_API_URL || "https://api.moonsunpower.com";

  const url =
    params.length > 0
      ? `${baseUrl}${endpoint}/${params.join("/")}/` // 파라미터 있는 경우 (태그텍스트, 주제 입력))
      : `${baseUrl}${endpoint}/`; // 파라미터가 없는 경우 (today text)

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};
