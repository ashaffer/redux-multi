/**
 * Redux dispatch multiple actions
 */

function multi ({dispatch}) {
  return next => action =>
    Array.isArray(action)
      ? action.filter(Boolean).map(dispatch)
      : next(action)
}

/**
 * Exports
 */

export default multi
