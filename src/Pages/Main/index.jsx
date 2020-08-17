import React from 'react';
import CardList from '../../Components/CardList';
import ListManipulator from '../../Components/ListManipulator';
import Pagination from '../../Components/Pagination'
import carStore from '../../Stores/CarStore';
import Edit from '../Edit';
import './styles.css';
import {observer} from 'mobx-react';

function Main(props) {
    const {screen, changeScreen} = props;

    const edit = (
        <Edit 
            changeScreen={changeScreen}
            screen={screen}
        >
            <CardList
                changeScreen={changeScreen}
                cars={carStore.currentCars}
                screen={screen}
            />
        </Edit>
    );

    const main = (
        <div>
            <ListManipulator
                handleSearchfieldChange={carStore.changeSearchText}
                doOnSortClick={carStore.setSortParams}
                searchText={carStore.searchText}
            />
            <button
                className="go-to-edit-btn"
                onClick={() => changeScreen('edit')}
            >
                Edit a card
            </button>
            <CardList 
                cars={carStore.currentCars}
                screen={screen}
            />
            <Pagination 
                cardsPerPage={carStore.cardsPerPage}
                totalCards={carStore.filteredCars.length}
                setCurrentPage={carStore.setCurrentPage}
            />
        </div>
    );

    return(
        <div className="Main">
            <h1>Cars</h1>
            {
                screen === 'main'
                    ? main
                    : edit
            }
        </div>            
    );
}

export default observer(Main);