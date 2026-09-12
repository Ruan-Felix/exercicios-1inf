# 🚀 PROJETO 2 (v2) — SISTEMA DE RESERVA DE POUSADA

# 🎯 PROBLEMA

Você desenvolve sistemas para a Pousada Recanto Verde.

A pousada quer verificar a disponibilidade de chalés, aplicar desconto para estadias longas e conferir o sinal pago pelo hóspede.

# 📋 PROJETO

## RF01 — Registro da reserva

O sistema deve representar uma reserva contendo:

- nome do hóspede;
- tipo de chalé;
- valor da diária;
- número de noites;
- quantidade de chalés reservados;
- chalés disponíveis;
- valor pago (sinal).

Para os testes, será utilizado inicialmente:

```
Hóspede: Rodrigo Farias
Tipo de chalé: Chalé Duplo
Valor da diária: R$ 400
Noites: 8
Chalés reservados: 2
Chalés disponíveis: 1
Valor pago: R$ 2000
```

## RF02 — Cálculo do valor base

```
valor base = valor da diária × número de noites
```

Para o cenário principal:

```
400 × 8 = 3200
```

## RF03 — Verificação dos chalés disponíveis

O sistema deve verificar, **usando `if`/`else`**, se quantidade de chalés reservados cabe dentro dos chalés disponíveis.

Quando couber, o resultado deverá ser:

```
Chalés disponíveis
```

Caso contrário:

```
Chalés indisponíveis
```

Para o cenário principal:

```
Chalés reservados: 2
Chalés disponíveis: 1

Resultado esperado: Chalés indisponíveis
```

## RF04 — Desconto para estadia longa

Reservas com 7 noites ou mais recebem R$ 150 de desconto. Abaixo disso, não há desconto.

Para o cenário principal:

```
número de noites: 8

Situação esperada: Desconto de estadia longa aplicado
Valor esperado: R$ 150
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
3200 - 150 = 3050
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
Valor final: R$ 3050
Valor pago: R$ 2000

Resultado esperado: Reserva com saldo pendente
```

## RF07 — Cálculo do saldo devedor

Quando o pagamento for insuficiente:

```
saldo devedor = valor final - valor pago
```

Quando o pagamento for suficiente, saldo devedor deve ser `R$ 0`.

Para o cenário principal:

```
saldo devedor esperado: R$ 1050
```

## RF08 — Situação da reserva

Usando `if`/`else` (pode ser um dentro do outro):

- Se chalés disponíveis estiver ok **e** o pagamento estiver aprovado: `"Reserva confirmada"`
- Se chalés disponíveis estiver ok, mas o pagamento **não** estiver aprovado: `"Reserva confirmada com saldo pendente"`
- Se chalés disponíveis **não** estiver ok: `"Reserva não pode ser confirmada: sem chalés disponíveis"`

Para o cenário principal:

```
Reserva não pode ser confirmada: sem chalés disponíveis
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
    chale,
    valorUnidade,
    periodo,
    quantidadeReservada,
    chalesDisponiveis,
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
