import { t, Selector } from 'testcafe';
import MainPage from '../page/main_page';
import AddMemberPage from '../page/addmember_dialog';

const mainPage = new MainPage();
const addMemberPage = new AddMemberPage();

async function openAddMemberDialog(teamName: string) {
  await t
    .click(mainPage.groupSelect.withText(teamName))
    .click(mainPage.addMemberButton)
    .wait(1000)
    .expect(mainPage.addMemberDialog.exists)
    .ok();
}

async function inputMembers(members: string[]) {
  members.forEach(async (member) => {
    await t
      .typeText(addMemberPage.memberInput, member)
      .expect(addMemberPage.memberSelectOption.count)
      .eql(1)
      .click(addMemberPage.memberSelectOption.nth(0));
  });
}

async function addMembers() {
  await t
    .click(addMemberPage.addMembersButton)
    .expect(mainPage.addMemberDialog.exists)
    .notOk();
}

async function closeMembers() {
  await t
    .click(addMemberPage.closeButton)
    .expect(mainPage.addMemberDialog.exists)
    .notOk();
}

async function checkAddMemberSuccess(addedPosts: string[]) {
  addedPosts.forEach(async (addedPost) => {
    await t.expect(Selector('span').withText(addedPost).exists)
      .ok();
  });
}

async function checkAddMemberButtonNotExists(teamName: string) {
  await t
    .click(mainPage.groupSelect.withText(teamName))
    .expect(mainPage.addMemberButton.exists)
    .notOk();
}

async function checkInputMemberNotExists(members: string[]) {
  members.forEach(async (member) => {
    await t
      .typeText(addMemberPage.memberInput, member)
      .expect(addMemberPage.memberSelectOption.count)
      .eql(0);
  });
}

async function checkAddMembersButtonDisabled() {
  await t
    .expect(addMemberPage.addMembersButton.hasAttribute('disabled'))
    .ok();
}


export { inputMembers, openAddMemberDialog, addMembers, closeMembers, checkAddMemberSuccess, checkAddMemberButtonNotExists, checkInputMemberNotExists, checkAddMembersButtonDisabled };
