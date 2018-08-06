import roles  from '../base/login'
import { AtMention } from '../action/send_post'

fixture `send_post`
    .page `https://develop.fiji.gliprc.com/unified-login`.beforeEach(async t => {
        const role = roles['Chris_sandbox']['Yilia Hong'];
        await t.useRole(role);
    });

test(`at mention`, async () => {
    await AtMention("Team RingCentral Inc.", "glip" );
});