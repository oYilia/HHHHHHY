import { t } from 'testcafe';
import MainPage from '../page/main_page';
import CreateTeamPage from '../page/createteam_dialog';

const mainPage = new MainPage();
const createTeamPage = new CreateTeamPage();

interface IOptions {
  addOtherMembers: boolean;
}

async function createTeam(
  teamName: string,
  members?: string[],
  options?: IOptions
) {
  await t
    .click(mainPage.createTeamButton)
    .expect(mainPage.createTeamDialog.exists)
    .ok()
    .typeText(createTeamPage.nameInput, teamName);
  if (members) {
    members.forEach(async member => {
      await t
        .typeText(createTeamPage.memberInput, member)
        .expect(createTeamPage.memberSelectOption.count)
        .eql(1)
        .click(createTeamPage.memberSelectOption.nth(0));
    });
  }
  if (options) {
    const { addOtherMembers } = options;
    const addMemberCheckboxChecked = await createTeamPage.addMemberCheckbox
      .checked;
    if (addMemberCheckboxChecked !== addOtherMembers) {
      await t.click(createTeamPage.addMemberCheckbox);
    }
  }
  await t
    .expect(createTeamPage.createTeamButton.hasAttribute('disabled'))
    .notOk()
    .click(createTeamPage.createTeamButton)
    .expect(mainPage.createTeamDialog.exists)
    .notOk();
}

export { createTeam };
