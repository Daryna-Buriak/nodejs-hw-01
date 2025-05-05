import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const db = await readContacts();
  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    db.push(contact);
  }
  await writeContacts(db);
};

generateContacts(5);
