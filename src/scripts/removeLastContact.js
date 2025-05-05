import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const db = await readContacts();
  const lastEl = db.pop();
  await writeContacts(db);
};

removeLastContact();
