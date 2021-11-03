import { Server, Model, JSONAPISerializer, Factory } from 'miragejs';
import faker from 'faker'
new Server({
    models: {
        tweet: Model
    },

    serializers: {
        application: JSONAPISerializer
    },
    
    factories: {
        tweet: Factory.extend({
            name() {
                return faker.fake('{{name.findName}}')
            },

            user() {
                return faker.fake('{{name.firstName}}')
            },

            post() {
                return faker.fake('{{lorem.sentence}}')
            },
            
        })
    },

    seeds(server) {
        server.createList('tweet', 3)
    
    },

    routes() {
        this.namespace = 'api';
        this.urlPrefix = 'http://localhost:3000'

        this.get('/tweets', schema => schema.db.tweets)
    },
})