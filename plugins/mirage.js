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
                return faker.fake('{{lorem.word(10)}}')
            },

            post() {
                return faker.fake('{{lorem.sentence}}')
            },

            img() {
                return faker.fake('{{image.image}}')
            },
        })
    },

    seeds(server) {
        server.createList('tweet', 10)
        /*server.create('tweet', {name: 'Lorem2', user:'@lorem2', post: 'Lorem Ipsum, testando como vou fazer varios tweets, porque quando cria, copia tudo'},)*/
    },

    routes() {
        this.namespace = 'api';
        this.urlPrefix = 'http://localhost:3000'

        this.get('/tweets', schema => schema.db.tweets)
    },
})