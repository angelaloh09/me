import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import '../styles/routeTransitions.css'

const DISSOLVE_MS = 520

const locationsMatch = (a, b) =>
  a.pathname === b.pathname && a.search === b.search

const RouteTransitionShell = () => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)

  const isDissolving = !locationsMatch(location, displayLocation)

  useEffect(() => {
    if (locationsMatch(location, displayLocation)) return undefined

    const timer = setTimeout(() => {
      setDisplayLocation(location)
    }, DISSOLVE_MS)

    return () => clearTimeout(timer)
  }, [location, displayLocation])

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
