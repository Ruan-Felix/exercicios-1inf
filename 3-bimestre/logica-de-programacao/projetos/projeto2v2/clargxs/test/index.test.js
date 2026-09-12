const {
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
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Paula Cardoso")
    expect(eletrodomestico).toBe("Micro-ondas Digital")
    expect(preco).toBe(1800)
    expect(quantidade).toBe(1)
    expect(estoque).toBe(5)
    expect(valorPago).toBe(2000)

})


test("Deve calcular subtotal corretamente", () => {

    expect(subtotal).toBe(1800)

})


test("Deve verificar corretamente estoque disponível", () => {

    expect(estoqueDisponivel).toBe("Estoque suficiente")

})


test("Deve aplicar corretamente a regra comercial (RF04)", () => {

    expect(instalacaoStatus).toBe("Instalação grátis")
    expect(valorInstalacao).toBe(0)

})


test("Deve calcular valor final corretamente", () => {

    expect(valorFinal).toBe(1800)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(200)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusVenda).toBe("Venda confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Paula Cardoso")
    expect(resumo).toContain("Micro-ondas Digital")
    expect(resumo).toContain("1800")
    expect(resumo).toContain("Instalação grátis")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("200")
    expect(resumo).toContain("Venda confirmada")

})
