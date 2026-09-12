# 🚀 PROJETO 2 (v2) — SISTEMA DE ALUGUEL DE MOTOS

# 🎯 PROBLEMA

Você desenvolve sistemas para a Locadora de Motos MotoVia.

A locadora quer verificar a disponibilidade de motos, aplicar desconto para aluguéis mais longos e conferir o sinal pago pelo cliente.

# 📋 PROJETO

## RF01 — Registro do aluguel

O sistema deve representar um aluguel contendo:

- nome do cliente;
- modelo da moto;
- valor da diária;
- número de dias de aluguel;
- quantidade de motos solicitadas;
- motos disponíveis;
- valor pago (sinal).

Para os testes, será utilizado inicialmente:

```
Cliente: Natália Pires
Modelo: Moto Esportiva 300cc
Valor da diária: R$ 200
Dias de aluguel: 12
Motos solicitadas: 2
Motos disponíveis: 1
Valor pago: R$ 1500
```

## RF02 — Cálculo do valor base

```
valor base = valor da diária × número de dias de aluguel
```

Para o cenário principal:

```
200 × 12 = 2400
```

## RF03 — Verificação das motos disponíveis

O sistema deve verificar, **usando `if`/`else`**, se quantidade de motos solicitadas cabe dentro das motos disponíveis.

Quando couber, o resultado deverá ser:

```
Motos disponíveis
```

Caso contrário:

```
Motos indisponíveis
```

Para o cenário principal:

```
Motos solicitadas: 2
Motos disponíveis: 1

Resultado esperado: Motos indisponíveis
```

## RF04 — Desconto para aluguel longo

Aluguéis com 10 dias ou mais recebem R$ 120 de desconto. Abaixo disso, não há desconto.

Para o cenário principal:

```
número de dias de aluguel: 12

Situação esperada: Desconto de aluguel longo aplicado
Valor esperado: R$ 120
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
2400 - 120 = 2280
```

## RF06 — Verificação do pagamento

Quando o valor pago for maior ou igual ao valor final:

```
Aluguel quitado
```

Caso contrário:

```
Aluguel com saldo pendente
```

Para o cenário principal:

```
Valor final: R$ 2280
Valor pago: R$ 1500

Resultado esperado: Aluguel com saldo pendente
```

## RF07 — Cálculo do saldo devedor

Quando o pagamento for insuficiente:

```
saldo devedor = valor final - valor pago
```

Quando o pagamento for suficiente, saldo devedor deve ser `R$ 0`.

Para o cenário principal:

```
saldo devedor esperado: R$ 780
```

## RF08 — Situação do aluguel

Usando `if`/`else` (pode ser um dentro do outro):

- Se motos disponíveis estiver ok **e** o pagamento estiver aprovado: `"Aluguel confirmado"`
- Se motos disponíveis estiver ok, mas o pagamento **não** estiver aprovado: `"Aluguel confirmado com saldo pendente"`
- Se motos disponíveis **não** estiver ok: `"Aluguel não pode ser confirmado: motos indisponíveis"`

Para o cenário principal:

```
Aluguel não pode ser confirmado: motos indisponíveis
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se o aluguel tivesse menos de 10 dias: o desconto não seria aplicado..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    veiculo,
    valorUnidade,
    periodo,
    quantidadeReservada,
    motosDisponiveis,
    valorPago,
    valorBase,
    disponibilidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusAluguel,
    resumo
}
```

# 📂 Estrutura do projeto

```
projeto2v2
 ┣ test
 ┃ ┗ index.test.js
 ┣ index.js
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```

Boas práticas! 🤙
