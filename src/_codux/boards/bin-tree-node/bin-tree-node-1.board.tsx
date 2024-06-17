import { createBoard } from '@wixc3/react-board';
import { BinTreeNode } from '../../../components/bin-tree-node/bin-tree-node';
import { Node } from '../../../classes/node';

const mockGetValue = () => 'Node Value';
const mockNode = new Node([4]);

export default createBoard({
    name: 'BinTreeNode',
    Board: () => (
        <BinTreeNode
            value={mockNode}
            left={{
                value: mockNode,
                left: {
                    value: mockNode,
                },
                right: {
                    value: mockNode,
                },
            }}
            right={{
                value: mockNode,
            }}
        />
    ),
    isSnippet: true,
});
