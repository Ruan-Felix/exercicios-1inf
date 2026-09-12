# 🚀 PROJETO 2 (v2) — SISTEMA DE ORÇAMENTO DE ESPAÇO DE EVENTOS

# 🎯 PROBLEMA

Você desenvolve sistemas para o Espaço de Eventos Jardim Encantado.

O espaço quer verificar se comporta o evento, aplicar desconto para eventos de maior duração e conferir o sinal pago.

# 📋 PROJETO

## RF01 — Registro do orçamento

O sistema deve representar um orçamento contendo:

- nome do contratante;
- pacote de evento;
- valor por hora de evento;
- número de horas de evento;
- quantidade de mesas necessárias;
- mesas disponíveis no espaço;
- valor pago (sinal).

Para os testes, será utilizado inicialmente:

```
Contratante: Isabela Rocha
Pacote: Pacote Diamante
Valor por hora: R$ 250
Horas de evento: 7
Mesas necessárias: 20
Mesas disponíveis: 12
Valor pago: R$ 1000
```

## RF02 — Cálculo do valor base

```
valor base = valor por hora de evento × número de horas de evento
```

Para o cenário principal:

```
250 × 7 = 1750
```

## RF03 — Verificação das mesas disponíveis no espaço

O sistema deve verificar, **usando `if`/`else`**, se quantidade de mesas necessárias cabe dentro das mesas disponíveis no espaço.

Quando couber, o resultado deverá ser:

```
Espaço comporta o evento
```

Caso contrário:

```
Espaço não comporta o evento
```

Para o cenário principal:

```
Mesas necessárias: 20
Mesas disponíveis: 12

Resultado esperado: Espaço não comporta o evento
```

## RF04 — Desconto para eventos longos

Eventos com 6 horas ou mais de duração recebem R$ 100 de desconto. Abaixo disso, não há desconto.

Para o cenário principal:

```
número de horas de evento: 7

Situação esperada: Desconto de evento longo aplicado
Valor esperado: R$ 100
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
1750 - 100 = 1650
```

## RF06 — Verificação do pagamento

Quando o valor pago for maior ou igual ao valor final:

```
Orçamento quitado
```

Caso contrário:

```
Orçamento com saldo pendente
```

Para o cenário principal:

```
Valor final: R$ 1650
Valor pago: R$ 1000

Resultado esperado: Orçamento com saldo pendente
```

## RF07 — Cálculo do saldo devedor

Quando o pagamento for insuficiente:

```
saldo devedor = valor final - valor pago
```

Quando o pagamento for suficiente, saldo devedor deve ser `R$ 0`.

Para o cenário principal:

```
saldo devedor esperado: R$ 650
```

## RF08 — Situação do orçamento

Usando `if`/`else` (pode ser um dentro do outro):

- Se mesas disponíveis no espaço estiver ok **e** o pagamento estiver aprovado: `"Orçamento confirmado"`
- Se mesas disponíveis no espaço estiver ok, mas o pagamento **não** estiver aprovado: `"Orçamento confirmado com saldo pendente"`
- Se mesas disponíveis no espaço **não** estiver ok: `"Orçamento não pode ser confirmado: espaço não comporta o evento"`

Para o cenário principal:

```
Orçamento não pode ser confirmado: espaço não comporta o evento
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se o evento tivesse menos de 6 horas: o desconto não seria aplicado..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    contratante,
    pacote,
    valorUnidade,
    periodo,
    quantidadeReservada,
    mesasDisponiveis,
    valorPago,
    valorBase,
    capacidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusOrcamento,
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
