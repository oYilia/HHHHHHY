import MainPage from '../page/main_page';
import { t } from 'testcafe';

const mainpage = new MainPage();
//const postnumber = mainpage.postArea

async function LoadHistory(teamName:string) {
    await t
        .debug()
        .click(mainpage.groupSelect.withText(teamName))
        for(var i=0;i<10;i++){ //
            await t.pressKey('up')
        }

}

export { LoadHistory };