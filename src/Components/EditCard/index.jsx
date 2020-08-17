import React from 'react';
import './styles.css'
import EditInputsContainer from '../EditInputsContainer/';
import editCardStore from '../../Stores/EditCardStore';
import {observer} from 'mobx-react';

function EditCard(props) {
    return (
        <div className="card-container edit-card">
            <EditInputsContainer
                propertiesArray={Object.keys(editCardStore.car)}
                placeholdersObject={props}
                onInputChangeFunc={editCardStore.setCarSpecs}
            />
            <button
                className="changes-btn"
                onClick={() => {
                    editCardStore.changeItemInArray(Object.keys(editCardStore.car), props);
                    props.changeScreen();
                }}
            >
                    Make changes
            </button>
        </div>
    );
};

export default observer(EditCard);