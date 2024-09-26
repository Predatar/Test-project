export default function showArrowPoint() {
  const arrowPoint = document.querySelector('.arrow-pointer')
  const productOptionBtn = document.querySelectorAll('.product-option__button')
  const timeToOpen = 1500;
  const timeToClose = 6000;

  productOptionBtn.forEach(elem =>
    elem.addEventListener('click', () => {
      setTimeout(() => {
        arrowPoint.classList.add('show')

        setTimeout(() => {
          arrowPoint.classList.remove('show')
        }, timeToClose)
      }, timeToOpen)
    })
  )
}
