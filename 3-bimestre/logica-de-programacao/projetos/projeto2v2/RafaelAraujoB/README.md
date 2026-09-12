# 🚀 PROJETO 2 (v2) — SISTEMA DE MATRÍCULA EM ESCOLA DE IDIOMAS

# 🎯 PROBLEMA

Você desenvolve sistemas para a Escola de Idiomas Global Talk.

A escola quer verificar se o aluno atingiu a nota mínima no teste de nivelamento, aplicar bolsa para quem tem irmão já matriculado e conferir o pagamento da matrícula.

# 📋 PROJETO

## RF01 — Registro da matrícula

O sistema deve representar uma matrícula contendo:

- nome do aluno;
- idioma;
- valor da mensalidade;
- taxa de material didático;
- nota mínima de 5 no teste de nivelamento;
- possui irmão já matriculado (1 para sim, 0 para não);
- valor pago.

Para os testes, será utilizado inicialmente:

```
Aluno: Caio Ferreira
Idioma: Inglês
Mensalidade: R$ 350
Material didático: R$ 60
Nota do teste: 8
Irmão matriculado (sim=1): 1
Valor pago: R$ 350
```

## RF02 — Cálculo do valor base

```
valor base = valor da mensalidade + taxa de material didático
```

Para o cenário principal:

```
350 + 60 = 410
```

## RF03 — Verificação da nota mínima de 5 no teste de nivelamento

O sistema deve verificar, **usando `if`/`else` e comparadores**, se a nota do teste de nivelamento é maior ou igual a 5.

Quando a condição for atendida, o resultado deverá ser:

```
Aprovado no nivelamento
```

Caso contrário:

```
Reprovado no nivelamento
```

Para o cenário principal:

```
Nota do teste: 8

Resultado esperado: Aprovado no nivelamento
```

## RF04 — Bolsa por irmão matriculado

Alunos com irmão já matriculado (valor igual a 1) recebem R$ 60 de bolsa de desconto na mensalidade. Caso contrário, não há bolsa.

Para o cenário principal:

```
Irmão matriculado (sim=1): 1

Situação esperada: Bolsa aplicada
Valor do desconto esperado: R$ 60
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
410 - 60 = 350
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

- Se nota mínima de 5 no teste de nivelamento for atendida **e** o pagamento estiver aprovado: `"Matrícula confirmada"`
- Se nota mínima de 5 no teste de nivelamento for atendida, mas o pagamento **não** estiver aprovado: `"Matrícula confirmada com saldo pendente"`
- Se nota mínima de 5 no teste de nivelamento **não** for atendida: `"Matrícula não pode ser confirmada: reprovado no nivelamento"`

Para o cenário principal:

```
Matrícula confirmada
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se a nota do teste ficasse abaixo de 5..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    aluno,
    idioma,
    valorMensalidade,
    taxaMatricula,
    notaTeste,
    possuiIrmaoMatriculado,
    valorPago,
    valorBase,
    nivelamentoStatus,
    bolsaStatus,
    valorBolsa,
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
