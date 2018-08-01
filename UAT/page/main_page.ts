import { Selector } from 'testcafe';

export default class Main {
  exitButton: Selector;
  addMemberButton: Selector;
  addMemberDialog: Selector;
  groupSelect: Selector;
  createTeamButton: Selector;
  createTeamDialog: Selector;
  postTextarea: Selector;
  postArea: Selector;
  postTimeArea: Selector;
  likeButton: Selector;
  unlikeButton: Selector;
  pinButton: Selector;
  unpinButton: Selector;
  bookmarkButton: Selector;
  removebookmarkButton: Selector;
  constructor() {
    this.exitButton = Selector('button').withText('Exit');
    this.addMemberButton = Selector('.memberList').find('i');
    this.addMemberDialog = Selector('.Modal');
    this.groupSelect = Selector('p');
    this.createTeamButton = Selector('div').withText('Teams').nth(8).nth(8).find('span').nth(1);
    this.createTeamDialog = Selector('.Modal');

    this.postTextarea = Selector('textarea');
    this.postArea = Selector('.sc-uJMKN hJgycB');
    this.postTimeArea = Selector('.sc-dNLxif dYsDxb');
    this.likeButton = Selector('.sc-ktHwxA.kHYEVW').nth(27).find('span').withText('Like');
    this.unlikeButton = Selector('.sc-ktHwxA.kHYEVW').nth(27).find('span').withText('Unlike');
    this.pinButton = (Selector('.sc-iELTvK.czjhkS').nth(27).find('span').withText('Pin'));
    this.unpinButton = (Selector('.sc-iELTvK.czjhkS').nth(27).find('span').withText('Unpin'));
    this.bookmarkButton = (Selector('.sc-jwKygS.gTZXhi').nth(27).find('span').withText('Bookmark'));
    this.removebookmarkButton = (Selector('.sc-jwKygS.gTZXhi').nth(27).find('span').withText('Remove Bookmark'));
  }
}