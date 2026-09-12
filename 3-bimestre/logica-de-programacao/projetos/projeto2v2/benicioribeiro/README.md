# 🚀 PROJETO 2 (v2) — SISTEMA DE VENDA EM LOJA DE ROUPAS

# 📋 O QUE FAZER

Crie um programa que resolve o problema abaixo.

Dados:

```
Cliente: Diego Martins
Peça: Camiseta Branca
Preço: R$ 50
Quantidade: 3
Estoque: 10
Valor pago: R$ 200
```

# ✅ O QUE O PROGRAMA DEVE CALCULAR

1. `subtotal` = preço × quantidade solicitada
2. `estoqueDisponivel` = `"Estoque suficiente"` se quantidade solicitada ≤ estoque disponível, senão `"Estoque insuficiente"`
3. `cupomStatus` e `valorCupom`:
   - se subtotal ≥ 200 → `"Cupom aplicado"` e `40`
   - senão → `"Sem cupom"` e `0`
4. `valorFinal` = subtotal - valorCupom
5. `pagamentoStatus` = `"Pagamento aprovado"` se valor pago ≥ valorFinal, senão `"Pagamento insuficiente"`
6. `troco` = valorPago - valorFinal (se aprovado), senão `0`
7. `statusCompra`: `"Compra confirmada"` se estoque disponível estiver ok e o pagamento estiver aprovado; `"Compra pendente de pagamento"` se estoque disponível estiver ok mas o pagamento não; `"Compra não pode ser confirmada por falta de estoque"` se estoque disponível não estiver ok
8. `resumo`: uma template string com essas informações

# 🧩 EXEMPLO (nomes diferentes, só para mostrar o formato)

```jsx
const idade = 20

if (idade >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}
```

# 📤 Resultado esperado para estes dados

```
subtotal: 150
estoqueDisponivel: Estoque suficiente
cupomStatus: Sem cupom
valorCupom: 0
valorFinal: 150
pagamentoStatus: Pagamento aprovado
troco: 50
statusCompra: Compra confirmada
```

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    peca,
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
