import MainArticle from "./components/MainArticle";
// import './assets/css/style.scss'
// import './assets/css/reset.css'
import GlobalStyles from "./styled/GlobalStyle";
import { WrapContainer } from "./styled/commonStyle";
const App = () => {
  return (
    <>
      <GlobalStyles />
      <WrapContainer>
        <MainArticle />
      </WrapContainer>
    </>

  );
};

export default App;