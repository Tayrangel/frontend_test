import { Server, Model, JSONAPISerializer, Factory } from 'miragejs';

new Server({
    models: {
        tweet: Model
    },

    serializers: {
        application: JSONAPISerializer
    },

    /*factories: {
        tweet: Factory.extend(
            {name: 'Lorem', user:'@lorem', post: 'Lorem Ipsum, testando como vou fazer varios tweets, porque quando cria, copia tudo'},

        )
    },*/

    seeds(server) {
        server.create('tweet', {name: 'Lorem', user:'@lorem', post: 'Lorem Ipsum, testando como vou fazer varios tweets, porque quando cria, copia tudo'},)
        server.create('tweet', {name: 'Lorem2', user:'@lorem2', post: 'Lorem Ipsum, testando como vou fazer varios tweets, porque quando cria, copia tudo'},)
    },

    routes() {
        this.namespace = 'api';
        this.urlPrefix = 'http://localhost:3000'

        this.get('/tweets', schema => schema.db.tweets)
    },
})