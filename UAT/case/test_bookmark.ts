import { t,Selector } from 'testcafe';
import account from '../base/account';
import roles from '../base/login';
import { BookmarkButton } from '../action/bookmark_button';

fixture`bookmark_button`
    .page `https://develop.fiji.gliprc.com/unified-login`.beforeEach( async t =>{
        const role = roles['Chris_sandbox']['Yilia Hong'];
    await t.useRole(role);
    });

test('bookmark button',async t =>{
    await BookmarkButton();
});