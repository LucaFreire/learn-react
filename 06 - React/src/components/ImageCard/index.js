import { Col } from 'react-bootstrap';
import './style.css'

export default function ImageCard({ src, alt }) {
    return (
        <div className='main-img-card'>

            <div className='teste'>
                <Col xs={4} className='content-col'>
                    <div className="content_image">
                        <img
                            className="image"
                            src={src}
                            alt={alt}
                        />
                        <h1 className="title">Café</h1>
                        <p className="value">descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla eu
                            ante quis bibendum. Morbi cursus vestibulum enim a ultrices. Vivamus vitae aliquam risus, facilisis. </p>
                        <p className="value">preço: R$ 4,00</p>
                    </div>
                </Col>;
            </div>
        </div>)
}