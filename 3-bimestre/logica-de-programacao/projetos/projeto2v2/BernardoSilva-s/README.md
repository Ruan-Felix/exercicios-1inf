# 🚀 PROJETO 2 (v2) — SISTEMA DE VENDA EM SAPATARIA

# 🎯 PROBLEMA

Você desenvolve sistemas para a Sapataria Passo Certo.

A loja quer conferir o estoque de calçados, aplicar um cupom de desconto para compras acima de um valor mínimo e verificar o pagamento.

# 📋 PROJETO

## RF01 — Registro da compra

O sistema deve representar uma compra contendo:

- nome do cliente;
- nome do calçado;
- preço;
- quantidade solicitada;
- estoque disponível;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Cliente: Larissa Farias
Calçado: Tênis Esportivo
Preço: R$ 90
Quantidade: 4
Estoque: 2
Valor pago: R$ 500
```

## RF02 — Cálculo do subtotal

O sistema deve calcular:

```
subtotal = preço × quantidade solicitada
```

Para o cenário principal:

```
90 × 4 = 360
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
Quantidade: 4
Estoque: 2

Resultado esperado: Estoque insuficiente
```

## RF04 — Cupom de desconto

A loja aplica um cupom: compras com subtotal maior ou igual a R$ 200 recebem R$ 40 de desconto. Abaixo disso, não há desconto.

Utilizando um comparador, o sistema deve calcular:

```
Cupom aplicado
```

ou:

```
Sem cupom
```

Para o cenário principal:

```
subtotal: R$ 360

Situação esperada: Cupom aplicado
Valor esperado: R$ 40
```

## RF05 — Cálculo do valor final

```
valor final = subtotal - valor do cupom
```

Para o cenário principal:

```
360 - 40 = 320
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
valor final (R$): 320
Valor pago: R$ 500

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
troco esperado: R$ 180
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

Depois de terminar o cenário principal, tente pensar no que aconteceria se o subtotal ficasse abaixo de R$ 200: o cupom deixaria de valer..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    calcado,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    cupomStatus,
    valorCupom,
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
