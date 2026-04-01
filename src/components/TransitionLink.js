import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Thin alias around <Link> so we can swap behavior app-wide later.
 * (View Transitions + HashRouter + React 17 was causing blank screens — plain Link for now.)
 */
const TransitionLink = React.forwardRef((props, ref) => (
  <Link ref={ref} {...props} />
))
TransitionLink.displayName = 'TransitionLink'

export default TransitionLink
