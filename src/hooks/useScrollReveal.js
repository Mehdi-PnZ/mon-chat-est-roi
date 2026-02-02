import { useEffect, useRef } from 'react'

/**
 * Custom hook for scroll reveal animations using IntersectionObserver
 * @param {Object} options - IntersectionObserver options
 * @returns {React.RefObject} - Ref to attach to element
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options])

  return ref
}

/**
 * Hook for smooth scroll to anchor
 */
export function useSmoothScroll() {
  const scrollTo = (targetId) => {
    const element = document.querySelector(targetId)
    if (element) {
      const headerHeight = document.querySelector('.header')?.offsetHeight || 80
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  return scrollTo
}
