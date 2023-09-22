import { useContext, useState } from 'react';
import useCep from '../../hooks/useCep';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../../context/theme';
import './style.css'


function Home() {

    const [cep, setCep] = useState('');
    const { rua, bairro, cidade, estado, handleRequest } = useCep(cep);

    const { toggleDark, isDark } = useContext(ThemeContext);

    const [internalRua, setInternalRua] = useState('');
    const [internalBairro, setInternalBairro] = useState('');
    const [internalCidade, setInternalCidade] = useState('');
    const [internalEstado, setInternalEstado] = useState('');

    return (<>
        <div className={`main-home ${isDark ? "dark" : "light"}`}>
            <button onClick={() => toggleDark()}>Color Mode</button>

            <h1 className={`${isDark ? "dark" : "light"}`}>Tela de CEP</h1>

            <div className='main-home'>
                <Form className='forms'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control onChange={(e) => setCep(e.target.value)} onBlur={() => handleRequest()} type="text" placeholder="digite seu CEP" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control value={estado} onChange={(e) => setInternalEstado(e.target.value)} type="text" placeholder="digite seu estado" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control value={cidade} onChange={(e) => setInternalCidade(e.target.value)} type="text" placeholder="digite sua cidade" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control value={bairro} onChange={(e) => setInternalBairro(e.target.value)} type="text" placeholder="digite sua bairro" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Rua</Form.Label>
                        <Form.Control value={rua} onChange={(e) => setInternalRua(e.target.value)} type="text" placeholder="digite sua rua" />
                    </Form.Group>
                </Form>
            </div>
        </div>
    </>);
}

export default Home;