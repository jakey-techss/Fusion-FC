const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
document.title = userInfo.Username;