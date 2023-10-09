import BottomPageContent from '../../components/BottomPageContent'
import Footer from '../../components/Footer'
import MidPageContent from '../../components/MidPageContent'
import TopPageContent from '../../components/TopPageContent'
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