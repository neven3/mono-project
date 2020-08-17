import {observable, action, decorate} from 'mobx';

class PageStore {
    screen = 'home';

    changeScreen = screen => this.screen = screen;
}

decorate(PageStore, {
    screen: observable,
    changeScreen: action.bound,
});

const pageStore = new PageStore();

export default pageStore;