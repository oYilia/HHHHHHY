import { Selector } from 'testcafe';

export default class Main {
  exitButton: Selector;
  searchInput: Selector;
  peopleSection: Selector;
  teamsSection: Selector;
  groupSelect: Selector;
  createTeamButton: Selector;
  createTeamDialog: Selector;

  postArea: Selector;
  lastPost: Selector;
  postTextarea: Selector;
  uploadButton: Selector;
  postTimeArea: Selector;
  likeButton: Selector;
  unlikeButton: Selector;
  pinButton: Selector;
  unpinButton: Selector;
  bookmarkButton: Selector;
  removebookmarkButton: Selector;

  addMemberButton: Selector;
  addMemberDialog: Selector;

  constructor() {
    this.exitButton = Selector('button').withText('Exit');
    this.searchInput = Selector('.sc-dxgOiQ lhqJzO').find('input');
    this.peopleSection = Selector('span').withText('People');
    this.teamsSection = Selector('span').withText('Teams');
    this.groupSelect = Selector('p');
    this.createTeamButton = Selector('div').withText('Teams').nth(8).nth(8).find('span').nth(1);
    this.createTeamDialog = Selector('.Modal');

    this.postArea = Selector('.sc-elJkPf.duwGEi').find('div');
    this.lastPost = Selector('.sc-elJkPf > div > div:last-child');
    this.postTextarea = Selector('textarea');
    this.uploadButton = Selector('.sc-iQKALj.fQoUzh');
    this.postTimeArea = Selector('.sc-dNLxif.dYsDxb').find('div');
    this.likeButton = Selector('.sc-ktHwxA.kHYEVW').find('span').withText('Like');
    this.unlikeButton = Selector('.sc-ktHwxA.kHYEVW').find('span').withText('Unlike');
    this.pinButton = Selector('.sc-iELTvK.czjhkS').find('span').withText('Pin');
    this.unpinButton = Selector('.sc-iELTvK.czjhkS').find('span').withText('Unpin');
    this.bookmarkButton = Selector('.sc-jwKygS.gTZXhi').find('span').withText('Bookmark');
    this.removebookmarkButton = (Selector('.sc-jwKygS.gTZXhi').find('span').withText('Remove Bookmark'));

    this.addMemberButton = Selector('.memberList').find('i');
    this.addMemberDialog = Selector('.Modal');
  }
}