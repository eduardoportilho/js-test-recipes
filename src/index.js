import async from './async'

function asyncCallWithPromise() {
  return new Promise(function (resolve, reject) {
    async.doSomenthingAsync(function (error, response) {
      if (error) {
        reject(error)
      } else {
        resolve(response)
      }
    })
  })
}

const mainExport = {
  asyncCallWithPromise: asyncCallWithPromise
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility