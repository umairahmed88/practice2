import React from 'react';

import { CardListContainer } from './card-list.styles'

import { Card } from '../card/card.components';

export const CardList = props => {
return <CardListContainer>
        {props.samples.map(sample => (
        <Card key={sample.id} sample={sample}/>
        ))}
        </CardListContainer>
}