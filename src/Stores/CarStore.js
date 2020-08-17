import cars from '../Common/mockData';
import {observable, action, decorate, computed} from 'mobx';
import sortItems from '../Common/sortItems';
import getCurrentCards from '../Common/getCurrentCards';

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
    };

    setSortParams = (sortBy, direction) => {
        this.sortParams = {sortBy, direction};
    };

    setCurrentPage = (event) => {
        this.currentPage = event.target.id
    };

    get filteredCars() {
        const sortedCars = sortItems(this.cars.slice(), this.sortParams.direction, this.sortParams.sortBy);
    
        return sortedCars.filter(car => {
            return(
                car.make.toLowerCase().includes(this.searchText)
                || car.model.toLowerCase().includes(this.searchText)
            );
        });
    }

    get currentCars() {
        return getCurrentCards(this.filteredCars, this.currentPage, this.cardsPerPage);
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
    filteredCars: computed,
    currentCars: computed,
});

const carStore = new CarStore();

export default carStore;