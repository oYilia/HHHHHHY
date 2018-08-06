import { SendImage } from '../action/send_post';
import roles from '../base/login';

fixture`send_image` 
    .page`https://develop.fiji.gliprc.com/unified-login` .beforeEach(async t => {
        const role = roles ['Chris_sandbox']['Yilia Hong'];
        await t.useRole(role);
});

test('send file',async () => {
    await SendImage("Team RingCentral Inc.",)
});