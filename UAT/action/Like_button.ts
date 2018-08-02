import { t,Selector } from 'testcafe';
import MainPage from '../page/main_page';

const mainpage = new MainPage();

async function LikeButton() {
    await t
    .hover(mainpage.postTimeArea)
    //wait
    .click(mainpage.likeButton)
    .expect(mainpage.likeButton.exists);
}

export { LikeButton };