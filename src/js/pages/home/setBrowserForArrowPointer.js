export default function setBrowserForArrowPointer() {
  const arrowPointer = document.querySelector('.arrow-pointer')
  const browser = navigator.userAgent

  arrowPointer.classList.toggle('google', browser.includes('Chrome'))
  arrowPointer.classList.toggle('mozilla', browser.includes('Firefox'))
}
