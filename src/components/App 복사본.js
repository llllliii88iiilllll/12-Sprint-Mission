import BestList from "./BestList";
import { useState, useEffect } from "react";
//import { getItems } from "../api";
import Nav from "./Nav";
import ContentWrap from "./ContentWrap";
import TotalList from "./TotalList";
import SectionTitle from "./SectionTitle";
//import { useSearchParams } from "react-router-dom";
import "./app.css";

function App() {
  const [items, setItems] = useState([]);

  //const [searchParams, setSearchParams] = useSearchParams();
  //const order = searchParams.get("order");
  const [best, setBest] = useState([]);

  const [search, setSearch] = useState("");

  //const handleNewestClick = () => setOrder("createdAt");
  // const handleBestClick = () => setOrder("favoriteCount");

  //const sortedItems = items.sort((a, b) => b[order] - a[order]);

  // const handleLoad = async () => {
  //   const { list } = await getItems();
  //   setItems(list);
  // };

  // const handleLoad = async () => {
  //   const { list } = await getItems();
  //   setItems(list);
  // };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target["keyword"].value);
  };

  useEffect(() => {
    fetch(`https://panda-market-api.vercel.app/products?orderBy=${order}`)
      .then((response) => response.json())
      .then((result) => setBest(result));
  }, [order]);

  return (
    <>
      <Nav />
      <ContentWrap>
        <BestList items={items} />
        <article className="total-product">
          <form
            action=""
            method=""
            role="search"
            onSubmit={handleSearchSubmit}
            className="total-product-top"
          >
            <SectionTitle>전체 상품</SectionTitle>
            <input
              type="search"
              id="item-search"
              name="item-search"
              class="input-search"
              placeholder="검색할 상품을 입력해주세요"
            />
            <a href="./additem.html" class="btn-register">
              상품 등록하기
            </a>
            <div className="sort">
              <button className="btn-sort on">최신순</button>
              <ul className="sort-list">
                <li className="latest">최신순</li>
                <li className="order-like">좋아요순</li>
              </ul>
            </div>
          </form>
          {/* <TotalList items={items} /> */}
        </article>
      </ContentWrap>
    </>
  );
}

export default App;
