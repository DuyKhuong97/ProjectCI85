import Footer from "../../components/Footer/Footer"
import Header from "../../Components/Header/Header"
import './Homepage.scss'

const Homepage = () => {
    return (
        <div>
            <div className="header__img">
                <img className="header__img--img ratio ratio-4x3" src="https://firebasestorage.googleapis.com/v0/b/projectci85.appspot.com/o/IMG%2Fheader-index-img.png?alt=media&token=be36d428-20b7-4795-b51b-701aebac72c0" alt="header" />
            </div>

            <Header />
            <div>
                <section className="main__home">
                    <div className="container__home">
                        <a className="service--layout" href="#"><img className="home__bn--img" src="https://firebasestorage.googleapis.com/v0/b/projectci85.appspot.com/o/IMG%2FIndex%20IMG%2Fbanner-home.webp?alt=media&token=e080e0a9-f7d2-4086-af7c-c79a9c2a7498" alt="home banner" /></a>
                        <div className="service__ri service--layout">
                            <img src="https://firebasestorage.googleapis.com/v0/b/projectci85.appspot.com/o/IMG%2FIndex%20IMG%2Fimage_home-service1.webp?alt=media&token=9a804b6a-6649-4077-a303-e30a1a8a7a56" alt="service__1" />
                            <div className="service__info">
                                <h6>Thanh toán</h6>
                                <p>Khách hàng có thể lựa chọn một hoặc nhiều hình thức thanh toán</p>
                            </div>
                        </div>
                        <div className="service__ri service--layout">
                            <img src="https://firebasestorage.googleapis.com/v0/b/projectci85.appspot.com/o/IMG%2FIndex%20IMG%2Fimage_home-service2.webp?alt=media&token=6ab94f7d-7dd9-41bf-ad32-1f53fae949fe" alt="service__1" />
                            <div className="service__info">
                                <h6>Cam kết chính hãng</h6>
                                <p>Chúng tôi cam kết hàng chính hãng và đảm bảo về chất lượng sản phẩm</p>
                            </div>
                        </div>
                        <div className="service__ri service--layout">
                            <img src="https://firebasestorage.googleapis.com/v0/b/projectci85.appspot.com/o/IMG%2FIndex%20IMG%2Fimage_home-service3.webp?alt=media&token=5a23cde3-3aa9-4c4f-82f5-bf686a5aa7f3" alt="service__1" />
                            <div className="service__info">
                                <h6>Siêu tốc 2H</h6>
                                <p>Dịch vụ giao hàng nhanh 2H trong nội thành Hà Nội</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div >
            <Footer />
        </div >
    )
}

export default Homepage