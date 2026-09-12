# 🚀 PROJETO 2 (v2) — SISTEMA DE ENTREGA DE ÁGUA MINERAL

# 🎯 PROBLEMA

Você desenvolve sistemas para a distribuidora AquaPura.

A distribuidora quer verificar se o pedido cabe na capacidade do caminhão de entrega, aplicar desconto para pedidos grandes e conferir o pagamento.

# 📋 PROJETO

## RF01 — Registro do pedido

O sistema deve representar um pedido contendo:

- nome do cliente;
- nome do garrafão de água;
- preço por garrafão;
- garrafões solicitados;
- capacidade do caminhão de entrega;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Cliente: Renata Dias
Produto: Garrafão de Água Mineral 20L
Preço por garrafão: R$ 4
Garrafões: 45
Capacidade do caminhão: 40
Valor pago: R$ 200
```

## RF02 — Cálculo do subtotal

O sistema deve calcular:

```
subtotal = preço por garrafão × garrafões solicitados
```

Para o cenário principal:

```
4 × 45 = 180
```

## RF03 — Verificação da capacidade do caminhão de entrega

O sistema deve verificar, **usando `if`/`else`**, se garrafões solicitados está dentro da capacidade do caminhão de entrega.

Quando estiver dentro do limite, o resultado deverá ser:

```
Cabe no caminhão
```

Caso contrário:

```
Excede a capacidade do caminhão
```

Para o cenário principal:

```
Garrafões: 45
Capacidade do caminhão: 40

Resultado esperado: Excede a capacidade do caminhão
```

## RF04 — Desconto para pedido grande

Pedidos com subtotal maior ou igual a R$ 150 recebem R$ 15 de desconto. Abaixo disso, não há desconto.

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

## RF08 — Situação do pedido

O sistema deve decidir a situação final, usando `if`/`else` (pode ser um `if` dentro do outro):

- Se capacidade do caminhão de entrega estiver ok **e** o pagamento estiver aprovado: `"Pedido confirmado"`
- Se capacidade do caminhão de entrega estiver ok, mas o pagamento **não** estiver aprovado: `"Pedido pendente de pagamento"`
- Se capacidade do caminhão de entrega **não** estiver ok (independente do pagamento): `"Pedido não pode ser confirmado: excede a capacidade do caminhão"`

Para o cenário principal, o resultado esperado é:

```
Pedido não pode ser confirmado: excede a capacidade do caminhão
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
    cliente,
    produto,
    preco,
    quantidade,
    capacidadeCaminhao,
    valorPago,
    subtotal,
    capacidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
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
