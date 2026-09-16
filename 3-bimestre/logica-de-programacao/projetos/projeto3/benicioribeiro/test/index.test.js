const {
    nome,
    idade,
    possuiIngresso,
    bloqueado,
    valorIngresso,
    valorPago,
    entradaStatus,
    pagamentoStatus,
    troco,
    statusFinal,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(nome).toBe("Benício Ribeiro")
    expect(idade).toBe(20)
    expect(possuiIngresso).toBe(true)
    expect(bloqueado).toBe(false)
    expect(valorIngresso).toBe(50)
    expect(valorPago).toBe(50)

})


test("Deve liberar a entrada quando todas as condições forem verdadeiras", () => {

    expect(entradaStatus).toBe("Entrada liberada")

})


test("Deve identificar o pagamento como aprovado", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve confirmar a entrada quando liberada e pagamento aprovado", () => {

    expect(statusFinal).toBe("Entrada confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Benício Ribeiro")
    expect(resumo).toContain("Entrada liberada")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Entrada confirmada")

})
