export default function setBrowserForArrowPointer() {
  const arrowPointer = document.querySelector('.arrow-pointer')
  const browser = navigator.userAgent

  if (browser.includes('Firefox')) {
    arrowPointer.classList.add('google')
  }

  if (browser.includes('Chrome')) {
    const chromeMatch = browser.match(/Chrome\/(\d+)/)
    const divisionVersion = 89;

    if (+chromeMatch[1] >= divisionVersion) {
      arrowPointer.classList.add('google')
    } else {
      arrowPointer.classList.add('mozilla')
    }
  }
}
