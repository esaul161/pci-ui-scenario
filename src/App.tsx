import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import NeoGrid from './components/Grid/Grid';
import { APPLICATION_TITTLE } from './utils/constants';
import { createContext } from 'react';
import { IInitialContext } from './App.types';
import Header from './components/Header/Header';

export const Context = createContext<IInitialContext>({clearFilters: false, setClearFilters: ()=>{}});

const App = () => {
  const [clearFilters, setClearFilters] = useState(false);

  useEffect(() => {
    document.title = APPLICATION_TITTLE;
  }, []);

  return (
    <Context.Provider value={{clearFilters, setClearFilters}}>
    <Container>
      <Row>
        <Col style={{display: 'flex', alignItems: 'center', alignContent: 'center'}}>
          <Header/>
        </Col>
      </Row>
      <NeoGrid />
      </Container>
      </Context.Provider>
  );
}

export default App;
