# 🚀 PROJETO 2 (v2) — SISTEMA DE AGENDAMENTO EM CLÍNICA ODONTOLÓGICA

# 🎯 PROBLEMA

Você desenvolve sistemas para a Clínica OdontoSorria.

A clínica quer verificar se o paciente atingiu a idade mínima para o tratamento, aplicar desconto para quem tem convênio e conferir o pagamento da consulta.

# 📋 PROJETO

## RF01 — Registro da consulta

O sistema deve representar uma consulta contendo:

- nome do paciente;
- tratamento;
- valor da consulta;
- taxa de material odontológico;
- idade mínima de 12 anos para o tratamento;
- possui convênio (1 para sim, 0 para não);
- valor pago.

Para os testes, será utilizado inicialmente:

```
Paciente: Beatriz Andrade
Tratamento: Limpeza Dental
Valor da consulta: R$ 150
Taxa de material: R$ 20
Idade do paciente: 25
Possui convênio (sim=1): 1
Valor pago: R$ 135
```

## RF02 — Cálculo do valor base

```
valor base = valor da consulta + taxa de material odontológico
```

Para o cenário principal:

```
150 + 20 = 170
```

## RF03 — Verificação da idade mínima de 12 anos para o tratamento

O sistema deve verificar, **usando `if`/`else` e comparadores**, se a idade do paciente é maior ou igual a 12 anos.

Quando a condição for atendida, o resultado deverá ser:

```
Idade permitida para o tratamento
```

Caso contrário:

```
Idade não permitida para o tratamento
```

Para o cenário principal:

```
Idade do paciente: 25

Resultado esperado: Idade permitida para o tratamento
```

## RF04 — Desconto para convênio

Pacientes com convênio (valor igual a 1) recebem R$ 35 de desconto na consulta. Caso contrário, não há desconto.

Para o cenário principal:

```
Possui convênio (sim=1): 1

Situação esperada: Desconto de convênio aplicado
Valor do desconto esperado: R$ 35
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
170 - 35 = 135
```

## RF06 — Verificação do pagamento

Quando o valor pago for maior ou igual ao valor final:

```
Consulta quitada
```

Caso contrário:

```
Consulta com saldo pendente
```

Para o cenário principal:

```
Valor final: R$ 135
Valor pago: R$ 135

Resultado esperado: Consulta quitada
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

## RF08 — Situação da consulta

Usando `if`/`else` (pode ser um dentro do outro):

- Se idade mínima de 12 anos para o tratamento for atendida **e** o pagamento estiver aprovado: `"Consulta confirmada"`
- Se idade mínima de 12 anos para o tratamento for atendida, mas o pagamento **não** estiver aprovado: `"Consulta confirmada com saldo pendente"`
- Se idade mínima de 12 anos para o tratamento **não** for atendida: `"Consulta não pode ser confirmada: idade não permitida para o tratamento"`

Para o cenário principal:

```
Consulta confirmada
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se o paciente tivesse menos de 12 anos..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    paciente,
    tratamento,
    valorMensalidade,
    taxaMatricula,
    idadePaciente,
    possuiConvenio,
    valorPago,
    valorBase,
    idadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusConsulta,
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
