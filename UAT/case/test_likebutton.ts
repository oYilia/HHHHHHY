import { t,Selector } from 'testcafe';
import account from '../base/account';
import roles from '../base/login';
import { like_button } from '../action/Like_button';

fixture `like_button`
    .page `https://develop.fiji.gliprc.com/unified-login`.beforeEach(async t=> {
       const role = roles ['Chris_sandbox']['Yilia Hong'];
    await t.useRole(role);
});

test('likebutton', async t => {
    like_button();
});