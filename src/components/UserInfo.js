class UserInfo {
  constructor(userName, userJob, containerSelector) {
    this._userName = document.querySelector("#modal-name");
    this._userJob = document.querySelector("#modal-description");
    this.container = document.querySelector(containerSelector);
  }

  getUserInfo() {
    const userData = {};

    userData.forEach((name, job) => {
      userData[name] = name.value;
      userData[job] = job.value;
    });

    return userData;
  }

  setUserInfo(userData) {
    this.container.append(userData);
  }
}

export default UserInfo;
