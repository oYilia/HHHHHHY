import { t } from 'testcafe';
import MainPage from '../page/main_page';

const mainpage = new MainPage();

async function BookmarkButton() {
    await t
        .hover(mainpage.postTimeArea)
        //wait
        .click(mainpage.bookmarkButton)
        .expect(mainpage.removebookmarkButton.exists);
}

export {BookmarkButton};