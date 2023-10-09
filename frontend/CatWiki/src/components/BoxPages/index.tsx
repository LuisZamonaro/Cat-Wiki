import { GlobalStyle } from "../../styles/GlobalStyle";
import CatInfo from "../../Pages/CatInfo";
import Dashboard from "../../Pages/Dashboard";
import TopCats from "../../Pages/TopCats";
import * as S from './styles'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function BoxPage() {

    return (
        <>
        <BrowserRouter>
            <S.Container>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cat-info/:id" element={<CatInfo />} />
                    <Route path="/top-10-cats" element={<TopCats/>}/>
                </Routes>
            </S.Container>
        </BrowserRouter>
        </>

    )
}