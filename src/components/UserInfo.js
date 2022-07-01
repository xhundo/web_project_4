class UserInfo {
  constructor() {
    this._userName = document.querySelector("#profile-name");
    this._userJob = document.querySelector("#profile-about");
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
