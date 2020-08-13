import React from 'react';
import EditInputField from '../EditInputField';

export default function EditInputsContainer(props) {
    const {propertiesArray, placeholdersObject} = props;
    return(
        <div>
            {
                propertiesArray.map((property) => {
                    return (
                        <EditInputField
                            key={property}
                            forProperty={property}
                            placeholder={placeholdersObject[property]}
                            onInputChangeFunc={props.onInputChangeFunc}
                        />
                    )
                })
            }
        </div>
    );
}