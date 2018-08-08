import { t } from 'testcafe';
import MainPage from '../page/main_page';

const mainpage = new MainPage();

async function SendText (teamName:string,text:string) {
    var textPost = text + Date.now();
    await t
        .debug()
        .click(mainpage.groupSelect.withText(teamName))
        .typeText(mainpage.postTextarea, textPost)
        .pressKey('enter')
        .expect(mainpage.postArea.innerText).contains(textPost);
}

async function SendFile (teamName:string){
    await t
        .wait(1000)
        .click(mainpage.groupSelect.withText(teamName))
        .setFilesToUpload(mainpage.uploadButton,'../data/1.jpg')
        .wait(3000)
        .expect(mainpage.lastPost.innerText).contains('1.jpg');
}

async function AtMention (teamName:string,firstName:string) {
    var AtPost = "@"+firstName;
    await t
        .click(mainpage.groupSelect.withText(teamName))
        .typeText(mainpage.postTextarea,AtPost)
        .pressKey('enter')
        .pressKey('enter')
        .expect(mainpage.postArea.innerText).contains(AtPost);
}

export { SendText,SendFile,AtMention };