import {observable, action, decorate, toJS} from 'mobx';
import carStore from './CarStore';

class EditCardStore {

    car = {
        make: '',
        model: '',
        price: '',
    };

    setCarSpecs = (event, input) => {
        if (event.target.value.length !== 0) {
            this.car[input] = event.target.value;
        }
    };

    changeItemInArray = (arrOfKeysToChange, props) => {
        const indexOfItemInCars = carStore.cars.findIndex((car) => {
            const carToJS = toJS(car);
            return(
                arrOfKeysToChange.reduce((accBool, currentKey) => {
                    return accBool && carToJS[currentKey] === props[currentKey];
                }, true)
            );
        });

        arrOfKeysToChange.forEach(key => {
            if (this.car[key] !== '') {
                if (typeof toJS(carStore.cars[indexOfItemInCars][key]) === 'number') {
                    carStore.cars[indexOfItemInCars][key] = Number(this.car[key]);
                } else {
                    carStore.cars[indexOfItemInCars][key] = this.car[key];
                }
            }
        });
    };
}

decorate(EditCardStore, {
    car: observable,
    setCarSpecs: action,
    changeItemInArray: action,
});

const editCardStore = new EditCardStore();

export default editCardStore;