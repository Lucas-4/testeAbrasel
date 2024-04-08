/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./teste.css";

function Teste4() {
    const [cepsInput, setCepsInput] = useState(new Array(5).fill(""));
    const [cepData, setCepData] = useState(new Array(5).fill(null));
    async function getCeps() {
        const newCepData = [];
        for (let i = 0; i < cepsInput.length; i++) {
            if (cepsInput[i] >= 9999999) {
                const res = await fetch(
                    `https://viacep.com.br/ws/${cepsInput[i]}/json`
                );
                const data = await res.json();
                if (data.erro) {
                    newCepData.push(null);
                } else {
                    newCepData.push(data);
                }
            } else {
                newCepData.push(null);
            }
        }
        setCepData(newCepData);
    }
    return (
        <div className="center teste">
            <h1>Teste 4</h1>
            <p>
                Descrição: Números palíndromos são aqueles que escritos da
                direita para esquerda ou da esquerda para direita tem o mesmo
                valor. Exemplo: 929, 44, 97379. Fazer um algoritmo que imprima
                todos os números palíndromos entre um intervalo que será
                escolhido pelo usuário da aplicação.
            </p>
            <div>
                {cepsInput.map((cep, index) => {
                    return (
                        <div key={index} className="cep-container">
                            <Input
                                type="number"
                                placeholder="Insira um CEP"
                                value={cepsInput[index]}
                                onChange={(e) => {
                                    if (e.target.value >= 100000000) {
                                        return;
                                    }
                                    const tempCeps = [...cepsInput];
                                    tempCeps[index] = e.target.value;
                                    setCepsInput(tempCeps);
                                }}
                            />

                            {cepData[index] !== null ? (
                                <div className="cep-data">
                                    <p>
                                        <span>Bairro:</span>
                                        {cepData[index].bairro}
                                    </p>
                                    <p>
                                        <span>Cidade:</span>
                                        {cepData[index].localidade}
                                    </p>
                                    <p>
                                        <span>UF:</span>
                                        {cepData[index].uf}
                                    </p>
                                </div>
                            ) : null}
                        </div>
                    );
                })}
                <Button
                    text="Consultar ceps"
                    onClick={() => {
                        getCeps();
                    }}
                />
            </div>
        </div>
    );
}

export default Teste4;
