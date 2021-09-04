const index = require('../src/index')

test('Function Request', async() => {
    const result = index.main()
    expect(200).toBe(result.status)
})