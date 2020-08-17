import {observable, action, decorate, computed} from 'mobx';
import pageStore from './PageStore'

class CardStore {
    cardClicked = false;

    handleCardClick = () => {
        if (pageStore.page.includes('edit')) this.cardClicked = true;
    }
}

decorate(CardStore, {
    cardClicked: observable,
    handleCardClick: action,
});