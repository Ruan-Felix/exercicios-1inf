# 🚀 PROJETO 2 (v2) — SISTEMA DE VENDA EM LOJA DE PRODUTOS NATURAIS

# 🎯 PROBLEMA

Você desenvolve sistemas para a Vida Natural, uma loja de produtos naturais e suplementos.

A loja quer conferir o estoque, aplicar desconto para compras acima de um valor mínimo e conferir se o pagamento cobre o valor da compra.

# 📋 PROJETO

## RF01 — Registro da venda

O sistema deve representar uma venda contendo:

- nome do cliente;
- nome do produto natural;
- preço;
- quantidade solicitada;
- estoque disponível;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Cliente: Otávio Nunes
Produto: Vitamina C Natural
Preço: R$ 8
Quantidade: 5
Estoque: 15
Valor pago: R$ 20
```

## RF02 — Cálculo do subtotal

O sistema deve calcular:

```
subtotal = preço × quantidade solicitada
```

Para o cenário principal:

```
8 × 5 = 40
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
Quantidade: 5
Estoque: 15

Resultado esperado: Estoque suficiente
```

## RF04 — Desconto por valor mínimo

A loja possui uma promoção: compras com subtotal maior ou igual a R$ 100 recebem R$ 20 de desconto. Abaixo disso, não há desconto.

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
subtotal: R$ 40

Situação esperada: Sem desconto
Valor esperado: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = subtotal - valor do desconto
```

Para o cenário principal:

```
40 - 0 = 40
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
valor final (R$): 40
Valor pago: R$ 20

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

Depois de terminar o cenário principal, tente pensar no que aconteceria se o subtotal ficasse abaixo de R$ 100: o desconto deixaria de ser aplicado..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    produtoNatural,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoStatus,
    valorDesconto,
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
