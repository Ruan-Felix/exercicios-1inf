# 🚀 PROJETO 2 (v2) — SISTEMA DE CONTROLE DE ORDEM DE SERVIÇO DE OFICINA

# 🎯 PROBLEMA

Você desenvolve sistemas para a Oficina Motor Forte.

A oficina quer verificar se o veículo foi retirado dentro do prazo combinado, calcular uma taxa de armazenagem por dia de atraso e conferir o pagamento do serviço.

# 📋 PROJETO

## RF01 — Registro da ordem de serviço

O sistema deve representar uma ordem de serviço contendo:

- nome do cliente;
- veículo;
- valor do serviço;
- prazo combinado em dias;
- dias até a retirada do veículo;
- valor da taxa de armazenagem por dia;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Cliente: Rogério Alves
Veículo: Fiat Argo
Valor do serviço: R$ 450
Prazo (dias): 3
Dias até a retirada: 2
Taxa de armazenagem por dia: R$ 20
Valor pago: R$ 450
```

## RF02 — Verificação do prazo combinado

O sistema deve verificar, **usando `if`/`else`**, se dias até a retirada do veículo está dentro do prazo combinado.

Quando estiver dentro do prazo, o resultado deverá ser:

```
Retirado dentro do prazo
```

Caso contrário:

```
Retirado com atraso
```

Para o cenário principal:

```
Dias até a retirada: 2
Prazo (dias): 3

Resultado esperado: Retirado dentro do prazo
```

## RF03 — Cálculo dos dias de atraso

Quando estiver fora do prazo:

```
dias de atraso = dias até a retirada do veículo - prazo combinado em dias
```

Quando estiver dentro do prazo, os dias de atraso devem ser `0`.

Para o cenário principal:

```
Dias de atraso esperados: 0
```

## RF04 — Cálculo da multa

```
multa = dias de atraso × valor da taxa de armazenagem por dia
```

Para o cenário principal:

```
0 × 20 = 0

Multa esperada: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = valor do serviço + multa
```

Para o cenário principal:

```
450 + 0 = 450
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
Valor final: R$ 450
Valor pago: R$ 450

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

## RF08 — Situação da ordem de serviço

Usando `if`/`else` (pode ser um dentro do outro):

- Se estiver dentro do prazo: `"Ordem de serviço encerrada"`
- Se estiver fora do prazo e o pagamento (com multa) estiver aprovado: `"Ordem de serviço encerrada com taxa de armazenagem paga"`
- Se estiver fora do prazo e o pagamento não for suficiente: `"Ordem de serviço pendente: pagamento não cobre a taxa de armazenagem"`

Para o cenário principal:

```
Ordem de serviço encerrada
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se o veículo fosse retirado dentro do prazo combinado: não haveria taxa de armazenagem..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    veiculo,
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
    statusOrdemServico,
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
