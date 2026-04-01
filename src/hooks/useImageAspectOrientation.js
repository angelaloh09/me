import { useCallback, useEffect, useState } from 'react'

/**
 * Tracks whether the currently displayed image is portrait or landscape
 * so the main viewer can switch aspect ratio and object-fit.
 * Pass `imageKey` (e.g. selected index) so orientation resets while the next image loads.
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
