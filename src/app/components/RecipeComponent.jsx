import React, { Component } from 'react';
import Recipe from '../class/Recipe';

export default class RecipeComponent extends Component {

    static get propTypes() {
        return {
            recipe: React.PropTypes.instanceOf(Recipe),
        };
    }

    render() {
        return (
            <div className="uk-card uk-card-default">
                <div className="uk-card-header">
                    {this.props.recipe.title}
                </div>
            </div>
        );
    }

}
