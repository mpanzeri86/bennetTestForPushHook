export default class Recipe {
    constructor({ code = '', title = '', legalTitle = '', note = '', ingredients = '', department = '' }) {

        this.code = code;
        this.title = title;
        this.legalTitle = legalTitle;
        this.note = note;
        this.ingredients = ingredients ? ingredients.split(',') : [];
        this.department = department;
    }

    static get searchableProps() {
        return ['title'];
    }
}
