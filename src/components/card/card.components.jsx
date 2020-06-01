import React from 'react';

import {CardContainer} from './card.styles';

export const Card = props => (
    <CardContainer>
        <img alt='practice' src={`https://robohash.org/${props.sample.id}?set=set2&size=180x180`} />
        <h2>{props.sample.name}</h2>
        <p>{props.sample.email}</p>
    </CardContainer>
)