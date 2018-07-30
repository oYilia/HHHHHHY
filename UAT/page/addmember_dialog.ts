import { Selector } from 'testcafe';

export default class AddMember {
  closeButton: Selector;
  addMembersButton: Selector;
  memberInput: Selector;
  memberSelectOption: Selector;
  constructor() {
    this.closeButton = Selector('button').withText('Close');
    this.addMembersButton = Selector('button').withText('Add Members');
    this.memberInput = Selector('.Select-input').find('input');
    this.memberSelectOption = Selector('.Select-option');
  }
}
