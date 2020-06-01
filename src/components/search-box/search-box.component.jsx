import React from 'react';

import './search-box.styles.scss'

export const SearchBox = props => (
    <input
    className='search'
    type='search'
    placeholder='search fields'
    onChange={props.onSearchChange}/>
);