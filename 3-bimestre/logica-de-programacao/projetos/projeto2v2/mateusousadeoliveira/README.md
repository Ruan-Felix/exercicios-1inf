# 🚀 PROJETO 2 (v2) — SISTEMA DE MATRÍCULA E APROVAÇÃO ESCOLAR

# 🎯 PROBLEMA

Você desenvolve sistemas para o Colégio Novo Horizonte.

A secretaria quer verificar se o aluno atinge a frequência mínima exigida, aplicar desconto para quem tira nota alta no teste de nivelamento e conferir o pagamento da matrícula.

# 📋 PROJETO

## RF01 — Registro da matrícula

O sistema deve representar uma matrícula contendo:

- nome do aluno;
- turma;
- valor da mensalidade;
- taxa de matrícula;
- frequência mínima de 75%;
- nota do teste de nivelamento;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Aluno: Guilherme Nogueira
Turma: 9º Ano B
Mensalidade: R$ 500
Taxa de matrícula: R$ 100
Frequência (%): 90
Nota de nivelamento: 9
Valor pago: R$ 550
```

## RF02 — Cálculo do valor base

```
valor base = valor da mensalidade + taxa de matrícula
```

Para o cenário principal:

```
500 + 100 = 600
```

## RF03 — Verificação da frequência mínima de 75%

O sistema deve verificar, **usando `if`/`else` e comparadores**, se a frequência do aluno é maior ou igual a 75%.

Quando a condição for atendida, o resultado deverá ser:

```
Frequência regular
```

Caso contrário:

```
Frequência insuficiente
```

Para o cenário principal:

```
Frequência (%): 90

Resultado esperado: Frequência regular
```

## RF04 — Desconto por nota alta

Alunos com nota de nivelamento maior ou igual a 9 recebem R$ 50 de desconto na mensalidade. Abaixo disso, não há desconto.

Para o cenário principal:

```
Nota de nivelamento: 9

Situação esperada: Desconto por nota alta aplicado
Valor do desconto esperado: R$ 50
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
600 - 50 = 550
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
Valor final: R$ 550
Valor pago: R$ 550

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

- Se frequência mínima de 75% for atendida **e** o pagamento estiver aprovado: `"Matrícula confirmada"`
- Se frequência mínima de 75% for atendida, mas o pagamento **não** estiver aprovado: `"Matrícula confirmada com saldo pendente"`
- Se frequência mínima de 75% **não** for atendida: `"Matrícula não pode ser confirmada: frequência insuficiente"`

Para o cenário principal:

```
Matrícula confirmada
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se a frequência do aluno ficasse abaixo de 75%..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    aluno,
    turma,
    valorMensalidade,
    taxaMatricula,
    percentualFrequencia,
    notaNivelamento,
    valorPago,
    valorBase,
    frequenciaStatus,
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
