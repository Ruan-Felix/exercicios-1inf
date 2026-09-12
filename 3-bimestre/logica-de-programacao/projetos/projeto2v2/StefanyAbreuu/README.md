# 🚀 PROJETO 2 (v2) — SISTEMA DE CONTROLE DE ASSISTÊNCIA TÉCNICA DE CELULARES

# 🎯 PROBLEMA

Você desenvolve sistemas para a TechFix Assistência Técnica.

A assistência quer verificar se o celular foi retirado dentro do prazo combinado, calcular uma taxa de armazenagem por dia de atraso e conferir o pagamento do reparo.

# 📋 PROJETO

## RF01 — Registro da ordem de reparo

O sistema deve representar uma ordem de reparo contendo:

- nome do cliente;
- aparelho;
- valor do reparo;
- prazo combinado em dias;
- dias até a retirada do aparelho;
- valor da taxa de armazenagem por dia;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Cliente: Tatiane Nunes
Aparelho: Smartphone Galaxy
Valor do reparo: R$ 600
Prazo (dias): 3
Dias até a retirada: 7
Taxa de armazenagem por dia: R$ 25
Valor pago: R$ 650
```

## RF02 — Verificação do prazo combinado

O sistema deve verificar, **usando `if`/`else`**, se dias até a retirada do aparelho está dentro do prazo combinado.

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
Dias até a retirada: 7
Prazo (dias): 3

Resultado esperado: Retirado com atraso
```

## RF03 — Cálculo dos dias de atraso

Quando estiver fora do prazo:

```
dias de atraso = dias até a retirada do aparelho - prazo combinado em dias
```

Quando estiver dentro do prazo, os dias de atraso devem ser `0`.

Para o cenário principal:

```
Dias de atraso esperados: 4
```

## RF04 — Cálculo da multa

```
multa = dias de atraso × valor da taxa de armazenagem por dia
```

Para o cenário principal:

```
4 × 25 = 100

Multa esperada: R$ 100
```

## RF05 — Cálculo do valor final

```
valor final = valor do reparo + multa
```

Para o cenário principal:

```
600 + 100 = 700
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
Valor final: R$ 700
Valor pago: R$ 650

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

## RF08 — Situação da ordem de reparo

Usando `if`/`else` (pode ser um dentro do outro):

- Se estiver dentro do prazo: `"Ordem de reparo encerrada"`
- Se estiver fora do prazo e o pagamento (com multa) estiver aprovado: `"Ordem de reparo encerrada com taxa de armazenagem paga"`
- Se estiver fora do prazo e o pagamento não for suficiente: `"Ordem de reparo pendente: pagamento não cobre a taxa de armazenagem"`

Para o cenário principal:

```
Ordem de reparo pendente: pagamento não cobre a taxa de armazenagem
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se o aparelho fosse retirado dentro do prazo combinado: não haveria taxa de armazenagem..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    aparelho,
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
    statusOrdemReparo,
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
