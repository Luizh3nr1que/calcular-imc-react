import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import './app.css';

export default function App() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    const [displayMsg, setDisplayMsg] = useState(false);

    function calcularImc() {
        setDisplayMsg(true);

        if (peso === '' || altura === '') {
            setResultado('Coloque um valor válido!!');
        } else {
            const alt = altura / 100;
            const imc = peso / (alt * alt);

            if (imc < 18.6) {
                setResultado(`Você está abaixo do peso! Seu IMC: ${imc.toFixed(2)}`);
            } else if (imc >= 18.6 && imc < 24.9) {
                setResultado(`Você está no peso ideal! Seu IMC: ${imc.toFixed(2)}`);
            } else if (imc >= 24.9 && imc < 34.9) {
                setResultado(`Você está levemente acima do peso! Seu IMC: ${imc.toFixed(2)}`);
            } else if (imc >= 34.9) {
                setResultado(`CUIDADO! Obesidade! Seu IMC: ${imc.toFixed(2)}`);
            }



        }
    }

    function clearBtn() {
        setDisplayMsg(false);

    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            calcularImc();
        }
    }

    return (
        <div className="app">
            <h1 data-aos="fade-up" data-aos-delay='400'>Calculadora IMC</h1>
            <span>Vamos calcular seu IMC</span>

            <div className="area-input">
                <input
                    className='peso'
                    data-aos-delay='350'
                    data-aos="fade-left"
                    type="text"
                    placeholder="Peso em (kg)"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />

                <input
                    className='altura'
                    data-aos-delay='450'
                    data-aos="fade-left"
                    type="text"
                    placeholder="Altura em (cm)"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <button className='btnCalcular' onClick={calcularImc}>
                    Calcular
                </button>
            </div>

            {displayMsg && (
                <div className='msgContainer'>
                    <h2 className='msg'>{resultado}</h2>
                    <button onClick={clearBtn} className='clearBtn'><FaTrash /></button>
                </div>
            )}
        </div>
    );
}
