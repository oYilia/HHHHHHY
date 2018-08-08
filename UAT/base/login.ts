import { Role, Selector } from 'testcafe';
import account from './account';

interface IAccount {
  name: string;
  password: string;
  extension: string;
  phoneNumber: string;
}
interface IAccounts {
  [env: string]: IAccount[];
}
interface IRoles {
  [env: string]: Role;
}

function getUsers(account: IAccounts) {
  const users = {};
  Object.keys(account).forEach(env => {
    users[env] = account[env].reduce((roles: IRoles, user: IAccount) => {
      const { name, phoneNumber, password, extension } = user;
      roles[name] = Role(
        'https://develop.fiji.gliprc.com',
        async t => {
          const envSelect = Selector('div').withText('Environment').nth(4).find('select');
          const envSelectOption = envSelect.find('option');
          const loginButton = Selector('button').withText('Login');
          const credentialInput = Selector('#credential');
          const loginCredentialNextButton = Selector('#loginCredentialNext');
          const extensionInput = Selector('#pin');
          const passwordInput = Selector('#password');
          const signInButton = Selector('button').withText('Sign In');

          await t
            .click(envSelect)
            .click(envSelectOption.withText(env))
            .expect(envSelect.value)
            .eql(env)
            .click(loginButton)
            .typeText(credentialInput, phoneNumber)
            .click(loginCredentialNextButton)
            .typeText(extensionInput, extension)
            .typeText(passwordInput, password)
            .click(signInButton);
        },
        { preserveUrl: true }
      );
      return roles;
    }, {});
  });
  return users;
}

export default getUsers(account);
