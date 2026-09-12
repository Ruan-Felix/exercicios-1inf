# 🚀 PROJETO 2 (v2) — SISTEMA DE VERIFICAÇÃO DE COMPRA ONLINE

# 🎯 PROBLEMA

Você continua fazendo parte da equipe de desenvolvimento que presta serviços para lojas de informática.

Na Sprint anterior, o time entregou um sistema que calculava o valor de um pedido. Agora, o setor **Comercial** pediu uma evolução: antes de confirmar uma compra, o sistema precisa **decidir** algumas coisas automaticamente, em vez de apenas calcular valores.

Durante a reunião de **Sprint Planning**, o responsável pelo setor Comercial explicou:

> "Precisamos que o sistema verifique se há estoque, decida se a compra tem direito a frete grátis, confira se o cliente pagou o suficiente e só então informe se a compra pode ser confirmada."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro da compra

O sistema deve representar uma compra contendo:

- nome do cliente;
- nome do produto;
- preço do produto;
- quantidade solicitada;
- quantidade disponível em estoque;
- valor pago pelo cliente.

Para os testes, será utilizado inicialmente:

```
Cliente: Rafael Souza
Produto: Monitor 24 polegadas
Preço: R$ 800
Quantidade: 2
Estoque: 10
Valor pago: R$ 2.000
```

## RF02 — Cálculo do subtotal

O sistema deve calcular o valor total dos produtos considerando o preço unitário e a quantidade solicitada.

```
subtotal = preço × quantidade
```

Para o cenário principal:

```
800 × 2 = 1600

Subtotal esperado: R$ 1600
```

## RF03 — Verificação do estoque

O sistema deve verificar, **usando `if`/`else`**, se a quantidade solicitada está disponível no estoque.

Quando a quantidade solicitada for menor ou igual ao estoque disponível, o resultado deverá ser:

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
Estoque: 10

Resultado esperado: Estoque suficiente
```

## RF04 — Frete grátis

A empresa possui uma regra comercial:

> Pedidos com subtotal maior ou igual a R$ 1.000 têm direito a frete grátis. Pedidos abaixo desse valor pagam R$ 30 de frete.
>

Utilizando um comparador (`>=`), o sistema deve calcular o valor do frete e informar a situação do frete:

```
Frete grátis
```

ou:

```
Frete: R$ 30
```

Para o cenário principal:

```
Subtotal: R$ 1600

Situação esperada: Frete grátis
Valor do frete esperado: R$ 0
```

## RF05 — Cálculo do valor final

O sistema deve somar o frete ao subtotal:

```
valor final = subtotal + valor do frete
```

Para o cenário principal:

```
1600 + 0 = 1600
```

## RF06 — Verificação do pagamento

O sistema deve verificar, usando comparadores, se o valor pago pelo cliente é suficiente para quitar a compra.

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
Valor final: R$ 1600
Valor pago: R$ 2000

Resultado esperado: Pagamento aprovado
```

## RF07 — Cálculo do troco

Quando o pagamento for aprovado, o sistema deve calcular o troco:

```
troco = valor pago - valor final
```

Para o cenário principal:

```
2000 - 1600 = 400
```

Quando o pagamento for insuficiente, o troco deve ser:

```
R$ 0
```

## RF08 — Situação da compra

O sistema deve decidir se a compra pode ser confirmada.

Quando houver **estoque suficiente e** o pagamento estiver **aprovado**, o resultado deverá ser:

```
Compra confirmada
```

Em qualquer outro caso, o resultado deverá ser:

```
Compra não pode ser confirmada
```

Para o cenário principal, o resultado esperado é:

```
Compra confirmada
```

## RF09 — Resumo da compra

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo as principais informações da compra:

- cliente;
- produto;
- preço;
- quantidade;
- subtotal;
- situação do frete e valor do frete;
- valor final;
- situação do pagamento;
- troco;
- situação da compra.

O formato visual da apresentação fica a critério do desenvolvedor.

# 🧪 OUTROS CENÁRIOS PARA VOCÊ TESTAR (não fazem parte dos testes automáticos)

Depois de terminar o cenário principal, tente rodar seu programa mentalmente (ou trocando os valores) para conferir se ele se comporta corretamente nestes casos:

## Cenário — Sem frete grátis

```
Preço: R$ 100 | Quantidade: 3 | Estoque: 20 | Valor pago: R$ 400
```

```
Subtotal: R$ 300 → Frete: R$ 30 → Valor final: R$ 330
Pagamento aprovado, troco: R$ 70
```

## Cenário — Estoque insuficiente

```
Preço: R$ 900 | Quantidade: 5 | Estoque: 3 | Valor pago: R$ 5000
```

```
Estoque insuficiente → Compra não pode ser confirmada
```

## Cenário — Pagamento insuficiente

```
Preço: R$ 250 | Quantidade: 2 | Estoque: 10 | Valor pago: R$ 300
```

```
Subtotal: R$ 500 → Frete: R$ 30 → Valor final: R$ 530
Pagamento insuficiente, troco: R$ 0 → Compra não pode ser confirmada
```

Crie o arquivo `index.js` que deverá conter a solução desenvolvida pelo aluno, utilizando os dados do cenário principal (RF01).

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
