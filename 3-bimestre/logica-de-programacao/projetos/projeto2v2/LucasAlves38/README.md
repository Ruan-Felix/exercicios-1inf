# 🚀 PROJETO 2 (v2) — SISTEMA DE ALUGUEL DE CARROS

# 🎯 PROBLEMA

Você desenvolve sistemas para a Locadora RodaViva.

A locadora quer verificar a disponibilidade de veículos, aplicar desconto para aluguéis mais longos e conferir o sinal pago pelo cliente.

# 📋 PROJETO

## RF01 — Registro do aluguel

O sistema deve representar um aluguel contendo:

- nome do cliente;
- veículo;
- valor da diária;
- número de dias de aluguel;
- quantidade de veículos solicitados;
- veículos disponíveis;
- valor pago (sinal).

Para os testes, será utilizado inicialmente:

```
Cliente: Thiago Ramos
Veículo: Hatch Compacto
Valor da diária: R$ 120
Dias de aluguel: 4
Veículos solicitados: 1
Veículos disponíveis: 6
Valor pago: R$ 480
```

## RF02 — Cálculo do valor base

```
valor base = valor da diária × número de dias de aluguel
```

Para o cenário principal:

```
120 × 4 = 480
```

## RF03 — Verificação dos veículos disponíveis

O sistema deve verificar, **usando `if`/`else`**, se quantidade de veículos solicitados cabe dentro dos veículos disponíveis.

Quando couber, o resultado deverá ser:

```
Veículos disponíveis
```

Caso contrário:

```
Veículos indisponíveis
```

Para o cenário principal:

```
Veículos solicitados: 1
Veículos disponíveis: 6

Resultado esperado: Veículos disponíveis
```

## RF04 — Desconto para aluguel longo

Aluguéis com 10 dias ou mais recebem R$ 120 de desconto. Abaixo disso, não há desconto.

Para o cenário principal:

```
número de dias de aluguel: 4

Situação esperada: Sem desconto
Valor esperado: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
480 - 0 = 480
```

## RF06 — Verificação do pagamento

Quando o valor pago for maior ou igual ao valor final:

```
Aluguel quitado
```

Caso contrário:

```
Aluguel com saldo pendente
```

Para o cenário principal:

```
Valor final: R$ 480
Valor pago: R$ 480

Resultado esperado: Aluguel quitado
```

## RF07 — Cálculo do saldo devedor

Quando o pagamento for insuficiente:

```
saldo devedor = valor final - valor pago
```

Quando o pagamento for suficiente, saldo devedor deve ser `R$ 0`.

Para o cenário principal:

```
saldo devedor esperado: R$ 0
```

## RF08 — Situação do aluguel

Usando `if`/`else` (pode ser um dentro do outro):

- Se veículos disponíveis estiver ok **e** o pagamento estiver aprovado: `"Aluguel confirmado"`
- Se veículos disponíveis estiver ok, mas o pagamento **não** estiver aprovado: `"Aluguel confirmado com saldo pendente"`
- Se veículos disponíveis **não** estiver ok: `"Aluguel não pode ser confirmado: veículos indisponíveis"`

Para o cenário principal:

```
Aluguel confirmado
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se o aluguel tivesse menos de 10 dias: o desconto não seria aplicado..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    veiculo,
    valorUnidade,
    periodo,
    quantidadeReservada,
    veiculosDisponiveis,
    valorPago,
    valorBase,
    disponibilidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusAluguel,
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
