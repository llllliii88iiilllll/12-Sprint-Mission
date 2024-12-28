import styled from "styled-components";

function MainPage() {
    return (
        <main>                                                                       
        <section class="hero-banner">
            <div class="wrap">
                <div class="hero-banner-txt">
                    <h2>일상의 모든 물건을<br> 거래해 보세요</h2>
                    <a href="/items" class="btn-move">구경하러 가기</a>
                </div>
                <img src="/images/Img_home_top.svg" alt="장바구니를 메고 인사하는 판다" class="hero-image">
            </div>
        </section>
        <section class="content-box wrap">
            <div class="content">
                <img src="/images/Img_home_01.svg" alt="인기 상품 이미지">
                <div class="content-txt">
                    <p class="eng-tag">
                        Hot item
                    </p>
                    <h2>
                        인기 상품을<br> 
                        확인해 보세요
                    </h2>
                    <p class="sub-txt">
                        가장 HOT한 중고거래 물품을<br> 
                        판다 마켓에서 확인해 보세요
                    </p><p>
                </p></div>
            </div>
            <div class="content">
                <div class="content-txt right">
                    <p class="eng-tag">
                        Search
                    </p>
                    <h2>
                        구매를 원하는<br> 
                        상품을 검색하세요
                    </h2>
                    <p class="sub-txt">
                        구매하고 싶은 물품은 검색해서<br> 
                        쉽게 찾아보세요
                    </p><p>
                </p></div>
                <img src="images/Img_home_02.svg" alt="상품 검색 이미지">
            </div>
            <div class="content">
                <img src="/images/Img_home_03.svg" alt="판매 상품 등록 이미지">
                <div class="content-txt">
                    <p class="eng-tag">
                        Register
                    </p>
                    <h2>
                        판매를 원하는<br> 
                        상품을 등록하세요
                    </h2>
                    <p class="sub-txt">
                        어떤 물건이든 판매하고 싶은 상품을<br> 
                        쉽게 등록하세요
                    </p><p>
                </p></div>
            </div>
        </section>
        <section class="bottom-banner">
            <div class="wrap">
                <h2>
                    믿을 수 있는<br> 
                    판다마켓 중고 거래
                </h2>
                <img src="/images/Img_home_bottom.svg" alt="인사하는 판다 두 마리">
            </div>
        </section>
    </main>
    )
}

export default MainPage;
