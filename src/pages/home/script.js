import setBrowserForArrowPointer from '@/js/pages/home/setBrowserForArrowPointer'
import showArrowPoint from '@/js/pages/home/showArrowPoint'
import showData from '@/js/pages/home/showData'

document.addEventListener('DOMContentLoaded',async () => {
  setBrowserForArrowPointer()

  await showData()

  showArrowPoint()
})
