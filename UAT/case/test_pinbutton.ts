import { t, Selector } from 'testcafe';
import account from '../base/account';
import roles from '../base/login';
import { PinButton } from '../action/pin_button';

fixture `pin_button`
    .page `https://develop.fiji.gliprc.com/unified-login`.beforeEach( async t =>{
        const role = roles['Chris_sandbox']['Yilia Hong'];
    await t.useRole(role);
    });

test('pin button',async t => {
    PinButton();
});