# 🚀 PROJETO 2 (v2) — SISTEMA DE MATRÍCULA EM CURSO TÉCNICO

# 🎯 PROBLEMA

Você desenvolve sistemas para o Curso Técnico InovaTech.

A instituição quer verificar se o aluno atingiu a idade mínima exigida, aplicar desconto para pagamento antecipado do curso e conferir o pagamento da matrícula.

# 📋 PROJETO

## RF01 — Registro da matrícula

O sistema deve representar uma matrícula contendo:

- nome do aluno;
- curso técnico;
- valor do curso;
- taxa de material;
- idade mínima de 18 anos;
- pagamento antecipado (1 para sim, 0 para não);
- valor pago.

Para os testes, será utilizado inicialmente:

```
Aluno: Melissa Rocha
Curso: Curso Técnico em Redes
Valor do curso: R$ 700
Taxa de material: R$ 80
Idade: 17
Pagamento antecipado (sim=1): 0
Valor pago: R$ 780
```

## RF02 — Cálculo do valor base

```
valor base = valor do curso + taxa de material
```

Para o cenário principal:

```
700 + 80 = 780
```

## RF03 — Verificação da idade mínima de 18 anos

O sistema deve verificar, **usando `if`/`else` e comparadores**, se a idade do aluno é maior ou igual a 18 anos.

Quando a condição for atendida, o resultado deverá ser:

```
Idade permitida
```

Caso contrário:

```
Idade não permitida
```

Para o cenário principal:

```
Idade: 17

Resultado esperado: Idade não permitida
```

## RF04 — Desconto por pagamento antecipado

Alunos que pagam o curso antecipado (valor igual a 1) recebem R$ 70 de desconto. Caso contrário, não há desconto.

Para o cenário principal:

```
Pagamento antecipado (sim=1): 0

Situação esperada: Sem desconto
Valor do desconto esperado: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
780 - 0 = 780
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
Valor final: R$ 780
Valor pago: R$ 780

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

- Se idade mínima de 18 anos for atendida **e** o pagamento estiver aprovado: `"Matrícula confirmada"`
- Se idade mínima de 18 anos for atendida, mas o pagamento **não** estiver aprovado: `"Matrícula confirmada com saldo pendente"`
- Se idade mínima de 18 anos **não** for atendida: `"Matrícula não pode ser confirmada: idade não permitida"`

Para o cenário principal:

```
Matrícula não pode ser confirmada: idade não permitida
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se o aluno tivesse menos de 18 anos..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    aluno,
    curso,
    valorMensalidade,
    taxaMatricula,
    idade,
    pagamentoAntecipado,
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
