import React from 'react';
import {LoadingOutlined} from '@ant-design/icons';

const Loader = () => {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <LoadingOutlined
                style={{
                    fontSize: 40,
                }}
                spin
            />
        </div>
    );
};

export default Loader;