import { t,Selector } from 'testcafe';
import MainPage from '../page/main_page';

const mainpage = new MainPage();

async function like_button() {
    await t
    .click(Selector('.sc-ktHwxA.kHYEVW').nth(27).find('span').withText('Like'))
}

export { like_button };