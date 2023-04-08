import user from "./img/user-img.png"
import logo2 from "./img/logo-2.png"

function S2Card() {
    return <section className="Section-2">
        <div className="s2-cover">
            <div className="S2-left">
                <div className="user">
                    <img src={user} alt="" />
                </div>
            </div>
            <div className="S2-right">
                <div className="shape">
                    <h2>Be the first to test</h2>
                    <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I'll be in touch to schedule a call.</p>
                    <div className="button">
                        <h3>Apply for access</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

}

export default S2Card