# 🚀 PROJETO 2 (v2) — SISTEMA DE CONTROLE DE EMPRÉSTIMOS DE BIBLIOTECA

# 🎯 PROBLEMA

Você desenvolve sistemas para a Biblioteca Municipal Machado de Assis.

A biblioteca quer verificar se o livro foi devolvido dentro do prazo, calcular a multa por atraso e conferir se o pagamento foi suficiente.

# 📋 PROJETO

## RF01 — Registro do empréstimo

O sistema deve representar um empréstimo contendo:

- nome do leitor;
- livro;
- taxa de serviço do empréstimo;
- prazo de devolução em dias;
- dias que o leitor ficou com o livro;
- valor da multa por dia de atraso;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Leitor: Otávio Machado
Livro: Dom Casmurro
Taxa de serviço: R$ 0
Prazo (dias): 14
Dias com o livro: 10
Multa por dia: R$ 2
Valor pago: R$ 0
```

## RF02 — Verificação do prazo de devolução

O sistema deve verificar, **usando `if`/`else`**, se dias que o leitor ficou com o livro está dentro do prazo de devolução.

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
Dias com o livro: 10
Prazo (dias): 14

Resultado esperado: Devolvido dentro do prazo
```

## RF03 — Cálculo dos dias de atraso

Quando estiver fora do prazo:

```
dias de atraso = dias que o leitor ficou com o livro - prazo de devolução em dias
```

Quando estiver dentro do prazo, os dias de atraso devem ser `0`.

Para o cenário principal:

```
Dias de atraso esperados: 0
```

## RF04 — Cálculo da multa

```
multa = dias de atraso × valor da multa por dia de atraso
```

Para o cenário principal:

```
0 × 2 = 0

Multa esperada: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = taxa de serviço do empréstimo + multa
```

Para o cenário principal:

```
0 + 0 = 0
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
Valor final: R$ 0
Valor pago: R$ 0

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

## RF08 — Situação do empréstimo

Usando `if`/`else` (pode ser um dentro do outro):

- Se estiver dentro do prazo: `"Empréstimo regularizado"`
- Se estiver fora do prazo e o pagamento (com multa) estiver aprovado: `"Empréstimo regularizado com multa paga"`
- Se estiver fora do prazo e o pagamento não for suficiente: `"Empréstimo pendente: multa não paga integralmente"`

Para o cenário principal:

```
Empréstimo regularizado
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se o livro fosse devolvido dentro do prazo: não haveria multa..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    leitor,
    livro,
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
    statusEmprestimo,
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
