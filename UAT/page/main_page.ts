import { Selector } from 'testcafe';

export default class Main {
  exitButton: Selector;
  addMemberButton: Selector;
  addMemberDialog: Selector;
  groupSelect: Selector;
  createTeamButton: Selector;
  createTeamDialog: Selector;
  postTextarea: Selector;
  constructor() {
    this.exitButton = Selector('button').withText('Exit');
    this.addMemberButton = Selector('.memberList').find('i');
    this.addMemberDialog = Selector('.Modal');
    this.groupSelect = Selector('p');
    this.createTeamButton = Selector('div').withText('Teams').nth(8).nth(8).find('span').nth(1);
    this.createTeamDialog = Selector('.Modal');
    this.postTextarea = Selector('textarea');
  }
}