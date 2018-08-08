import { SendFile } from '../action/send_post';
import roles from '../base/login';

fixture`send_image` 
    .page`https://feature-fiji-633.fiji.gliprc.com` .beforeEach(async t => {
        const role = roles ['Chris_sandbox']['Yilia Hong'];
        await t.useRole(role);
});

test('send file',async () => {
    await SendFile("Team RingCentral Inc.",)
});