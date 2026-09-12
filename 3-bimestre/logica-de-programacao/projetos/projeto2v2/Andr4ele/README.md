# 🚀 PROJETO 2 (v2) — SISTEMA DE VENDA DE PERIFÉRICOS GAMER

# 🎯 PROBLEMA

Você desenvolve sistemas para a GameTech Periféricos, uma loja especializada em periféricos para jogadores.

A loja quer conferir o estoque antes de fechar pedidos grandes e garantir frete grátis para compras acima de um valor mínimo, além de conferir o pagamento.

# 📋 PROJETO

## RF01 — Registro da compra

O sistema deve representar uma compra contendo:

- nome do cliente;
- nome do periférico;
- preço;
- quantidade solicitada;
- estoque disponível;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Cliente: Eduardo Lima
Periférico: Placa de Vídeo Gamer
Preço: R$ 1200
Quantidade: 5
Estoque: 3
Valor pago: R$ 7000
```

## RF02 — Cálculo do subtotal

O sistema deve calcular:

```
subtotal = preço × quantidade solicitada
```

Para o cenário principal:

```
1200 × 5 = 6000
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
Estoque: 3

Resultado esperado: Estoque insuficiente
```

## RF04 — Frete grátis

A loja possui uma regra comercial: pedidos com subtotal maior ou igual a R$ 1.000 têm direito a frete grátis. Pedidos abaixo desse valor pagam R$ 30 de frete.

Utilizando um comparador, o sistema deve calcular:

```
Frete grátis
```

ou:

```
Frete: R$ 30
```

Para o cenário principal:

```
subtotal: R$ 6000

Situação esperada: Frete grátis
Valor esperado: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = subtotal + valor do frete
```

Para o cenário principal:

```
6000 + 0 = 6000
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
valor final (R$): 6000
Valor pago: R$ 7000

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
troco esperado: R$ 1000
```

## RF08 — Situação da compra

O sistema deve decidir a situação final, usando `if`/`else` (pode ser um `if` dentro do outro):

- Se estoque disponível estiver ok **e** o pagamento estiver aprovado: `"Compra confirmada"`
- Se estoque disponível estiver ok, mas o pagamento **não** estiver aprovado: `"Compra pendente de pagamento"`
- Se estoque disponível **não** estiver ok (independente do pagamento): `"Compra não pode ser confirmada por falta de estoque"`

Para o cenário principal, o resultado esperado é:

```
Compra não pode ser confirmada por falta de estoque
```

## RF09 — Resumo

O sistema deve gerar, utilizando **template string**, um texto com as principais informações.

O formato visual fica a critério do desenvolvedor.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Depois de terminar o cenário principal, tente pensar no que aconteceria se o subtotal ficasse abaixo de R$ 1.000: o frete deixaria de ser grátis..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    freteStatus,
    valorFrete,
    valorFinal,
    pagamentoStatus,
    troco,
    statusCompra,
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
