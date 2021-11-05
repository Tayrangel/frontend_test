import { Server, Model, JSONAPISerializer, Factory } from 'miragejs';
import faker, { image } from 'faker'

new Server({
    models: {
        tweet: Model,
        follow: Model,
        me: Model,
        post: Model,
    },

    serializers: {
        application: JSONAPISerializer
    },
    
    factories: {
        tweet: Factory.extend({
            avatar() {
                return faker.fake('{{image.avatar}}')
            },
    
            name() {
                return faker.fake('{{name.findName}}')
            },
    
            user() {
                return faker.fake('{{internet.userName}}')
            },
    
            post() {
                return faker.fake('{{lorem.sentence}}')
            },
                
            image() {
                return faker.fake('{{image.nature}}')
            },
        }),

        follow: Factory.extend ({
            avatar() {
                return faker.fake('{{image.avatar}}')
            },

            name() {
                return faker.fake('{{name.findName}}')
            },

            user() {
                return faker.fake('{{internet.userName}}')
            }
            
        }),

        me: Factory.extend ({
            city() {
                return faker.fake('{{address.city}}|{{address.stateAbbr}}')
            },

            date() {
                return faker.fake('{{date.past}}')
            },

            link() {
                return faker.fake('{{internet.url}}')
            }
        }),

        post: Factory.extend ({
            post() {
                return faker.fake('{{lorem.sentence}}')
            },
            
            image() {
                return faker.fake('{{image.nature}}')
            }
        }),
    },

    seeds(server) {
        server.createList('tweet', 4),
        server.createList('follow', 2),
        server.create('me', 1),
        server.createList('post', 3)
    },

    routes() {
        this.namespace = 'api';
        this.urlPrefix = 'http://localhost:3000'

        this.get('/tweets', schema => schema.db.tweets);
        this.get('/follows', schema => schema.db.follows);
        this.get('/mes', schema => schema.db.mes);
        this.get('/posts', schema => schema.db.posts);
    },
})