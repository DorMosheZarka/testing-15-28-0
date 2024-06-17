import { createBoard } from '@wixc3/react-board';
import { BinTreeNode } from '../../../components/bin-tree-node/bin-tree-node';

export default createBoard({
    name: 'TreeNode - AI Generated Props 1',
    Board: () => (
        <BinTreeNode
            value={42}
            left={{
                value: 21,
                left: {
                    value: 11,
                },
                right: {
                    value: 31,
                },
            }}
            right={{
                value: 84,
                left: {
                    value: 63,
                },
                right: {
                    value: 105,
                },
            }}
        />
    ),
    isSnippet: true,
});
