/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./teste.css";

function Teste3() {
    const [tipoVeiculo, setTipoVeiculo] = useState(null);
    const [form, setForm] = useState({});
    const [validator, setValidator] = useState({
        modelo: "",
        anoFabricacao: "",
        numPortas: "",
        marca: "",
        numPassageiros: "",
    });
    function validate() {
        let isValid = true;
        if (form.modelo === "" || form.modelo.trim() === "") {
            isValid = false;
            setValidator((validator) => ({
                ...validator,
                modelo: "Esse campo não pode estar vazio",
            }));
        } else {
            setValidator((validator) => ({
                ...validator,
                modelo: "",
            }));
        }
        if (form.anoFabricacao === "" || form.modelo.trim() === "") {
            isValid = false;

            setValidator((validator) => ({
                ...validator,
                anoFabricacao: "Esse campo não pode estar vazio",
            }));
        } else {
            setValidator((validator) => ({
                ...validator,
                anoFabricacao: "",
            }));
        }
        if (form.anoFabricacao === "" || form.modelo.trim() === "") {
            isValid = false;

            setValidator((validator) => ({
                ...validator,
                numPortas: "Esse campo não pode estar vazio",
            }));
        } else {
            setValidator((validator) => ({
                ...validator,
                numPortas: "",
            }));
        }
        if (form.anoFabricacao === "" || form.modelo.trim() === "") {
            isValid = false;

            setValidator((validator) => ({
                ...validator,
                marca: "Esse campo não pode estar vazio",
            }));
        } else {
            setValidator((validator) => ({
                ...validator,
                marca: "",
            }));
        }
        if (form.anoFabricacao === "" || form.modelo.trim() === "") {
            isValid = false;

            setValidator((validator) => ({
                ...validator,
                numPassageiros: "Esse campo não pode estar vazio",
            }));
        } else {
            setValidator((validator) => ({
                ...validator,
                numPassageiros: "",
            }));
        }
        if (!isValid) {
            throw Error("Invalid form");
        }
    }
    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            tipo: tipoVeiculo,
            modelo: "",
            anoFabricacao: "",
            numPortas: "",
            marca: "",
            numPassageiros: "",
        }));
    }, [tipoVeiculo]);
    return (
        <div className="center teste">
            <h1>Teste 3</h1>
            <p>
                {`Descrição: Precisamos controlar melhor os dados de alguns
                veículos que ficam na nossa garagem e para isso precisamos que
                seja feito o seguinte: a) Crie a interface “Veiculo” com os
                seguintes atributos: – Modelo – Ano de fabricação – Quantidade
                de Portas – Marca b) Crie a classe “Carro”, que herda de Veículo
                e tem os seguintes atributos: – Quantidade de Portas: entre 2 e
                4 c) Crie a classe “Moto”, que herda de Veículo, e possui os
                seguintes atributos: – Rodas: 2 – Passageiros: entre 1 e 2 Deve
                ser solicitado ao usuário que preencha as informações sobre o
                seu veículo, os dados devem ser salvos em um arquivo JSON (para
                não precisar trabalhar com banco de dados, até porquê já vai ser
                bem próximo de um banco NoSQL)`}
            </p>
            <form className="center">
                <p>Escolha um tipo de veículo:</p>
                <div className="vehicle-picker">
                    <Button
                        className={tipoVeiculo === "Carro" ? "selected" : ""}
                        text="Carro"
                        onClick={(e) => {
                            e.preventDefault();
                            setTipoVeiculo("Carro");
                        }}
                    />
                    <Button
                        className={tipoVeiculo === "Moto" ? "selected" : ""}
                        text="Moto"
                        onClick={(e) => {
                            e.preventDefault();
                            setTipoVeiculo("Moto");
                        }}
                    />
                </div>
                {tipoVeiculo === null ? null : (
                    <>
                        <Input
                            placeholder="Modelo"
                            type="text"
                            value={form.modelo}
                            errorMessage={validator.modelo}
                            onChange={(e) => {
                                setForm((form) => ({
                                    ...form,
                                    modelo: e.target.value,
                                }));
                            }}
                        />
                        <Input
                            placeholder="Ano de Fabricação"
                            type="number"
                            value={form.anoFabricacao}
                            errorMessage={validator.anoFabricacao}
                            onChange={(e) => {
                                setForm((form) => ({
                                    ...form,
                                    anoFabricacao: Number.parseInt(
                                        e.target.value
                                    ),
                                }));
                            }}
                        />
                        <Input
                            placeholder="Quantidade de Portas"
                            type="number"
                            value={form.numPortas}
                            errorMessage={validator.numPortas}
                            onChange={(e) => {
                                setForm((form) => ({
                                    ...form,
                                    numPortas: Number.parseInt(e.target.value),
                                }));
                            }}
                        />
                        <Input
                            placeholder="Marca"
                            type="text"
                            value={form.marca}
                            errorMessage={validator.marca}
                            onChange={(e) => {
                                setForm((form) => ({
                                    ...form,
                                    marca: e.target.value,
                                }));
                            }}
                        />

                        {tipoVeiculo === "Moto" ? (
                            <Input
                                placeholder="Quantidade de Passageiros"
                                type="number"
                                value={form.numPassageiros}
                                errorMessage={validator.numPassageiros}
                                onChange={(e) => {
                                    setForm((form) => ({
                                        ...form,
                                        numPassageiros: Number.parseInt(
                                            e.target.value
                                        ),
                                    }));
                                }}
                            />
                        ) : null}
                        <Button
                            text="Salvar"
                            onClick={(e) => {
                                e.preventDefault();
                                validate();
                                fetch("http://localhost:3000/veiculos", {
                                    method: "POST",
                                    headers: {
                                        "Content-type": "application/json",
                                    },
                                    body: JSON.stringify(form),
                                });
                            }}
                        />
                    </>
                )}
            </form>
        </div>
    );
}

export default Teste3;
