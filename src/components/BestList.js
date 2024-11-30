import "./BestList.css";
import heartImg from "../assets/ic_heart.svg";
import SectionTitle from "./SectionTitle";

function BestListItem({ item }) {
  return (
    <>
      <img src={item.images} alt="상품이미지" />
      <div className="txt-area">
        <p className="product-title">{item.name}</p>
        <p className="product-price">{item.price}원</p>
        <div className="btn-like">
          <img src={heartImg} alt="찜 아이콘" />
          <span className="like-count">{item.favoriteCount}</span>
        </div>
      </div>
    </>
  );
}

function BestList({ items }) {
  return (
    <article className="best-product">
      <SectionTitle>베스트 상품</SectionTitle>
      <ul className="product-list-wrap">
        {items.map((item) => {
          return (
            <li className="product-list" key={item.id}>
              <BestListItem item={item} />
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default BestList;
