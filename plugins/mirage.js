import { Server, Model, JSONAPISerializer, Factory } from 'miragejs';
import faker, { image } from 'faker'
new Server({
    models: {
        tweet: Model,
        follow: Model,
        simple: Model,
    },

    serializers: {
        application: JSONAPISerializer
    },
    
    factories: {
        simple: Factory.extend({
            avatar() {
                return faker.fake('{{image.avatar}}')
            },

            name() {
                return faker.fake('{{name.findName}}')
            },

            user() {
                return faker.fake('{{name.firstName}}')
            },

            post() {
                return faker.fake('{{lorem.sentence}}')
            },
        }),

        tweet: Factory.extend({
            avatar() {
                return faker.fake('{{image.avatar}}')
            },
    
            name() {
                return faker.fake('{{name.findName}}')
            },
    
            user() {
                return faker.fake('{{name.firstName}}')
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
                return faker.fake('{{name.firstName}}')
            }
            
        })
    },

    seeds(server) {
        server.createList('simple', 3),
        server.createList('tweet', 4),
        server.createList('follow', 2)
    
    },

    routes() {
        this.namespace = 'api';
        this.urlPrefix = 'http://localhost:3000'

        this.get('/simples', schema => schema.db.simples);
        this.get('/tweets', schema => schema.db.tweets);
        this.get('/follows', schema => schema.db.follows);

        /*
        this.get('/simples', (schema, request) => {
            return schema.simples.all();
        });

        this.get('/simples', (schema, request) => {
            let attrs = JSON.parse(request.requestBody);
            return schema.simples.create(attrs);
        });*/

        
    },
})