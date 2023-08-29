import Image from '../../components/ImageCard'
import { Col, Row } from 'react-bootstrap';

export default function Coffe() {
    return (
        <>
            <section>
                <Row className='content-products'>
                    <Col md={5} xs={1}>
                        <Image
                            src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'}
                            alt={'Imagem de café'}
                        />
                    </Col>
                    <Col md={4} sm={6} xs={12}>
                        <Image 
                            src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'} 
                            alt={'Imagem de café'}    
                        />
                    </Col>
                    <Col md={4} sm={6} xs={12}>
                        <Image 
                            src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'} 
                            alt={'Imagem de café'}    
                        />
                    </Col>
                </Row>
            </section>
        </>
    );
}