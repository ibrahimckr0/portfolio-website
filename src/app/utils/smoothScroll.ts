export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
  e.preventDefault()
  const targetElement = document.querySelector(targetId)
  
  if (targetElement) {
    const offset = 80 // Navbar yüksekliği için offset
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
} 