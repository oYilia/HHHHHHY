import { LoadHistory } from '../action/load_history';
import Roles from '../base/login';

fixture `load_history`
    .page `https://develop.fiji.gliprc.com/unified-login` .beforeEach(async t =>{
        const role = Roles['Chris_sandbox']['Yilia Hong'];
        await t.useRole(role);   
    });

test(`load history`,async () =>{
    await LoadHistory("Team RingCentral Inc.");
});