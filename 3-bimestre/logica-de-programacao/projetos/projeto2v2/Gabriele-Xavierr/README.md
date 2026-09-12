# 🚀 PROJETO 2 (v2) — SISTEMA DE VENDA DE INGRESSOS DE TEATRO

# 🎯 PROBLEMA

Você desenvolve sistemas para o Teatro Municipal.

O teatro quer verificar assentos disponíveis, cobrar uma taxa de conveniência para compras pequenas e conferir o pagamento.

# 📋 PROJETO

## RF01 — Registro da compra de ingressos

O sistema deve representar uma compra de ingressos contendo:

- nome do espectador;
- nome da peça em cartaz;
- preço do ingresso;
- quantidade de ingressos;
- assentos disponíveis;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Espectador: Fernanda Melo
Peça: Um Sonho de Verão
Preço do ingresso: R$ 20
Quantidade de ingressos: 6
Assentos disponíveis: 4
Valor pago: R$ 150
```

## RF02 — Cálculo do subtotal

O sistema deve calcular:

```
subtotal = preço do ingresso × quantidade de ingressos
```

Para o cenário principal:

```
20 × 6 = 120
```

## RF03 — Verificação dos assentos disponíveis

O sistema deve verificar, **usando `if`/`else`**, se quantidade de ingressos está dentro dos assentos disponíveis.

Quando estiver dentro do limite, o resultado deverá ser:

```
Assentos disponíveis
```

Caso contrário:

```
Assentos insuficientes
```

Para o cenário principal:

```
Quantidade de ingressos: 6
Assentos disponíveis: 4

Resultado esperado: Assentos insuficientes
```

## RF04 — Taxa de conveniência

Compras com subtotal abaixo de R$ 80 pagam uma taxa de conveniência de R$ 10. A partir de R$ 80, não há taxa.

Utilizando um comparador, o sistema deve calcular:

```
Sem taxa de conveniência
```

ou:

```
Taxa de conveniência: R$ 10
```

Para o cenário principal:

```
subtotal: R$ 120

Situação esperada: Sem taxa de conveniência
Valor esperado: R$ 0
```

## RF05 — Cálculo do valor final

```
valor final = subtotal + valor da taxa
```

Para o cenário principal:

```
120 + 0 = 120
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
valor final (R$): 120
Valor pago: R$ 150

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
troco esperado: R$ 30
```

## RF08 — Situação da compra

O sistema deve decidir a situação final, usando `if`/`else` (pode ser um `if` dentro do outro):

- Se assentos disponíveis estiver ok **e** o pagamento estiver aprovado: `"Compra confirmada"`
- Se assentos disponíveis estiver ok, mas o pagamento **não** estiver aprovado: `"Compra pendente de pagamento"`
- Se assentos disponíveis **não** estiver ok (independente do pagamento): `"Compra não pode ser confirmada: assentos insuficientes"`

Para o cenário principal, o resultado esperado é:

```
Compra não pode ser confirmada: assentos insuficientes
```

## RF09 — Resumo

O sistema deve gerar, utilizando **template string**, um texto com as principais informações.

O formato visual fica a critério do desenvolvedor.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Depois de terminar o cenário principal, tente pensar no que aconteceria se o subtotal fosse maior ou igual a R$ 80: a taxa de conveniência deixaria de ser cobrada..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    espectador,
    peca,
    preco,
    quantidade,
    assentosDisponiveis,
    valorPago,
    subtotal,
    assentoStatus,
    taxaStatus,
    valorTaxa,
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
