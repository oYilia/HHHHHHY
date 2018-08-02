import { t,Selector } from 'testcafe';
import MainPage from '../page/main_page';

const mainpage = new MainPage();

async function SendText(text:string) {
    await t
        .debug()
        .click(Selector('p').withText('Team RingCentral Inc'))
        .typeText(mainpage.postTextarea, text + Date.now())
        .pressKey('enter')
        .expect(mainpage.postArea).contains(text + Date.now());
}

export { SendText };