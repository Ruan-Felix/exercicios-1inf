# 🚀 PROJETO 2 (v2) — SISTEMA DE RESERVA DE QUADRA ESPORTIVA

# 🎯 PROBLEMA

Você desenvolve sistemas para o Clube Vitória Esportes.

O clube quer verificar quadras disponíveis no horário, aplicar desconto para reservas mais longas e conferir o sinal pago.

# 📋 PROJETO

## RF01 — Registro da reserva

O sistema deve representar uma reserva contendo:

- nome do cliente;
- tipo de quadra;
- valor por hora;
- número de horas reservadas;
- quantidade de quadras solicitadas;
- quadras disponíveis no horário;
- valor pago (sinal).

Para os testes, será utilizado inicialmente:

```
Cliente: Bruno Alves
Tipo de quadra: Quadra de Society
Valor por hora: R$ 60
Horas reservadas: 2
Quadras solicitadas: 1
Quadras disponíveis: 3
Valor pago: R$ 120
```

## RF02 — Cálculo do valor base

```
valor base = valor por hora × número de horas reservadas
```

Para o cenário principal:

```
60 × 2 = 120
```

## RF03 — Verificação das quadras disponíveis no horário

O sistema deve verificar, **usando `if`/`else`**, se quantidade de quadras solicitadas cabe dentro das quadras disponíveis no horário.

Quando couber, o resultado deverá ser:

```
Quadras disponíveis
```

Caso contrário:

```
Quadras indisponíveis
```

Para o cenário principal:

```
Quadras solicitadas: 1
Quadras disponíveis: 3

Resultado esperado: Quadras disponíveis
```

## RF04 — Desconto para reserva longa

Reservas com 4 horas ou mais recebem R$ 25 de desconto. Abaixo disso, não há desconto.

Para o cenário principal:

```
número de horas reservadas: 2

Situação esperada: Sem desconto
Valor esperado: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
120 - 0 = 120
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
Valor final: R$ 120
Valor pago: R$ 120

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

- Se quadras disponíveis no horário estiver ok **e** o pagamento estiver aprovado: `"Reserva confirmada"`
- Se quadras disponíveis no horário estiver ok, mas o pagamento **não** estiver aprovado: `"Reserva confirmada com saldo pendente"`
- Se quadras disponíveis no horário **não** estiver ok: `"Reserva não pode ser confirmada: quadras indisponíveis"`

Para o cenário principal:

```
Reserva confirmada
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
    quadra,
    valorUnidade,
    periodo,
    quantidadeReservada,
    quadrasDisponiveis,
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
