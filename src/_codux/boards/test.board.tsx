import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'test',
    Board: () => <div>
        <button>Button</button>
    </div>
});
