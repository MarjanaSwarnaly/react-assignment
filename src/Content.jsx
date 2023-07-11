import React from 'react';
import { useState } from 'react';

const Content = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
             <div className='body'>
                 <button onClick={() => setShow(!show)}>Click To Show</button>
                 {show && <h2>Hi There, Nice to be visible!</h2>}
            </div>
        </div>
    );
};

export default Content;