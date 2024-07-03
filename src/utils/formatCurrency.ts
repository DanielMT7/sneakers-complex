// Retorna o valor convertido em reais.

const BRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

const formatCurrency = (number: number) => {
  return BRL.format(number)
}

export default formatCurrency
