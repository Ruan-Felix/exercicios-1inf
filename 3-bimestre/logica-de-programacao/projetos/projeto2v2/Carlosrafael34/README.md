# 🚀 PROJETO 2 (v2) — SISTEMA DE VENDA EM LOJA DE ELETRÔNICOS

# 🎯 PROBLEMA

Você desenvolve sistemas para a loja MegaEletro.

A loja quer conferir o estoque de aparelhos, cobrar uma taxa de entrega expressa para pedidos pequenos e verificar o pagamento.

# 📋 PROJETO

## RF01 — Registro da venda

O sistema deve representar uma venda contendo:

- nome do cliente;
- nome do aparelho;
- preço;
- quantidade solicitada;
- estoque disponível;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Cliente: Henrique Souza
Aparelho: Fone Bluetooth
Preço: R$ 90
Quantidade: 2
Estoque: 8
Valor pago: R$ 200
```

## RF02 — Cálculo do subtotal

O sistema deve calcular:

```
subtotal = preço × quantidade solicitada
```

Para o cenário principal:

```
90 × 2 = 180
```

## RF03 — Verificação do estoque disponível

O sistema deve verificar, **usando `if`/`else`**, se quantidade solicitada está dentro do estoque disponível.

Quando estiver dentro do limite, o resultado deverá ser:

```
Estoque suficiente
```

Caso contrário:

```
Estoque insuficiente
```

Para o cenário principal:

```
Quantidade: 2
Estoque: 8

Resultado esperado: Estoque suficiente
```

## RF04 — Taxa de entrega expressa

Pedidos com subtotal abaixo de R$ 300 pagam uma taxa de entrega expressa de R$ 25. Pedidos a partir de R$ 300 têm entrega grátis.

Utilizando um comparador, o sistema deve calcular:

```
Entrega grátis
```

ou:

```
Taxa de entrega: R$ 25
```

Para o cenário principal:

```
subtotal: R$ 180

Situação esperada: Taxa de entrega: R$ 25
Valor esperado: R$ 25
```

## RF05 — Cálculo do valor final

```
valor final = subtotal + valor da entrega
```

Para o cenário principal:

```
180 + 25 = 205
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
valor final (R$): 205
Valor pago: R$ 200

Resultado esperado: Pagamento insuficiente
```

## RF07 — Cálculo do troco

Quando o pagamento for aprovado:

```
troco = valor pago - valor final
```

Quando o pagamento for insuficiente, troco deve ser `R$ 0`.

Para o cenário principal:

```
troco esperado: R$ 0
```

## RF08 — Situação da venda

O sistema deve decidir a situação final, usando `if`/`else` (pode ser um `if` dentro do outro):

- Se estoque disponível estiver ok **e** o pagamento estiver aprovado: `"Venda confirmada"`
- Se estoque disponível estiver ok, mas o pagamento **não** estiver aprovado: `"Venda pendente de pagamento"`
- Se estoque disponível **não** estiver ok (independente do pagamento): `"Venda não pode ser confirmada por falta de estoque"`

Para o cenário principal, o resultado esperado é:

```
Venda pendente de pagamento
```

## RF09 — Resumo

O sistema deve gerar, utilizando **template string**, um texto com as principais informações.

O formato visual fica a critério do desenvolvedor.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Depois de terminar o cenário principal, tente pensar no que aconteceria se o subtotal fosse maior ou igual a R$ 300: a entrega passaria a ser grátis..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    aparelho,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    entregaStatus,
    valorEntrega,
    valorFinal,
    pagamentoStatus,
    troco,
    statusVenda,
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
