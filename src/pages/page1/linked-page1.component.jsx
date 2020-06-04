import React from 'react';

import SHOP_DATA from '../pages.data';

import './page1.styles.scss';

class Page1 extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            collections: SHOP_DATA
        }
    }
    render () {
        return <div>NEW PAGE</div>
    }
}

export default Page1;