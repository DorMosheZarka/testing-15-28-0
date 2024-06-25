import { createBoard } from '@wixc3/react-board';
import { TreeNode } from '../../../components/tree-node/tree-node';

export default createBoard({
    name: 'TreeNode',
    Board: () => <TreeNode value={[1, 2, 3]} />,
    isSnippet: true,
});
