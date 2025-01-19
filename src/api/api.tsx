const BASE_URL = "https://panda-market-api.vercel.app/products";

//Item 타입 정의
export type Item = {
  id: number;
  name: string;
  price: number;
  description: string;
  tags: string[];
  images?: string[];
  ownerId: number;
  ownerNickname: string;
  favoriteCount: number;
  createdAt: string;
};

// getItems 타입 설정
type GetItemsParams = {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
};

// getItems 함수 반환 타입 설정
type GetItemsResponse = {
  totalCount: number;
  list: Item[];
};

export async function getItems({
  orderBy = "",
  pageSize = 1,
  keyword = "",
  page = 1,
}: GetItemsParams): Promise<GetItemsResponse> {
  const query = `page=${page}&orderBy=${orderBy}&pageSize=${pageSize}&keyword=${keyword}`;
  const response = await fetch(`${BASE_URL}?${query}`);
  if (!response.ok) {
    throw new Error("아이템을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return {
    list: body.list,
    totalCount: body.totalCount,
  };
}

export async function getItemsDetail(id: number): Promise<Item> {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("아이템을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

// Writer 타입 정의
type Writer = {
  image: string;
  nickname: string;
  id: number;
};

// CommentsList 타입 정의
type CommentsList = {
  writer: Writer;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
};

// getItemsComments 함수 반환 타입 정의
type Comment = {
  nextCursor?: number;
  list: CommentsList;
};

export async function getItemsComments(id: number): Promise<Comment[]> {
  const response = await fetch(`${BASE_URL}/${id}/comments?limit=100`);
  if (!response.ok) {
    throw new Error("댓글을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
