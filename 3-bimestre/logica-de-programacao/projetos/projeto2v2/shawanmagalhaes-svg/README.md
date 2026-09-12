# 🚀 PROJETO 2 (v2) — SISTEMA DE CONTROLE DE LOCAÇÃO DE JOGOS E FILMES

# 🎯 PROBLEMA

Você desenvolve sistemas para a Locadora RetroPlay, especializada em jogos e filmes.

A locadora quer verificar se o item foi devolvido dentro do prazo, calcular a multa por atraso e conferir se o pagamento foi suficiente.

# 📋 PROJETO

## RF01 — Registro da locação

O sistema deve representar uma locação contendo:

- nome do cliente;
- item locado;
- taxa de serviço da locação;
- prazo de devolução em dias;
- dias que o cliente ficou com o item;
- valor da multa por dia de atraso;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Cliente: Marina Teixeira
Item: Jogo de Videogame Aventura Final
Taxa de serviço: R$ 0
Prazo (dias): 14
Dias com o item: 20
Multa por dia: R$ 3
Valor pago: R$ 15
```

## RF02 — Verificação do prazo de devolução

O sistema deve verificar, **usando `if`/`else`**, se dias que o cliente ficou com o item está dentro do prazo de devolução.

Quando estiver dentro do prazo, o resultado deverá ser:

```
Devolvido dentro do prazo
```

Caso contrário:

```
Devolvido com atraso
```

Para o cenário principal:

```
Dias com o item: 20
Prazo (dias): 14

Resultado esperado: Devolvido com atraso
```

## RF03 — Cálculo dos dias de atraso

Quando estiver fora do prazo:

```
dias de atraso = dias que o cliente ficou com o item - prazo de devolução em dias
```

Quando estiver dentro do prazo, os dias de atraso devem ser `0`.

Para o cenário principal:

```
Dias de atraso esperados: 6
```

## RF04 — Cálculo da multa

```
multa = dias de atraso × valor da multa por dia de atraso
```

Para o cenário principal:

```
6 × 3 = 18

Multa esperada: R$ 18
```

## RF05 — Cálculo do valor final

```
valor final = taxa de serviço da locação + multa
```

Para o cenário principal:

```
0 + 18 = 18
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
Valor final: R$ 18
Valor pago: R$ 15

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

## RF08 — Situação da locação

Usando `if`/`else` (pode ser um dentro do outro):

- Se estiver dentro do prazo: `"Locação regularizada"`
- Se estiver fora do prazo e o pagamento (com multa) estiver aprovado: `"Locação regularizada com multa paga"`
- Se estiver fora do prazo e o pagamento não for suficiente: `"Locação pendente: multa não paga integralmente"`

Para o cenário principal:

```
Locação pendente: multa não paga integralmente
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se o item fosse devolvido dentro do prazo: não haveria multa..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    item,
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
    statusLocacao,
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
