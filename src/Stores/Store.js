import cars from '../Common/mockData';
import {observable, action, decorate, computed} from 'mobx';

class CarStore {
    cars = cars.slice();
    searchText = '';
    sortParams = {
        sortBy: 'make',
        direction: 'ascending',
    };
    currentPage = 1;
    cardsPerPage = 6;

    changeSearchText = (event) => {
        this.searchText = event.target.value;
    }
}

decorate(CarStore, {
    cars: observable,
    searchText: observable,
    sortParams: observable,
    currentPage: observable,
    cardsPerPage: observable,

});

const carStore = new CarStore();

export default carStore;