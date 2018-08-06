import { t,Selector } from 'testcafe';
import roles from '../base/login';
import { LikeButton } from '../action/like_button';

fixture `like_button`
    .page `https://develop.fiji.gliprc.com/unified-login`.beforeEach(async t=> {
       const role = roles ['Chris_sandbox']['Yilia Hong'];
    await t.useRole(role);
});

test('like button', async t => {
    await LikeButton();
});