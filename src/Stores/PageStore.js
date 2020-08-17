import {observable, action, decorate} from 'mobx';

class PageStore {
    page = 'home';

    changePage = page => this.page = page
}

decorate(PageStore, {
    page: observable,
    changePage: action.bound,

});

const pageStore = new PageStore();

export default pageStore;