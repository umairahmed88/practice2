import React from 'react';

import './pictures.styles.scss';

const CollectionItem = ({id, imageUrl}) => (
<div className='collection-item'>
    <div
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
    />
</div>
);

export default CollectionItem;