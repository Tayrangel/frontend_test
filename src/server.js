import { createServer, Factory, Model } from "miragejs"
import Tweet from './components/Tweet.vue'

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      tweets: Model,
    },

    fixtures: {
      tweets
    },

    seeds(server) {
      server.loadFixtures();
      //server.create("tweets", { tweets: "Bob" })
      //server.create("tweets", { tweets: "Alice" })
    },

    routes() {
      this.namespace = "api"

      this.get("/tweets", (schema) => {
        return schema.tweets.all()
      })
    },
  })

  return server
}