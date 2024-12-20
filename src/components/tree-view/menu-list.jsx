import React from 'react';
import MenuItem from './menu-item';

function MenuList({data = []}) {
    return (
        <ul className='menu-list-container'>
            {
                data && data.length > 0 ?
                data.map((dataItem) => {
                    return <MenuItem item={dataItem}/>
                })
                : null
                
            }
        </ul>
    );
}

export default MenuList;
