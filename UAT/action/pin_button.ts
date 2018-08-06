import { t } from 'testcafe';
import MainPage from '../page/main_page';

const mainpage = new MainPage();

async function PinButton() {
    await t
    .hover(mainpage.postTimeArea)
    //.wait(mainpage.pinButton.exists)//isvisible
    .click(mainpage.pinButton)
    .expect(mainpage.unpinButton.exists);
}

export { PinButton };