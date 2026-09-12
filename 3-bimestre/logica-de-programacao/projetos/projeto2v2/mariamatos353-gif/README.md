# 🚀 PROJETO 2 (v2) — SISTEMA DE RESERVA DE SALA DE DANÇA

# 🎯 PROBLEMA

Você desenvolve sistemas para a Academia de Dança Passo a Passo.

A academia quer verificar salas disponíveis no horário, aplicar desconto para reservas mais longas e conferir o sinal pago.

# 📋 PROJETO

## RF01 — Registro da reserva

O sistema deve representar uma reserva contendo:

- nome do cliente;
- tipo de sala;
- valor por hora;
- número de horas reservadas;
- quantidade de salas solicitadas;
- salas disponíveis no horário;
- valor pago (sinal).

Para os testes, será utilizado inicialmente:

```
Cliente: Juliana Prado
Tipo de sala: Sala de Dança de Salão
Valor por hora: R$ 50
Horas reservadas: 5
Salas solicitadas: 2
Salas disponíveis: 1
Valor pago: R$ 150
```

## RF02 — Cálculo do valor base

```
valor base = valor por hora × número de horas reservadas
```

Para o cenário principal:

```
50 × 5 = 250
```

## RF03 — Verificação das salas disponíveis no horário

O sistema deve verificar, **usando `if`/`else`**, se quantidade de salas solicitadas cabe dentro das salas disponíveis no horário.

Quando couber, o resultado deverá ser:

```
Salas disponíveis
```

Caso contrário:

```
Salas indisponíveis
```

Para o cenário principal:

```
Salas solicitadas: 2
Salas disponíveis: 1

Resultado esperado: Salas indisponíveis
```

## RF04 — Desconto para reserva longa

Reservas com 4 horas ou mais recebem R$ 25 de desconto. Abaixo disso, não há desconto.

Para o cenário principal:

```
número de horas reservadas: 5

Situação esperada: Desconto de reserva longa aplicado
Valor esperado: R$ 25
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
250 - 25 = 225
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
Valor final: R$ 225
Valor pago: R$ 150

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
saldo devedor esperado: R$ 75
```

## RF08 — Situação da reserva

Usando `if`/`else` (pode ser um dentro do outro):

- Se salas disponíveis no horário estiver ok **e** o pagamento estiver aprovado: `"Reserva confirmada"`
- Se salas disponíveis no horário estiver ok, mas o pagamento **não** estiver aprovado: `"Reserva confirmada com saldo pendente"`
- Se salas disponíveis no horário **não** estiver ok: `"Reserva não pode ser confirmada: salas indisponíveis"`

Para o cenário principal:

```
Reserva não pode ser confirmada: salas indisponíveis
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se a reserva tivesse menos de 4 horas: o desconto não seria aplicado..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    sala,
    valorUnidade,
    periodo,
    quantidadeReservada,
    salasDisponiveis,
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
