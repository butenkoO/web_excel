console.log('mod1')

const start = async () => {
  return await Promise.resolve('123123123123')
}

start().then(console.log)