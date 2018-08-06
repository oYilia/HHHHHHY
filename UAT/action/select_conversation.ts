import MainPage from '../page/main_page';
import { t } from 'testcafe';

const mainpage = new MainPage();

async function SelectConversation(name:string) {
    await t
    .click(mainpage.groupSelect.withText(name));
}

/*
async function Selectrandomcoversation () {
    await t
    .click(mainpage.groupSelect.random());
}
*/
export default { SelectConversation };
