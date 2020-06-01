import React from 'react';

import { CardListContainer } from './card-list.styles'

export const CardList = props => {
return <CardListContainer>{props.children}</CardListContainer>
}