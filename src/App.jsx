import FiltersContainer from './components/FiltersContainer/FiltersContainer';
import FlightsContent from './components/FlightsContent/FlightsContent';
import GlobalStyle from './components/common/GlobalStyles/GlobalStyles';

function App() {

  return (
    <>
      <GlobalStyle />
      <FiltersContainer />
      <FlightsContent />
    </>

  );
}

export default App;
