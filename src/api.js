export async function getItems({
  orderBy = "",
  pageSize = "",
  keyword = "",
  offset = 0,
  limit = 10,
}) {
  const query = `orderBy=${orderBy}&pageSize=${pageSize}&keyword=${keyword}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await response.json();
  return body;
}
