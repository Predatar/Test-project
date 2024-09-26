export default function showArrowPoint() {
  const arrowPoint = document.querySelector('.arrow-pointer')
  const productOptionBtn = document.querySelectorAll('.product-option__button')

  productOptionBtn.forEach(elem =>
    elem.addEventListener('click', () => {
      setTimeout(() => {
        arrowPoint.classList.add('show')

        setTimeout(() => {
          arrowPoint.classList.remove('show')
        }, 6000)
      }, 1500)
    })
  )
}
