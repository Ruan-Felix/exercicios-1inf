# 🚀 PROJETO 2 (v2) — SISTEMA DE CONTROLE DE GUARDA-VOLUMES

# 🎯 PROBLEMA

Você desenvolve sistemas para o Guarda-Volumes do Shopping Praça Nova.

O guarda-volumes quer verificar se o item foi retirado dentro do tempo de tolerância, calcular uma multa por hora excedente e conferir o pagamento na retirada.

# 📋 PROJETO

## RF01 — Registro da permanência

O sistema deve representar uma permanência contendo:

- nome do cliente;
- volume guardado;
- valor fixo do período contratado;
- tempo de tolerância em horas;
- tempo total de permanência em horas;
- valor da multa por hora excedente;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Cliente: Gustavo Pires
Volume: Mala de Viagem
Valor do período: R$ 25
Tolerância (horas): 2
Permanência (horas): 6
Multa por hora: R$ 15
Valor pago: R$ 40
```

## RF02 — Verificação do tempo de tolerância

O sistema deve verificar, **usando `if`/`else`**, se tempo total de permanência em horas está dentro do tempo de tolerância.

Quando estiver dentro do prazo, o resultado deverá ser:

```
Dentro da tolerância
```

Caso contrário:

```
Excedeu a tolerância
```

Para o cenário principal:

```
Permanência (horas): 6
Tolerância (horas): 2

Resultado esperado: Excedeu a tolerância
```

## RF03 — Cálculo dos dias de atraso

Quando estiver fora do prazo:

```
dias de atraso = tempo total de permanência em horas - tempo de tolerância em horas
```

Quando estiver dentro do prazo, os dias de atraso devem ser `0`.

Para o cenário principal:

```
Dias de atraso esperados: 4
```

## RF04 — Cálculo da multa

```
multa = dias de atraso × valor da multa por hora excedente
```

Para o cenário principal:

```
4 × 15 = 60

Multa esperada: R$ 60
```

## RF05 — Cálculo do valor final

```
valor final = valor fixo do período contratado + multa
```

Para o cenário principal:

```
25 + 60 = 85
```

## RF06 — Verificação do pagamento

Quando o valor pago for maior ou igual ao valor final:

```
Pagamento aprovado
```

Caso contrário:

```
Pagamento insuficiente
```

Para o cenário principal:

```
Valor final: R$ 85
Valor pago: R$ 40

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

## RF08 — Situação da permanência

Usando `if`/`else` (pode ser um dentro do outro):

- Se estiver dentro do prazo: `"Retirada liberada"`
- Se estiver fora do prazo e o pagamento (com multa) estiver aprovado: `"Retirada liberada com multa paga"`
- Se estiver fora do prazo e o pagamento não for suficiente: `"Retirada bloqueada: pagamento não cobre a multa"`

Para o cenário principal:

```
Retirada bloqueada: pagamento não cobre a multa
```

## RF09 — Resumo

Gerar, utilizando **template string**, um texto com as principais informações.

# 🧪 OUTRO CENÁRIO PARA VOCÊ TESTAR (não faz parte dos testes automáticos)

Pense no que aconteceria se o volume ficasse dentro do tempo de tolerância: não haveria multa..

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    volume,
    valorBase,
    diasPermitidos,
    diasUtilizados,
    valorMultaPorDia,
    valorPago,
    prazoStatus,
    diasAtraso,
    multa,
    valorFinal,
    pagamentoStatus,
    troco,
    statusRetirada,
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
