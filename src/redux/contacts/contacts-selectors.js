const getContacts = state => state.contacts.items;
const getFilterValue = state => state.contacts.filter;
export const contactsSelectors = { getContacts, getFilterValue };
