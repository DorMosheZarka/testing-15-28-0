import { createBoard } from '@wixc3/react-board';
import { Suggest } from '../../../components/suggest/suggest';
import { importedS, importedN, importedB } from '../constants';

const moduleScopeObject = { s: 'string', n: 0, b: false, nil: null, u: undefined, bi: 10n };
const modeScopeStringOrNumber: string | number = 0;
const moduleScopeObjectFromFunctionCall = (() => ({
    s: 'function string',
    n: 3,
    b: true,
    nil: null,
    u: undefined,
    bi: 20n,
}))();
const moduleScopeObjectWithTemplateString = {
    s: `template ${new Date().getFullYear()}`,
    n: 4,
    b: false,
    nil: null,
    u: undefined,
    bi: 30n,
};
const moduleScopeObjectWithExpression = {
    s: `expression`,
    n: 5 * 2,
    b: true && false,
    nil: null,
    u: undefined,
    bi: 40n,
};
const moduleScopeDynamicObject = (s: string, n: number, b: boolean) => ({
    s,
    n,
    b,
    nil: null,
    u: undefined,
    bi: 50n,
});

export default createBoard({
    name: 'Suggest',
    Board: () => (
        <Suggest
            primObject={{
                s: importedS,
                n: importedN,
                b: importedB,
                nil: moduleScopeObject.nil,
                u: moduleScopeObject.u,
                bi: moduleScopeObjectWithExpression.bi,
            }}
            s={importedS}
        />
    ),
    isSnippet: true,
});
