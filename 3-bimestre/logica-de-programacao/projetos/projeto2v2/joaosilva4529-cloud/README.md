# 🚀 PROJETO 2 (v2) — SISTEMA DE ORÇAMENTO DE BUFFET DE FESTAS

# 🎯 PROBLEMA

Você desenvolve sistemas para o Buffet Doce Momento.

O buffet quer verificar se o salão comporta o evento, aplicar desconto para festas de maior duração e conferir o sinal pago.

# 📋 PROJETO

## RF01 — Registro do orçamento

O sistema deve representar um orçamento contendo:

- nome do contratante;
- pacote de festa;
- valor por hora de festa;
- número de horas de festa;
- quantidade de mesas necessárias;
- mesas disponíveis no salão;
- valor pago (sinal).

Para os testes, será utilizado inicialmente:

```
Contratante: Marcos Teixeira
Pacote: Pacote Prata
Valor por hora: R$ 200
Horas de festa: 4
Mesas necessárias: 10
Mesas disponíveis: 15
Valor pago: R$ 800
```

## RF02 — Cálculo do valor base

```
valor base = valor por hora de festa × número de horas de festa
```

Para o cenário principal:

```
200 × 4 = 800
```

## RF03 — Verificação das mesas disponíveis no salão

O sistema deve verificar, **usando `if`/`else`**, se quantidade de mesas necessárias cabe dentro das mesas disponíveis no salão.

Quando couber, o resultado deverá ser:

```
Salão comporta o evento
```

Caso contrário:

```
Salão não comporta o evento
```

Para o cenário principal:

```
Mesas necessárias: 10
Mesas disponíveis: 15

Resultado esperado: Salão comporta o evento
```

## RF04 — Desconto para festas longas

Festas com 6 horas ou mais de duração recebem R$ 100 de desconto. Abaixo disso, não há desconto.

Para o cenário principal:

```
número de horas de festa: 4

Situação esperada: Sem desconto
Valor esperado: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = valor base - valor do desconto
```

Para o cenário principal:

```
800 - 0 = 800
```

## RF06 — Verificação do pagamento

Quando o valor pago for maior ou igual ao valor final:

```
Orçamento quitado
```

Caso contrário:

```
Orçamento com saldo pendente
```

Para o cenário principal:

```
Valor final: R$ 800
Valor pago: R$ 800

Resultado esperado: Orçamento quitado
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

## RF08 — Situação do orçamento

Usando `if`/`else` (pode ser um dentro do outro):

- Se mesas disponíveis no salão estiver ok **e** o pagamento estiver aprovado: `"Orçamento confirmado"`
- Se mesas disponíveis no salão estiver ok, mas o pagamento **não** estiver aprovado: `"Orçamento confirmado com saldo pendente"`
- Se mesas disponíveis no salão **não** estiver ok: `"Orçamento não pode ser confirmado: salão não comporta o evento"`

Para o cenário principal:

```
Orçamento confirmado
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se a festa tivesse menos de 6 horas: o desconto não seria aplicado..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    contratante,
    pacote,
    valorUnidade,
    periodo,
    quantidadeReservada,
    mesasDisponiveis,
    valorPago,
    valorBase,
    capacidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusOrcamento,
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
