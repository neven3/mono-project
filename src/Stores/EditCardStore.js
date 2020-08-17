import {observable, action, decorate, computed} from 'mobx';
import carStore from './CarStore';

class EditCardStore {
    make = '';
    model = '';
    price = '';

    setCarSpecs = (event, input) => {
        if (event.target.value.length !== 0) {
            this[input] = event.target.value;
        }
    }

    changeItemInArray = (arrOfKeysToChange) => {
        const indexOfItemInCars = carStore.cars.findIndex((car) => {
            return(
                arrOfKeysToChange.reduce((accBool, currentKey) => {
                    return accBool && car[currentKey] === this[currentKey];
                }, true)
            );
        });

        arrOfKeysToChange.forEach(key => {
            if (this[key] !== '') {
                if (typeof carStore.cars[indexOfItemInCars][key] === 'number') {
                    carStore.cars[indexOfItemInCars][key] = Number(this[key]);
                } else {
                    carStore.cars[indexOfItemInCars][key] = this[key];
                }
            }
        });
    }
}

decorate(EditCardStore, {
    make: observable,
    model: observable,
    price: observable,
    setCarSpecs: action,
    changeItemInArray: action,
});

const editCardStore = new EditCardStore();

export default editCardStore;