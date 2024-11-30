import { useState, useEffect, useRef } from "react";
import "./app.css";
import Nav from "./Nav";
import ContentWrap from "./ContentWrap";
import "./BestList.css";
import { getItems } from "../api";
import BestList from "./BestList";
import TotalList from "./TotalList";

function App() {
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(4);
  const [fullPage, setFullPage] = useState(10);
  const [items, setItems] = useState([]);
  const [fullItems, setFullItems] = useState([]);

  const selectRef = useRef(null);
  const [currentValue, setCurrentValue] = useState("최신순");
  const [showOptions, setShowOptions] = useState(false);

  const [keyword, setKeyword] = useState("");

  const handleKeywordSubmit = (e) => {
    e.preventDefault();
    const searchKeyword = e.target["keyword"].value.trim();
    setKeyword(searchKeyword);
    handleLoadFull(order, searchKeyword);
  };

  const handleOnChangeSelectValue = (e) => {
    const sortValue = e.target.getAttribute("value");
    const sortName = e.target.getAttribute("name");
    setCurrentValue(sortName);
    setOrder(sortValue);
  };

  const handleLoad = async () => {
    const options = { orderBy: "favorite", pageSize: page };
    const { list } = await getItems(options);
    setItems(list);
  };

  const handleLoadFull = async (options) => {
    const fullOptions = {
      orderBy: order,
      pageSize: fullPage,
      keyword: keyword,
    };
    const { list } = await getItems(fullOptions);
    setFullItems(list);
  };

  useEffect(() => {
    handleLoad();
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [order, selectRef]);

  useEffect(() => {
    handleLoadFull({ order, limit: 10 });
  }, [page, order, keyword]);

  return (
    <>
      <Nav />
      <ContentWrap>
        <BestList items={items} />
        <article className="total-product">
          <div className="total-product-top">
            <p className="section-title">전체 상품</p>
            <form onSubmit={handleKeywordSubmit}>
              <input
                type="search"
                name="keyword"
                className="input-search"
                placeholder="검색할 상품을 입력해주세요"
              />
            </form>
            <a href="./additem.html" className="btn-register">
              상품 등록하기
            </a>
            <div
              className="sort"
              onClick={() => {
                setShowOptions(!showOptions);
              }}
              ref={selectRef}
            >
              <label className="btn-sort">{currentValue}</label>
              {showOptions && (
                <ul class="sort-list">
                  <li
                    class="latest"
                    value="recent"
                    name="최신순"
                    onClick={handleOnChangeSelectValue}
                  >
                    최신순
                  </li>
                  <li
                    class="order-like"
                    value="favorite"
                    name="좋아요순"
                    onClick={handleOnChangeSelectValue}
                  >
                    좋아요순
                  </li>
                </ul>
              )}
            </div>
          </div>
          <TotalList items={fullItems} />
        </article>
      </ContentWrap>
    </>
  );
}

export default App;
