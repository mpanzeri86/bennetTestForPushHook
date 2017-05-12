import React, { Component } from 'react';
import SearchComponent from './SearchComponent';
import ResultComponent from './ResultComponent';

export default class BookIngredients extends Component {
    render() {
        return (
            <div>
                <div><SearchComponent /></div>
                <div><ResultComponent /></div>
            </div>
        );
    }
}
