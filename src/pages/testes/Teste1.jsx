/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./teste.css";

function Teste1() {
    const [numInterval, setNumInterval] = useState({ start: "", end: "" });

    const [palindromes, setPalindromes] = useState([]);
    function reverseString(string) {
        let reversedString = "";
        for (let i = string.length; i >= 0; i--) {
            reversedString += string.charAt(i);
        }
        return reversedString;
    }
    function isPalindrome(number) {
        let string = number.toString();
        if (string === reverseString(string)) {
            return true;
        }
        return false;
    }

    function generatePalindromes() {
        let palindromesArray = [];
        for (let i = numInterval.start; i <= numInterval.end; i++) {
            if (isPalindrome(i)) {
                palindromesArray.push(i);
            }
        }
        setPalindromes(palindromesArray);
    }

    return (
        <div className="center teste">
            <h1>Teste 1</h1>
            <p>
                Descrição: Números palíndromos são aqueles que escritos da
                direita para esquerda ou da esquerda para direita tem o mesmo
                valor. Exemplo: 929, 44, 97379. Fazer um algoritmo que imprima
                todos os números palíndromos entre um intervalo que será
                escolhido pelo usuário da aplicação.
            </p>
            <div className="interval">
                <Input
                    onChange={(e) => {
                        setNumInterval((prev) => ({
                            ...prev,
                            start: e.target.value,
                        }));
                    }}
                />
                <Input
                    onChange={(e) => {
                        setNumInterval((prev) => ({
                            ...prev,
                            end: e.target.value,
                        }));
                    }}
                />
            </div>
            <Button
                text="Gerar palíndromos"
                onClick={() => {
                    if (numInterval.start > numInterval.end) {
                        console.error("Error1");
                    }
                    generatePalindromes();
                }}
            />
            <p>
                {palindromes.map((number, index) => {
                    return (index === 0 ? "" : ", ") + number;
                })}
            </p>
        </div>
    );
}

export default Teste1;
