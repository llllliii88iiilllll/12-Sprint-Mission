import "./TotalList.css";
import heartImg from "../assets/ic_heart.svg";

function TotalListItem({ item }) {
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

function TotalList({ items }) {
  return (
    <ul className="product-list-wrap">
      {items.map((item) => {
        return (
          <li className="product-list total" key={item.id}>
            <TotalListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default TotalList;
