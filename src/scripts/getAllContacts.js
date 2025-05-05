import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const db = await readContacts();
  return db;
};

console.log(await getAllContacts());
