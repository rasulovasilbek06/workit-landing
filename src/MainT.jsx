import S1Card1 from './S1-card1'
import S1Card2 from './S1-card2'
import S1Card3 from './S1-card3'
import S2Card from './S2-card'

function MainT() {
    return <main>
        <div className="container">
            <div className="Section-1">
                <S1Card1 />
                <S1Card2 />
                <S1Card3 />
            </div>
        </div>
        <div className="container">
            <div className="Section-2">
                <S2Card />
            </div>
        </div>
    </main>
}

export default MainT