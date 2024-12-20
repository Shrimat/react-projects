import React from 'react';
import MenuList from './menu-list';

function TreeView({menus = []}) {
    return (
        <div className='tree-view-container'>
            <MenuList data={menus} />
        </div>
    );
}

export default TreeView;