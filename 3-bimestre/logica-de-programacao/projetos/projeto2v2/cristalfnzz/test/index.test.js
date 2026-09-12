const {
    motorista,
    combustivel,
    preco,
    quantidade,
    capacidadeTanque,
    valorPago,
    subtotal,
    tanqueStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusAbastecimento,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(motorista).toBe("Sérgio Batista")
    expect(combustivel).toBe("Gasolina Aditivada")
    expect(preco).toBe(6)
    expect(quantidade).toBe(30)
    expect(capacidadeTanque).toBe(50)
    expect(valorPago).toBe(200)

})


test("Deve calcular subtotal corretamente", () => {

    expect(subtotal).toBe(180)

})


test("Deve verificar corretamente capacidade do tanque", () => {

    expect(tanqueStatus).toBe("Cabe no tanque")

})


test("Deve aplicar corretamente a regra comercial (RF04)", () => {

    expect(descontoStatus).toBe("Desconto aplicado")
    expect(valorDesconto).toBe(15)

})


test("Deve calcular valor final corretamente", () => {

    expect(valorFinal).toBe(165)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(35)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusAbastecimento).toBe("Abastecimento confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Sérgio Batista")
    expect(resumo).toContain("Gasolina Aditivada")
    expect(resumo).toContain("180")
    expect(resumo).toContain("Desconto aplicado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("35")
    expect(resumo).toContain("Abastecimento confirmado")

})
