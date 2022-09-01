const getContacts = state => state.contacts.itemsNew;
const getFilterValue = state => state.contacts.filter;
export const contactsSelectors = { getContacts, getFilterValue };
