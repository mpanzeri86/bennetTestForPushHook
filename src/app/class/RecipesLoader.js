import _ from 'underscore';
import rest from 'rest';
import mime from 'rest/interceptor/mime';
import Recipe from '../class/Recipe';

const client = rest.wrap(mime);

export default class recipesLoader {

    constructor() {
        this.recipes = [];
    }

    load(url, callback) {
        if (_.isEmpty(this.recipes)) {
            this.json(url, callback);
        } else {
            callback(this.recipes);
        }
    }

    json(url, callback) {
        client(url).then((response) => {
            _.map(response.entity, (recipe) => {
                this.recipes.push(new Recipe(recipe));
            });
            callback(this.recipes);
        });
    }
}
