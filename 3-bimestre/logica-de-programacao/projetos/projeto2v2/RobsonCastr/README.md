# 🚀 PROJETO 2 (v2) — SISTEMA DE MATRÍCULA EM ESCOLA DE NATAÇÃO

# 🎯 PROBLEMA

Você desenvolve sistemas para a Escola de Natação Golfinho Azul.

A escola quer verificar se o aluno atingiu a idade mínima para a turma avançada, aplicar desconto para quem tem convênio com academias parceiras e conferir o pagamento da matrícula.

# 📋 PROJETO

## RF01 — Registro da matrícula

O sistema deve representar uma matrícula contendo:

- nome do aluno;
- turma;
- valor da mensalidade;
- taxa de material;
- idade mínima de 12 anos para a turma avançada;
- possui convênio com academia parceira (1 para sim, 0 para não);
- valor pago.

Para os testes, será utilizado inicialmente:

```
Aluno: Enzo Ribeiro
Turma: Turma Avançada
Mensalidade: R$ 300
Taxa de material: R$ 50
Idade do aluno: 9
Possui convênio (sim=1): 0
Valor pago: R$ 350
```

## RF02 — Cálculo do valor base

```
valor base = valor da mensalidade + taxa de material
```

Para o cenário principal:

```
300 + 50 = 350
```

## RF03 — Verificação da idade mínima de 12 anos para a turma avançada

O sistema deve verificar, **usando `if`/`else` e comparadores**, se a idade do aluno é maior ou igual a 12 anos.

Quando a condição for atendida, o resultado deverá ser:

```
Idade permitida para a turma avançada
```

Caso contrário:

```
Idade não permitida para a turma avançada
```

Para o cenário principal:

```
Idade do aluno: 9

Resultado esperado: Idade não permitida para a turma avançada
```

## RF04 — Desconto para convênio

Alunos com convênio (valor igual a 1) recebem R$ 35 de desconto na mensalidade. Caso contrário, não há desconto.

Para o cenário principal:

```
Possui convênio (sim=1): 0

Situação esperada: Sem desconto
Valor do desconto esperado: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
350 - 0 = 350
```

## RF06 — Verificação do pagamento

Quando o valor pago for maior ou igual ao valor final:

```
Matrícula quitada
```

Caso contrário:

```
Matrícula com saldo pendente
```

Para o cenário principal:

```
Valor final: R$ 350
Valor pago: R$ 350

Resultado esperado: Matrícula quitada
```

## RF07 — Cálculo do troco

Quando o pagamento for aprovado:

```
troco = valor pago - valor final
```

Quando o pagamento for insuficiente, o troco deve ser `R$ 0`.

Para o cenário principal:

```
Troco esperado: R$ 0
```

## RF08 — Situação da matrícula

Usando `if`/`else` (pode ser um dentro do outro):

- Se idade mínima de 12 anos para a turma avançada for atendida **e** o pagamento estiver aprovado: `"Matrícula confirmada"`
- Se idade mínima de 12 anos para a turma avançada for atendida, mas o pagamento **não** estiver aprovado: `"Matrícula confirmada com saldo pendente"`
- Se idade mínima de 12 anos para a turma avançada **não** for atendida: `"Matrícula não pode ser confirmada: idade não permitida para a turma avançada"`

Para o cenário principal:

```
Matrícula não pode ser confirmada: idade não permitida para a turma avançada
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se o aluno tivesse menos de 12 anos..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    aluno,
    turma,
    valorMensalidade,
    taxaMatricula,
    idadeAluno,
    possuiConvenio,
    valorPago,
    valorBase,
    idadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusMatricula,
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
