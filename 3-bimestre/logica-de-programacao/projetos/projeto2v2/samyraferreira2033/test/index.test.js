const {
    leitor,
    livro,
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
    statusEmprestimo,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(leitor).toBe("Otávio Machado")
    expect(livro).toBe("Dom Casmurro")
    expect(valorBase).toBe(0)
    expect(diasPermitidos).toBe(14)
    expect(diasUtilizados).toBe(10)
    expect(valorMultaPorDia).toBe(2)
    expect(valorPago).toBe(0)

})


test("Deve verificar corretamente o prazo", () => {

    expect(prazoStatus).toBe("Devolvido dentro do prazo")

})


test("Deve calcular os dias de atraso corretamente", () => {

    expect(diasAtraso).toBe(0)

})


test("Deve calcular a multa corretamente", () => {

    expect(multa).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(0)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusEmprestimo).toBe("Empréstimo regularizado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Otávio Machado")
    expect(resumo).toContain("Dom Casmurro")
    expect(resumo).toContain("0")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Empréstimo regularizado")

})
