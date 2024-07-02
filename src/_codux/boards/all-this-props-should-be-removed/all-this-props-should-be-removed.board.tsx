import { createBoard } from '@wixc3/react-board';
import { AllThisPropsShouldBeRemoved } from '../../../components/all-this-props-should-be-removed/all-this-props-should-be-removed';

const allThisPropsShouldBeRemoved = {
    f: () => null, // Function
    obj: {}, // Object
    arr: [], // Array
    date: new Date(), // Date
    regex: /abc/, // Regular Expression
    map: new Map(), // Map
    set: new Set(), // Set
    symbol: Symbol('id'), // Symbol
    nullValue: null, // Null
    undefinedValue: undefined, // Undefined
};

export default createBoard({
    name: 'AllThisPropsShouldBeRemoved',
    Board: () => (
        <AllThisPropsShouldBeRemoved
            f={allThisPropsShouldBeRemoved.f}
            obj={allThisPropsShouldBeRemoved.obj}
            arr={allThisPropsShouldBeRemoved.arr}
            date={allThisPropsShouldBeRemoved.date}
            regex={allThisPropsShouldBeRemoved.regex}
            map={allThisPropsShouldBeRemoved.map}
            set={allThisPropsShouldBeRemoved.set}
            symbol={allThisPropsShouldBeRemoved.symbol}
            nullValue={allThisPropsShouldBeRemoved.nullValue}
            undefinedValue={allThisPropsShouldBeRemoved.undefinedValue}
        />
    ),
    isSnippet: true,
});
