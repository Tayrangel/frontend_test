import { Server, Model, JSONAPISerializer, Factory } from 'miragejs';
import faker, { image } from 'faker'

new Server({
    models: {
        tweet: Model,
        user: Model,
    },

    serializers: {
        application: JSONAPISerializer
    },
    
    factories: {
        tweet: Factory.extend({
            post() {
                return faker.fake('{{lorem.sentence}}')
            },
                
            image() {
                return faker.fake('{{image.nature}}')
            },
        }),

        user: Factory.extend ({
            avatar() {
                return faker.fake('{{image.avatar}}')
            },

            name() {
                return faker.fake('{{name.findName}}')
            },

            user() {
                return faker.fake('{{internet.userName}}')
            },

            city() {
                return faker.fake('{{address.city}}|{{address.stateAbbr}}')
            },

            date() {
                return faker.fake('{{date.past}}')
            },

            link() {
                return faker.fake('{{internet.url}}')
            },
            
        }),
    },

    seeds(server) {
        server.create('tweet'),
        server.createList('user', 4),
        server.create('user')
    },

    routes() {
        this.namespace = 'api';
        this.urlPrefix = 'http://localhost:3000'

        this.get('/tweets', schema => schema.db.tweets);
        this.get('/users', schema => schema.db.users);
    },
})