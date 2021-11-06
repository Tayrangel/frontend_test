import { url, setupTest } from '@nuxt/test-utils'

describe('ssr', () => {
  setupTest({ server: true })

  it('renders the index page', async () => {
    const thePage = url('/page')
  })
})