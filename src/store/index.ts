import { makeAutoObservable, observable, action } from 'mobx';

export type USER_INFO = {
  name: string;
};
class Login {
  userInfo = {
    name: '',
  };

  changeUserInfo(userInfo: USER_INFO) {
    this.userInfo = { ...userInfo };
  }

  removeUserInfo() {
    this.userInfo = { name: '' };
  }

  constructor() {
    makeAutoObservable(this, {
      userInfo: observable,
      changeUserInfo: action.bound,
      removeUserInfo: action.bound,
    });
  }
}

export default new Login();
