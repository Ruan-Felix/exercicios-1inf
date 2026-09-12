# 🚀 PROJETO 2 (v2) — SISTEMA DE VENDA EM LOJA DE ELETRODOMÉSTICOS

# 🎯 PROBLEMA

Você desenvolve sistemas para a loja CasaTech Eletrodomésticos.

A loja quer conferir o estoque, cobrar uma taxa de instalação para pedidos pequenos e verificar o pagamento.

# 📋 PROJETO

## RF01 — Registro da venda

O sistema deve representar uma venda contendo:

- nome do cliente;
- nome do eletrodoméstico;
- preço;
- quantidade solicitada;
- estoque disponível;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Cliente: Paula Cardoso
Eletrodoméstico: Micro-ondas Digital
Preço: R$ 1800
Quantidade: 1
Estoque: 5
Valor pago: R$ 2000
```

## RF02 — Cálculo do subtotal

O sistema deve calcular:

```
subtotal = preço × quantidade solicitada
```

Para o cenário principal:

```
1800 × 1 = 1800
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
Quantidade: 1
Estoque: 5

Resultado esperado: Estoque suficiente
```

## RF04 — Taxa de instalação

Pedidos com subtotal abaixo de R$ 300 pagam uma taxa de instalação de R$ 25. Pedidos a partir de R$ 300 têm instalação grátis.

Utilizando um comparador, o sistema deve calcular:

```
Instalação grátis
```

ou:

```
Taxa de instalação: R$ 25
```

Para o cenário principal:

```
subtotal: R$ 1800

Situação esperada: Instalação grátis
Valor esperado: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = subtotal + valor da instalação
```

Para o cenário principal:

```
1800 + 0 = 1800
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
valor final (R$): 1800
Valor pago: R$ 2000

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
troco esperado: R$ 200
```

## RF08 — Situação da venda

O sistema deve decidir a situação final, usando `if`/`else` (pode ser um `if` dentro do outro):

- Se estoque disponível estiver ok **e** o pagamento estiver aprovado: `"Venda confirmada"`
- Se estoque disponível estiver ok, mas o pagamento **não** estiver aprovado: `"Venda pendente de pagamento"`
- Se estoque disponível **não** estiver ok (independente do pagamento): `"Venda não pode ser confirmada por falta de estoque"`

Para o cenário principal, o resultado esperado é:

```
Venda confirmada
```

## RF09 — Resumo

O sistema deve gerar, utilizando **template string**, um texto com as principais informações.

O formato visual fica a critério do desenvolvedor.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Depois de terminar o cenário principal, tente pensar no que aconteceria se o subtotal fosse maior ou igual a R$ 300: a instalação passaria a ser grátis..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    eletrodomestico,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    instalacaoStatus,
    valorInstalacao,
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
