programa {
  funcao inicio() {
    real pesoPesc , pesoPerm , excesso , multa
    escreva ("Escreva o peso permitido \n")
    leia (pesoPerm)
    escreva ("Escreva a quantidade pescada \n")
    leia(pesoPesc)
    se  (pesoPerm < pesoPesc ){
     excesso = pesoPesc - pesoPerm
     multa = excesso + 4
     escreva ("Voce excedeu em "+excesso+ "Kg \n")
     escreva ("Portanto, pagara multa de R$" +multa)
    }
    senao {
      escreva ("Voce nao atingiu o peso permitido , portanto nao precisa pagar multa!")
    }
  }
}