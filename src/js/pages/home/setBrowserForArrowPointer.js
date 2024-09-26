export default function setBrowserForArrowPointer() {
  const arrowPointer = document.querySelector('.arrow-pointer')
  const browser = navigator.userAgent

  if (browser.includes('Firefox')) {
    arrowPointer.classList.add('google')
  }

  if (browser.includes('Chrome')) {
    const chromeMatch = browser.match(/Chrome\/(\d+)/)

    if (+chromeMatch[1] >= 89) {
      arrowPointer.classList.add('google')
    } else {
      arrowPointer.classList.add('mozilla')
    }
  }
}
