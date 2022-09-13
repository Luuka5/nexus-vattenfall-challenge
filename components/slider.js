import React, { useState} from 'react';

const RangeSlider = ({setRangevalue}) => {

    return (
        <div>
            <input type="range" min="0" onChange={(event) => setRangevalue(event.target.value)} />
        </div>
    );
};

export default RangeSlider;