# 🚀 PROJETO 2 (v2) — SISTEMA DE CONTROLE DE ENCOMENDAS DE TRANSPORTADORA

# 🎯 PROBLEMA

Você desenvolve sistemas para a transportadora RotaCerta Encomendas Expressas.

A transportadora quer verificar se a encomenda foi entregue dentro do prazo prometido, calcular uma taxa adicional por hora de atraso e conferir o pagamento do frete.

# 📋 PROJETO

## RF01 — Registro da encomenda

O sistema deve representar uma encomenda contendo:

- nome do cliente;
- tipo de encomenda;
- valor do frete;
- prazo prometido em horas;
- tempo real de entrega em horas;
- valor da taxa adicional por hora de atraso;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Cliente: Vitor Hugo Souza
Encomenda: Encomenda Frágil
Valor do frete: R$ 90
Prazo (horas): 30
Tempo de entrega (horas): 50
Taxa adicional por hora: R$ 2
Valor pago: R$ 100
```

## RF02 — Verificação do prazo prometido

O sistema deve verificar, **usando `if`/`else`**, se tempo real de entrega em horas está dentro do prazo prometido.

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
Tempo de entrega (horas): 50
Prazo (horas): 30

Resultado esperado: Entregue com atraso
```

## RF03 — Cálculo dos dias de atraso

Quando estiver fora do prazo:

```
dias de atraso = tempo real de entrega em horas - prazo prometido em horas
```

Quando estiver dentro do prazo, os dias de atraso devem ser `0`.

Para o cenário principal:

```
Dias de atraso esperados: 20
```

## RF04 — Cálculo da multa

```
multa = dias de atraso × valor da taxa adicional por hora de atraso
```

Para o cenário principal:

```
20 × 2 = 40

Multa esperada: R$ 40
```

## RF05 — Cálculo do valor final

```
valor final = valor do frete + multa
```

Para o cenário principal:

```
90 + 40 = 130
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
Valor final: R$ 130
Valor pago: R$ 100

Resultado esperado: Pagamento insuficiente
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

## RF08 — Situação da encomenda

Usando `if`/`else` (pode ser um dentro do outro):

- Se estiver dentro do prazo: `"Encomenda concluída"`
- Se estiver fora do prazo e o pagamento (com multa) estiver aprovado: `"Encomenda concluída com taxa adicional paga"`
- Se estiver fora do prazo e o pagamento não for suficiente: `"Encomenda pendente: pagamento não cobre a taxa adicional"`

Para o cenário principal:

```
Encomenda pendente: pagamento não cobre a taxa adicional
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
    encomenda,
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
    statusEncomenda,
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
