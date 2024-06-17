import { createBoard } from '@wixc3/react-board';
import { BinTreeNode } from '../../../components/bin-tree-node/bin-tree-node';
import { binTreeData } from '../../../constants/constants';

export default createBoard({
    name: 'BinTreeNode',
    Board: () => <BinTreeNode {...binTreeData} />,
    isSnippet: true,
});
