import { Selector } from 'testcafe';

export default class CreateTeam {
  closeButton: Selector;
  createTeamButton: Selector;
  nameInput: Selector;
  memberInput: Selector;
  memberSelectOption: Selector;
  addMemberCheckbox: Selector;
  constructor() {
    this.closeButton = Selector('button').withText('Close');
    this.createTeamButton = Selector('button').withText('Create Team');
    this.nameInput = Selector('div').withText('Select').nth(3).nth(3).find('input');
    this.memberInput = Selector('.Select-input').find('input');
    this.memberSelectOption = Selector('.Select-option');
    this.addMemberCheckbox = Selector('div').withText('Members').nth(5).nth(5).find('input');
  }
}
