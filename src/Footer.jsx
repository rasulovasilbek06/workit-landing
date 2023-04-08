import logo2 from "./img/logo-2.png"
import facebook from "./img/facebook.png"
import twitter from "./img/twitter.png"
import instagram from "./img/instagram.png"

function Footer() {
    return <div className="container">
            <footer>
                <img src={logo2} alt="" />
                <div className="f-bottom">
                    <a href="#">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="#" className="newClas">
                        <img src={twitter} alt="" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="" />
                    </a>
                </div>
            </footer>
        </div>
}

export default Footer