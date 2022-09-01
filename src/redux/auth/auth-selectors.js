const getIsLoggedIn = state => state.contacts.auth.isLoggedIn;

const getUserName = state => state.contacts.auth.user.name;

export const authSelectors = { getIsLoggedIn, getUserName };
