import _ from 'underscore';
import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import SearchConstants from '../constants/SearchConstants';
import RecipesLoader from '../class/RecipesLoader'
import Recipe from '../class/Recipe';

const recipesLoader = new RecipesLoader();

const EVENTS = {
    CHANGE_RESULT: 'CHANGE_RESULT',
};

const results = {
    recipes: [],
};

const RecipesStore = Object.assign({}, EventEmitter.prototype, {
    result() {
        return results.recipes;
    },
    emitChangeResult() {
        this.emit(EVENTS.CHANGE_RESULT);
    },
    addChangeResultListener(callback) {
        this.on(EVENTS.CHANGE_RESULT, callback);
    },
    removeChangeResultListener(callback) {
        this.removeListener(EVENTS.CHANGE_RESULT, callback);
    },
});

const search = (criteria) => {
    recipesLoader.load('recipes.json', (recipes) => {
        const criteriaRegExp = new RegExp(criteria, 'i');
        results.recipes = _.filter(recipes, (recipe) => {
            return _.some(Recipe.searchableProps, (prop) => { return criteriaRegExp.test(recipe[prop]) });
        });
        RecipesStore.emitChangeResult();
    });
};


AppDispatcher.register((action) => {
    switch (action.actionType) {
        case SearchConstants.CHANGE_CRITERIA:
            search(action.criteria);
            break;
        default:
            // no op
            break;
        }
    }
);

export default RecipesStore;
