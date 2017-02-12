import {assert, expect} from 'chai'
import proxyquire from 'proxyquire'
import sinon from 'sinon'

describe('Testing async call that returns a Promise', function () {

  it('should', function () {
    // Ingredients:
    let async = {
      doSomenthingAsync: sinon.stub()
    }
    let subject = proxyquire('../src/index', {
      './async': async
    })

    // Instructions:
    subject.asyncCallWithPromise().then(function (response) {
      expect(response).to.equal('Test success')
    })
    async.doSomenthingAsync.invokeCallback(undefined, 'Test success')

  })
})