import React from 'react';
import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'test',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1054,
        canvasHeight: 742
    }
});
