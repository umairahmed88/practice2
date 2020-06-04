import React from 'react';

import CollectionItem from '../../components/pictures-data.components/pictures-data.components';

import './pictures.styles.scss';

const PicturePreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps} />
                ))}
        </div>
    </div>
);

export default PicturePreview;