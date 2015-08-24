/**
 * Redux dispatch multiple actions
 */

function multi (api) {
  return function (next) {
    return function (action) {
      return Array.isArray(action)
        ? action.forEach(api.dispatch)
        : next(action)
    }
  }
}

/**
 * Exports
 */

module.exports = multi
