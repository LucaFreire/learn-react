import './style.css';

export default function CountryCard({ name, currency, capital, subregion, languages, flag }) {
    return (<>
        <div className='main-country-card'>
            <div className='card-box'>
                <img src={flag} />
                {name}
                {currency}
                {capital}
                {subregion}
                {languages}
            </div>
        </div>
    </>);
}


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CountryCard({ name, currency, capital, subregion, languages, flag }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

