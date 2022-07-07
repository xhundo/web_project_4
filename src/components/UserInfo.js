class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._userName = nameSelector;
    this._userJob = jobSelector;
  }

  getUserInfo() {
    const userData = {};
    userData.userName = this._userName.textContent;
    userData.userJob = this._userJob.textContent;
    return userData;
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.userName;
    this._userJob.textContent = userData.userJob;
  }
}

export default UserInfo;
