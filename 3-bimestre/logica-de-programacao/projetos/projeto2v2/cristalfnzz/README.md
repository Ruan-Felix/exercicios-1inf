# 🚀 PROJETO 2 (v2) — SISTEMA DE ABASTECIMENTO EM POSTO DE COMBUSTÍVEL

# 🎯 PROBLEMA

Você desenvolve sistemas para o Posto Vale Verde.

O posto quer verificar se o volume solicitado cabe na capacidade do tanque informada, aplicar desconto para abastecimentos grandes e conferir o pagamento.

# 📋 PROJETO

## RF01 — Registro do abastecimento

O sistema deve representar um abastecimento contendo:

- nome do motorista;
- nome do combustível;
- preço por litro;
- litros solicitados;
- capacidade do tanque;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Motorista: Sérgio Batista
Combustível: Gasolina Aditivada
Preço por litro: R$ 6
Litros: 30
Capacidade do tanque: 50
Valor pago: R$ 200
```

## RF02 — Cálculo do subtotal

O sistema deve calcular:

```
subtotal = preço por litro × litros solicitados
```

Para o cenário principal:

```
6 × 30 = 180
```

## RF03 — Verificação da capacidade do tanque

O sistema deve verificar, **usando `if`/`else`**, se litros solicitados está dentro da capacidade do tanque.

Quando estiver dentro do limite, o resultado deverá ser:

```
Cabe no tanque
```

Caso contrário:

```
Excede a capacidade do tanque
```

Para o cenário principal:

```
Litros: 30
Capacidade do tanque: 50

Resultado esperado: Cabe no tanque
```

## RF04 — Desconto para abastecimento grande

Abastecimentos com subtotal maior ou igual a R$ 150 recebem R$ 15 de desconto. Abaixo disso, não há desconto.

Utilizando um comparador, o sistema deve calcular:

```
Desconto aplicado
```

ou:

```
Sem desconto
```

Para o cenário principal:

```
subtotal: R$ 180

Situação esperada: Desconto aplicado
Valor esperado: R$ 15
```

## RF05 — Cálculo do valor final

```
valor final = subtotal - valor do desconto
```

Para o cenário principal:

```
180 - 15 = 165
```

## RF06 — Verificação do pagamento

O sistema deve verificar, usando comparadores, se o valor pago é suficiente.

Quando o valor pago for maior ou igual ao valor final, o resultado deverá ser:

```
Pagamento aprovado
```

Caso contrário:

```
Pagamento insuficiente
```

Para o cenário principal:

```
valor final (R$): 165
Valor pago: R$ 200

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
troco esperado: R$ 35
```

## RF08 — Situação do abastecimento

O sistema deve decidir a situação final, usando `if`/`else` (pode ser um `if` dentro do outro):

- Se capacidade do tanque estiver ok **e** o pagamento estiver aprovado: `"Abastecimento confirmado"`
- Se capacidade do tanque estiver ok, mas o pagamento **não** estiver aprovado: `"Abastecimento pendente de pagamento"`
- Se capacidade do tanque **não** estiver ok (independente do pagamento): `"Abastecimento não pode ser confirmado: excede a capacidade do tanque"`

Para o cenário principal, o resultado esperado é:

```
Abastecimento confirmado
```

## RF09 — Resumo

O sistema deve gerar, utilizando **template string**, um texto com as principais informações.

O formato visual fica a critério do desenvolvedor.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Depois de terminar o cenário principal, tente pensar no que aconteceria se o subtotal ficasse abaixo de R$ 150: o desconto deixaria de ser aplicado..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    motorista,
    combustivel,
    preco,
    quantidade,
    capacidadeTanque,
    valorPago,
    subtotal,
    tanqueStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusAbastecimento,
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
