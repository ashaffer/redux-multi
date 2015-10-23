/**
 * Redux dispatch multiple actions
 */

function multi ({dispatch}) {
  return next => action =>
    Array.isArray(action)
      ? Promise.all(action.filter(Boolean).map((p) => dispatch(p)))
      : next(action)
}

/**
 * Exports
 */

export default multi
