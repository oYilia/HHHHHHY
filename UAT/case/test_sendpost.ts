import { Selector } from 'testcafe';
import account from '../base/account';
import roles  from '../base/login'
import { SendText } from '../action/send_post'

fixture `sendpost`
    .page `https://develop.fiji.gliprc.com/unified-login`.beforeEach(async t => {
        const role = roles['Chris_sandbox']['Yilia Hong'];
        await t.useRole(role);
    });

test('send post', async t => {
    SendText( "test" );
});  