import {Pipeline, Chain, Application} from 'micro-framework'
@Pipeline({description: 'Send HELLO WORLD to all connections'})
class IncomingMessages {}

const handleREST = new IncomingMessages()

handleREST.addChain(function(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 5000)
  })
})
handleREST.addChain(function(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(result)
      resolve(2)
    }, 5000)
  })
})

@Application({description: 'Send HELLO WORLD to all connections', pipelines: [handleREST]})
class ExampleApp {}
const app = new ExampleApp()

app.start()
