import { t,Selector } from 'testcafe';
import MainPage from '../page/main_page';

const mainpage = new MainPage();

async function SendText(text:string) {
    await t
        .click(Selector('p').withText('Team RingCentral Inc'))
        .typeText(mainpage.postTextarea, text)
        .pressKey('enter')
        .expect(mainpage.postArea.exists);
}

export {SendText};