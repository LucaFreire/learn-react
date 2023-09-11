import './style.css';
import Card from 'react-bootstrap/Card';

export default function CountryCard({ name, currency, capital, subregion, languages, flag }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={flag} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Currency: {currency}
          <br/>
          Capital: {capital}
          <br/>
          Subregion: {subregion}
          <br/>
          Language(s): {languages}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

