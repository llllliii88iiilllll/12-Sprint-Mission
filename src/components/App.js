import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import ContentWrap from "./ContentWrap";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Nav />
      <ContentWrap>
        <Outlet />
      </ContentWrap>
      <Footer />
    </>
  );
}

export default App;
