import {observable, action, decorate, computed} from 'mobx';

class PageStore {
    page = 'home';

    changePage = page => this.page = page


}

decorate(PageStore, {
    page: observable,
    changePage: action,

});

const pageStore = new PageStore();

export default pageStore;