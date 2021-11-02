import { Server, Model, JSONAPISerializer } from 'miragejs';

let videos = [
    {
        id: 1,
        name: 'xxxx',
        description: 'teste',
    },
    {
        id: 2,
        name: 'yyyy',
        description: 'teste2',
    },
]

new Server({
    models: {
        video: Model
    },

    serializers: {
        application: JSONAPISerializer
    },

    routes() {
        this.namespace = 'api';
        this.urlPrefix = 'http://localhost:3000'

        this.get('/videos', () => {
            return videos
        })
    },
})