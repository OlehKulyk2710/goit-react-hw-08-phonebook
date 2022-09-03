const getIsLoggedIn = state => state.contacts.auth.isLoggedIn;
const getFetchingUserName = state => state.contacts.auth.fetchingCurrentUser;
const getUserName = state => state.contacts.auth.user.name;

export const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getFetchingUserName,
};
