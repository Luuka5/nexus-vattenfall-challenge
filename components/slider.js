import React, { useState} from 'react';

const RangeSlider = () => {
    const [rangeval, setRangeval] = useState(null);

    return (
        <div>
            <input type="range" min="0" onChange={(event) => setRangeval(event.target.value)} />
            <h4>Values is:{rangeval}</h4>
        </div>
    );
};

export default RangeSlider;