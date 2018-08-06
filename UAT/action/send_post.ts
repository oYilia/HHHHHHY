import { t } from 'testcafe';
import MainPage from '../page/main_page';

const mainpage = new MainPage();

async function SendText(teamName:string,text:string) {
    var textPost = text + Date.now();
    await t
        .debug()
        .click(mainpage.groupSelect.withText(teamName))
        .typeText(mainpage.postTextarea, textPost)
        .pressKey('enter')
        .expect(mainpage.postArea.innerText).contains(textPost);
}

async function SendImage(teamName:string){
    await t
        .wait(100)
        .click(mainpage.groupSelect.withText(teamName))
        .click(mainpage.uploadButton)
        .setFilesToUpload(mainpage.postTextarea,'./uploads/1.jpg')

}

export { SendText,SendImage };