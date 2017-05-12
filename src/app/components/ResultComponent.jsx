import React, { Component } from 'react';
import _ from 'underscore';
import RecipeComponent from './RecipeComponent';
import RecipesStore from '../stores/RecipesStore';

export default class ResultComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { result: RecipesStore.result() };
    }

    componentDidMount() {
        RecipesStore.addChangeResultListener(this.onChangeResultHandler.bind(this));
    }

    componentWillUnmount() {
        RecipesStore.removeChangeResultListener(this.onChangeResultHandler.bind(this));
    }

    onChangeResultHandler() {
        this.setState({ result: RecipesStore.result() });
    }

    renderRecipes(recipes) {
        return _.map(recipes, (recipe, key) => (
            <div key={key} className="uk-grid-match uk-grid-margin">
                <RecipeComponent recipe={recipe} />
            </div>
        ));
    }

    render() {
        return (
            <div className="app--result">
                <div className="uk-container">
                    <div className="uk-child-width-1-1@l uk-grid uk-grid-match">
                        { this.renderRecipes(this.state.result) }
                    </div>
                </div>
            </div>
        );
    }

}
