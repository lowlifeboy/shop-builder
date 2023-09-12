import { useEffect } from 'react'

export function useClickOutside (ref: any, callback: () => void, exclude?: any) {
  useEffect(() => {
    function handleClickOutside (event: { target: any }) {
      console.log('ref.current', ref)
      console.log('event.target', event.target)
      if (ref?.current && !ref.current.contains(event.target) && (!exclude?.contains(event.target))) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, exclude, callback])
}
