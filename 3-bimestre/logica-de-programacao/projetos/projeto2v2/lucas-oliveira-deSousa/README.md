# 🚀 PROJETO 2 (v2) — SISTEMA DE AGENDAMENTO DE BARBEARIA

# 🎯 PROBLEMA

Você desenvolve sistemas para a Barbearia Corte Fino.

A barbearia quer verificar barbeiros disponíveis no horário, aplicar desconto para pacotes de serviço mais longos e conferir o sinal pago pelo cliente.

# 📋 PROJETO

## RF01 — Registro do agendamento

O sistema deve representar um agendamento contendo:

- nome do cliente;
- serviço;
- valor por hora de serviço;
- duração do serviço em horas;
- quantidade de barbeiros necessários;
- barbeiros disponíveis no horário;
- valor pago (sinal).

Para os testes, será utilizado inicialmente:

```
Cliente: Diego Barbosa
Serviço: Corte e Barba Completo
Valor por hora: R$ 100
Duração (horas): 5
Barbeiros necessários: 3
Barbeiros disponíveis: 2
Valor pago: R$ 300
```

## RF02 — Cálculo do valor base

```
valor base = valor por hora de serviço × duração do serviço em horas
```

Para o cenário principal:

```
100 × 5 = 500
```

## RF03 — Verificação dos barbeiros disponíveis no horário

O sistema deve verificar, **usando `if`/`else`**, se quantidade de barbeiros necessários cabe dentro dos barbeiros disponíveis no horário.

Quando couber, o resultado deverá ser:

```
Horário disponível
```

Caso contrário:

```
Horário indisponível
```

Para o cenário principal:

```
Barbeiros necessários: 3
Barbeiros disponíveis: 2

Resultado esperado: Horário indisponível
```

## RF04 — Desconto para pacote longo

Serviços com 3 horas ou mais de duração recebem R$ 30 de desconto. Abaixo disso, não há desconto.

Para o cenário principal:

```
duração do serviço em horas: 5

Situação esperada: Desconto de pacote longo aplicado
Valor esperado: R$ 30
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
500 - 30 = 470
```

## RF06 — Verificação do pagamento

Quando o valor pago for maior ou igual ao valor final:

```
Agendamento quitado
```

Caso contrário:

```
Agendamento com saldo pendente
```

Para o cenário principal:

```
Valor final: R$ 470
Valor pago: R$ 300

Resultado esperado: Agendamento com saldo pendente
```

## RF07 — Cálculo do saldo devedor

Quando o pagamento for insuficiente:

```
saldo devedor = valor final - valor pago
```

Quando o pagamento for suficiente, saldo devedor deve ser `R$ 0`.

Para o cenário principal:

```
saldo devedor esperado: R$ 170
```

## RF08 — Situação do agendamento

Usando `if`/`else` (pode ser um dentro do outro):

- Se barbeiros disponíveis no horário estiver ok **e** o pagamento estiver aprovado: `"Agendamento confirmado"`
- Se barbeiros disponíveis no horário estiver ok, mas o pagamento **não** estiver aprovado: `"Agendamento confirmado com saldo pendente"`
- Se barbeiros disponíveis no horário **não** estiver ok: `"Agendamento não pode ser confirmado: horário indisponível"`

Para o cenário principal:

```
Agendamento não pode ser confirmado: horário indisponível
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se o serviço tivesse menos de 3 horas de duração: o desconto não seria aplicado..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    servico,
    valorUnidade,
    periodo,
    quantidadeReservada,
    barbeirosDisponiveis,
    valorPago,
    valorBase,
    disponibilidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusAgendamento,
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
