import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import '../styles/routeTransitions.css'

const DISSOLVE_MS = 520

/**
 * Cross-dissolve: outgoing route fades out while incoming fades in (overlapping).
 * Uses two <Routes location={…}> trees so old and new pages render simultaneously.
 */
const RouteTransitionShell = () => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const timeoutRef = useRef(null)

  const isDissolving =
    location.pathname !== displayLocation.pathname ||
    location.search !== displayLocation.search

  useEffect(() => {
    if (!isDissolving) return undefined

    timeoutRef.current = setTimeout(() => {
      setDisplayLocation(location)
    }, DISSOLVE_MS)

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [location, displayLocation, isDissolving])

  if (!isDissolving) {
    return (
      <div className="crossfade-root">
        <AppRoutes location={location} />
      </div>
    )
  }

  return (
    <div className="crossfade-root">
      <div
        className="route-layer route-layer--out"
        key={`out-${displayLocation.key}`}
        aria-hidden="true"
      >
        <AppRoutes location={displayLocation} />
      </div>
      <div className="route-layer route-layer--in" key={`in-${location.key}`}>
        <AppRoutes location={location} />
      </div>
    </div>
  )
}

export default RouteTransitionShell
