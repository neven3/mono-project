import {observable, action, decorate} from 'mobx';
import pageStore from './PageStore'

class CardStore {
    cardClicked = false;

    handleCardClick = () => {
        if (pageStore.screen.includes('edit')) this.cardClicked = true;
    }
}

decorate(CardStore, {
    cardClicked: observable,
    handleCardClick: action,
});

const cardStore = new CardStore();

export default cardStore;