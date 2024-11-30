import "./Nav.css";
import homeIcon from "../assets/logo.svg";
import profileImg from "../assets/ic_profile.svg";

function Nav() {
  return (
    <nav>
      <a href="/" className="home">
        <img src={homeIcon} alt="홈으로" />
      </a>
      <ul className="sub-menu">
        <li>
          <a>자유게시판</a>
        </li>
        <li>
          <a className="active">중고마켓</a>
        </li>
      </ul>
      <a className="btn-mypage">
        <img src={profileImg} alt="프로필" />
      </a>
    </nav>
  );
}

export default Nav;
