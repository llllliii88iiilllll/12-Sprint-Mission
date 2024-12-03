export async function getItems({
  orderBy = "",
  pageSize = "",
  keyword = "",
  page = 1,
}) {
  const query = `page=${page}&orderBy=${orderBy}&pageSize=${pageSize}&keyword=${keyword}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await response.json();
  return {
    list: body.list,
    totalCount: body.totalCount,
  };
}
