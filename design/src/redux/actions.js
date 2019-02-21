const updateConnectionStatus = (status) => {
  return {
    type: 'UPDATE_CONNECTION_STATUS',
    payload: {
      connectionStatus: status
    }
  }
}

const showLoader = () => {
  return {
    type: 'LOADER',
    payload: {
      showLoader: true,
    }
  }
}

const hideLoader = () => {
  return {
    type: 'LOADER',
    payload: {
      showLoader: false,
    }
  }
}

const printLog = (line, newLine = true) => {
  return {
    type: 'PRINT_LOG',
    payload: {
      line: String(line),
      newLine,
    }
  }
}
