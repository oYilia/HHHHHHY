import { t } from 'testcafe';
import MainPage from '../page/main_page';

const mainpage = new MainPage();

async function LikeButton() {
    await t
    .hover(mainpage.postTimeArea)
    .wait(1000)
    .click(mainpage.likeButton)
    .expect(mainpage.likeButton.exists);
}

export { LikeButton };