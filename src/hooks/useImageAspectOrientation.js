import { useCallback, useEffect, useState } from 'react'

/**
 * Tracks portrait vs landscape for the main project image so CSS can switch
 * aspect ratio and object-fit. Resets while the next image loads.
 */
export function useImageAspectOrientation(imageKey) {
  const [isPortrait, setIsPortrait] = useState(false)

  useEffect(() => {
    setIsPortrait(false)
  }, [imageKey])

  const onMainImageLoad = useCallback((e) => {
    const { naturalWidth, naturalHeight } = e.currentTarget
    if (!naturalWidth || !naturalHeight) return
    setIsPortrait(naturalHeight > naturalWidth)
  }, [])

  return { isPortrait, onMainImageLoad }
}
