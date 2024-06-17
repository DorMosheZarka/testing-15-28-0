import { createBoard } from '@wixc3/react-board';
import { TreeNode } from '../../../components/tree-node/tree-node';
import { treeData } from '../../../constants/constants';

export default createBoard({
    name: 'TreeNode',
    Board: () => <TreeNode {...treeData} />,
    isSnippet: true,
});
