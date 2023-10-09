import { GlobalStyle } from "../../styles/GlobalStyle";
import CatInfo from "../CatInfo";
import Dashboard from "../Dashboard";
import TopCats from "../TopCats";
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