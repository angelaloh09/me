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

  const outKey = `${displayLocation.pathname}${displayLocation.search || ''}`
  const inKey = `${location.pathname}${location.search || ''}`

  if (!isDissolving) {
    return (
      <div className="crossfade-root">
        <AppRoutes key={inKey} location={location} />
      </div>
    )
  }

  return (
    <div className="crossfade-root">
      <div
        className="route-layer route-layer--out"
        key={`out-${outKey}`}
        aria-hidden="true"
      >
        <AppRoutes key={outKey} location={displayLocation} />
      </div>
      <div className="route-layer route-layer--in" key={`in-${inKey}`}>
        <AppRoutes key={inKey} location={location} />
      </div>
    </div>
  )
}

export default RouteTransitionShell
