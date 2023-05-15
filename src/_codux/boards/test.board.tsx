import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'test',
    Board: () => <div>
        <button>Button</button>
        <h1>Heading 1</h1>
    </div>,
    environmentProps: {
        canvasHeight: 608,
        canvasWidth: 962
    }
});
