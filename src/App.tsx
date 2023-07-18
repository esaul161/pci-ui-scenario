import { useEffect } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import NeoGrid from './Grid';
import Title from './components/Title/title';
import { HeaderType } from './components/Title/title.types';
import { APPLICATION_TITTLE } from './utils/constants'; 

const App = () => {


  useEffect(() => {
    document.title = APPLICATION_TITTLE;
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Title content={APPLICATION_TITTLE} headerType={HeaderType.H1}/>
        </Col>
      </Row>
      <NeoGrid />
      </Container>
  );
}

export default App;
