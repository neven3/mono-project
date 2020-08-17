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

    setSortParams = (sortBy, direction) => {
        this.sortParams = {sortBy, direction};
    }

    setCurrentPage = (event) => {
        this.currentPage = event.target.id
    }
}

decorate(CarStore, {
    cars: observable,
    searchText: observable,
    sortParams: observable,
    currentPage: observable,
    cardsPerPage: observable,
    changeSearchText: action,
    setSortParams: action,
    setCurrentPage: action,
});

const carStore = new CarStore();

export default carStore;