# 🚀 PROJETO 2 (v2) — SISTEMA DE CONTROLE DE ENTREGAS DE DELIVERY

# 🎯 PROBLEMA

Você desenvolve sistemas para o aplicativo de entregas RapidoFood.

O aplicativo quer verificar se a entrega foi feita dentro do prazo prometido, calcular uma taxa adicional por minuto de atraso e conferir o pagamento do pedido.

# 📋 PROJETO

## RF01 — Registro do pedido

O sistema deve representar um pedido contendo:

- nome do cliente;
- restaurante;
- valor do pedido;
- prazo prometido em minutos;
- tempo real de entrega em minutos;
- valor da taxa adicional por minuto de atraso;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Cliente: Larissa Gomes
Restaurante: Pizzaria Bella Napoli
Valor do pedido: R$ 60
Prazo (minutos): 40
Tempo de entrega (minutos): 35
Taxa adicional por minuto: R$ 1
Valor pago: R$ 60
```

## RF02 — Verificação do prazo prometido

O sistema deve verificar, **usando `if`/`else`**, se tempo real de entrega em minutos está dentro do prazo prometido.

Quando estiver dentro do prazo, o resultado deverá ser:

```
Entregue dentro do prazo
```

Caso contrário:

```
Entregue com atraso
```

Para o cenário principal:

```
Tempo de entrega (minutos): 35
Prazo (minutos): 40

Resultado esperado: Entregue dentro do prazo
```

## RF03 — Cálculo dos dias de atraso

Quando estiver fora do prazo:

```
dias de atraso = tempo real de entrega em minutos - prazo prometido em minutos
```

Quando estiver dentro do prazo, os dias de atraso devem ser `0`.

Para o cenário principal:

```
Dias de atraso esperados: 0
```

## RF04 — Cálculo da multa

```
multa = dias de atraso × valor da taxa adicional por minuto de atraso
```

Para o cenário principal:

```
0 × 1 = 0

Multa esperada: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = valor do pedido + multa
```

Para o cenário principal:

```
60 + 0 = 60
```

## RF06 — Verificação do pagamento

Quando o valor pago for maior ou igual ao valor final:

```
Pagamento aprovado
```

Caso contrário:

```
Pagamento insuficiente
```

Para o cenário principal:

```
Valor final: R$ 60
Valor pago: R$ 60

Resultado esperado: Pagamento aprovado
```

## RF07 — Cálculo do troco

Quando o pagamento for aprovado:

```
troco = valor pago - valor final
```

Quando o pagamento for insuficiente, troco deve ser `R$ 0`.

Para o cenário principal:

```
troco esperado: R$ 0
```

## RF08 — Situação do pedido

Usando `if`/`else` (pode ser um dentro do outro):

- Se estiver dentro do prazo: `"Pedido concluído"`
- Se estiver fora do prazo e o pagamento (com multa) estiver aprovado: `"Pedido concluído com taxa adicional paga"`
- Se estiver fora do prazo e o pagamento não for suficiente: `"Pedido pendente: pagamento não cobre a taxa adicional"`

Para o cenário principal:

```
Pedido concluído
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se a entrega fosse feita dentro do prazo prometido: não haveria taxa adicional..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    restaurante,
    valorBase,
    diasPermitidos,
    diasUtilizados,
    valorMultaPorDia,
    valorPago,
    prazoStatus,
    diasAtraso,
    multa,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
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
