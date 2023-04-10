import Logo from "./img/logo.png"
import phone from "./img/header-phone.png"
function Header() {
    return <header>
        <div className="container">
         <div className="header-cover">
          <div className="header__left">
    <a href="#">
    <img src={Logo} alt="Bu yerda rasm bor..." />
    </a>
        </div>
        <div className="header__right">
    <a href="#" className="extraClass">
        Apply for access
    </a>
          </div>
         </div>
        </div>
        <div className="container">
            
        <div className="header--main">
            <div className="h-top">
            <h1>Data <span>tailored</span> to your needs.</h1>
            </div>
            <div className="h-bottom">
        <a href="#">
        <div className="btn">
            <p>Learn more</p>
        </div>
        </a>
            </div>
         </div>
        </div>
        <div className="container">
            <div className="header--bottom">
                <img src={phone} alt="" />
            </div>
        </div>
    </header>
}

export default Header