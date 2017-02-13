import {assert, expect} from 'chai'
import proxyquire from 'proxyquire'
import sinon from 'sinon'

describe('Testing async call that returns a Promise', function () {

  it('should return success response (with done)', function (done) {
    // Ingredients:
    let async = {
      doSomenthingAsync: sinon.stub()
    }
    let subject = proxyquire('../src/index', {
      './async': async
    })

    // Instructions:
    subject.asyncCallWithPromise()
      .then(function (response) {
        expect(response).to.equal('Test success')
        done()
      })
      //Catch the AssertionError thrown if the expectation above is not met
      .catch(function (err) {
        done(err)
      })
    async.doSomenthingAsync.invokeCallback(undefined, 'Test success')
  })

  it('should return error response (with done)', function (done) {
    // Ingredients:
    let async = {
      doSomenthingAsync: sinon.stub()
    }
    let subject = proxyquire('../src/index', {
      './async': async
    })

    // Instructions:
    subject.asyncCallWithPromise()
      .catch(function (err) {
        expect(err).to.equal('Test error')
        done()
      })
      //Catch the AssertionError thrown if the expectation above is not met
      .catch(function (err) {
        done(err)
      })
    async.doSomenthingAsync.invokeCallback('Test error x', undefined)
  })
})