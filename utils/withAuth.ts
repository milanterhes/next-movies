export default (headers: HeadersInit) => {
  return {
    ...headers,
    Authorization: "Bearer " + process.env.AUTH_TOKEN,
  };
};
