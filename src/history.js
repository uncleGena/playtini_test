
export default (function () {
  let initialStore = {todos: []} // import
  let history = []
  let currentPosition = -1

  function undoable () { return currentPosition > 0 }

  function redoable () { return currentPosition < history.length - 1 }

  return {
    undo: function () {
      if (undoable()) {
        currentPosition--
        console.warn('UNDO::', currentPosition, history);
        return history[currentPosition]
      } else {
        currentPosition = -1
        console.warn('UNDO::', currentPosition, history);
        return initialStore
      }
    },
    redo: function () {
      if (redoable() && history.length) {
        currentPosition++
        console.warn(redoable(), 'REDO::', currentPosition, history);
        return history[currentPosition]
      } else {
        return history[history.length -1]
      }
    },
    add: function (store) {
      // before add, check that there is no states AFTER current position
      // in order to exclude different 'branches'
      if (currentPosition < history.length - 1) {
        let removed = history.splice(currentPosition + 1)
      }
      currentPosition = history.push(store) -1
      console.log('store::', currentPosition, history);
    },
    checkHistory: function () {
      return history
    }
  }
})()
