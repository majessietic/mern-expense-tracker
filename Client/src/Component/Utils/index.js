export const comma = (total) => {
  return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}