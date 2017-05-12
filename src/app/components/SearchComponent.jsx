import React, { Component } from 'react';
import SearchActions from '../actions/SearchActions';

export default class SearchComponent extends Component {

    onSubmitSearchHandler(e) {
        e.preventDefault();
    }

    onChangeCriteriaHandler(e) {
        SearchActions.changeCriteria(e.target.value);
    }

    render() {
        return (
            <div className="uk-search uk-width-1-4@s">
                <form onSubmit={this.onSubmitSearchHandler}>
                    <input type="search" placeholder="Search" className="uk-input" onChange={this.onChangeCriteriaHandler} />
                </form>
            </div>
        );
    }

}
