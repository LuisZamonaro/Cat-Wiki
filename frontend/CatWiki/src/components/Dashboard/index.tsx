import BottomPageContent from '../BottomPageContent'
import Footer from '../Footer'
import MidPageContent from '../MidPageContent'
import TopPageContent from '../TopPageContent'
import * as S from './styles'


export default function Dashboard() {


    return (
        <S.Container>
            <TopPageContent/>
            <MidPageContent/>
            <BottomPageContent/>
            <Footer/>
        </S.Container>
    )
}