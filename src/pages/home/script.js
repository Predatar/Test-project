import setBrowserForArrowPointer from '@/js/pages/home/setBrowserForArrowPointer'
import showData from '@/js/pages/home/showData'

document.addEventListener('DOMContentLoaded',async () => {
  setBrowserForArrowPointer()

  await showData()
})
