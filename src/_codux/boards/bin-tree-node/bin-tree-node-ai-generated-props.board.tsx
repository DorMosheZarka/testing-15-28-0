import { createBoard } from '@wixc3/react-board';
import { BinTreeNode } from '../../../components/bin-tree-node/bin-tree-node';

export default createBoard({
    name: 'TreeNode - AI Generated Props',
    Board: () => (
        <BinTreeNode
            value={1}
            left={{
                value: 2,
                left: {
                    value: 4,
                },
                right: {
                    value: 5,
                },
            }}
            right={{
                value: 3,
                left: {
                    value: 6,
                },
                right: {
                    value: 7,
                },
            }}
        />
    ),
    isSnippet: true,
});
