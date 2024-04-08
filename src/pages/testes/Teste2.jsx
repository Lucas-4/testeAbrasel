/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./teste.css";

function Teste2() {
    const [troco, setTroco] = useState(null);
    const [compra, setCompra] = useState({ valor: "", pago: "" });

    function calculateChange() {
        let notasCem = 0;
        let notasDez = 0;
        let notasUm = 0;

        let valorTroco = compra.pago - compra.valor;
        let trocoTotal = valorTroco;
        while (valorTroco >= 100) {
            valorTroco -= 100;
            notasCem++;
            console.log(notasCem);
        }

        while (valorTroco >= 10) {
            valorTroco -= 10;
            notasDez++;
            console.log(notasDez);
        }

        while (valorTroco >= 1) {
            valorTroco -= 1;
            notasUm++;
        }
        setTroco({
            total: trocoTotal,
            notasUm: notasUm,
            notasDez: notasDez,
            notasCem: notasCem,
        });
    }
    return (
        <div className="center teste">
            <h1>Teste 2</h1>
            <p>
                Descrição: Suponha que um caixa disponha apenas de notas de 1,
                10 e 100 reais. Considerando que alguém está pagando uma compra,
                escreva um algoritmo que mostre o número mínimo de notas que o
                caixa deve fornecer como troco. Mostre também: o valor da
                compra, o valor do troco e a quantidade de cada tipo de nota do
                troco. Suponha que o sistema monetário não utilize moedas. O
                valor da compra e o valor de dinheiro entregue ao caixa deve ser
                informado pelo usuário.
            </p>
            <div>
                <Input
                    placeholder="Valor da Compra"
                    onChange={(e) => {
                        setCompra((prev) => ({
                            ...prev,
                            valor: e.target.value,
                        }));
                    }}
                />
                <Input
                    placeholder="Valor Pago"
                    onChange={(e) => {
                        setCompra((prev) => ({
                            ...prev,
                            pago: e.target.value,
                        }));
                    }}
                />
            </div>
            <Button
                text="Calcular Troco"
                onClick={() => {
                    calculateChange();
                }}
            />
            {troco && (
                <div>
                    <p>{`Troco total: R$${troco.total}`}</p>
                    <p>{`Notas de cem: ${troco.notasCem}`}</p>
                    <p>{`Notas de dez: ${troco.notasDez}`}</p>
                    <p>{`Notas de um: ${troco.notasUm}`}</p>
                </div>
            )}
        </div>
    );
}

export default Teste2;
