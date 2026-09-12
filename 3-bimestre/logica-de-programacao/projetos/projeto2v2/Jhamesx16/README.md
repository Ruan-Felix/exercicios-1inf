# 🚀 PROJETO 2 (v2) — SISTEMA DE RESERVA DE HOTEL

# 🎯 PROBLEMA

Você desenvolve sistemas para o Hotel Vista Mar.

O hotel quer verificar a disponibilidade de quartos, aplicar desconto para estadias longas e conferir o sinal pago pelo hóspede.

# 📋 PROJETO

## RF01 — Registro da reserva

O sistema deve representar uma reserva contendo:

- nome do hóspede;
- tipo de quarto;
- valor da diária;
- número de noites;
- quantidade de quartos reservados;
- quartos disponíveis;
- valor pago (sinal).

Para os testes, será utilizado inicialmente:

```
Hóspede: Camila Duarte
Tipo de quarto: Suíte Standard
Valor da diária: R$ 300
Noites: 3
Quartos reservados: 1
Quartos disponíveis: 5
Valor pago: R$ 900
```

## RF02 — Cálculo do valor base

```
valor base = valor da diária × número de noites
```

Para o cenário principal:

```
300 × 3 = 900
```

## RF03 — Verificação dos quartos disponíveis

O sistema deve verificar, **usando `if`/`else`**, se quantidade de quartos reservados cabe dentro dos quartos disponíveis.

Quando couber, o resultado deverá ser:

```
Quartos disponíveis
```

Caso contrário:

```
Quartos indisponíveis
```

Para o cenário principal:

```
Quartos reservados: 1
Quartos disponíveis: 5

Resultado esperado: Quartos disponíveis
```

## RF04 — Desconto para estadia longa

Reservas com 7 noites ou mais recebem R$ 150 de desconto. Abaixo disso, não há desconto.

Para o cenário principal:

```
número de noites: 3

Situação esperada: Sem desconto
Valor esperado: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
900 - 0 = 900
```

## RF06 — Verificação do pagamento

Quando o valor pago for maior ou igual ao valor final:

```
Reserva quitada
```

Caso contrário:

```
Reserva com saldo pendente
```

Para o cenário principal:

```
Valor final: R$ 900
Valor pago: R$ 900

Resultado esperado: Reserva quitada
```

## RF07 — Cálculo do saldo devedor

Quando o pagamento for insuficiente:

```
saldo devedor = valor final - valor pago
```

Quando o pagamento for suficiente, saldo devedor deve ser `R$ 0`.

Para o cenário principal:

```
saldo devedor esperado: R$ 0
```

## RF08 — Situação da reserva

Usando `if`/`else` (pode ser um dentro do outro):

- Se quartos disponíveis estiver ok **e** o pagamento estiver aprovado: `"Reserva confirmada"`
- Se quartos disponíveis estiver ok, mas o pagamento **não** estiver aprovado: `"Reserva confirmada com saldo pendente"`
- Se quartos disponíveis **não** estiver ok: `"Reserva não pode ser confirmada: sem quartos disponíveis"`

Para o cenário principal:

```
Reserva confirmada
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se a estadia tivesse menos de 7 noites: o desconto não seria aplicado..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    hospede,
    quarto,
    valorUnidade,
    periodo,
    quantidadeReservada,
    quartosDisponiveis,
    valorPago,
    valorBase,
    disponibilidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusReserva,
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
