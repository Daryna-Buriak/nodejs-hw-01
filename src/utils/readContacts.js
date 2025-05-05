import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const fileContent = await readFile(PATH_DB, 'utf-8');
    const parsedContent = JSON.parse(fileContent);
    return parsedContent;
  } catch (error) {
    console.log('Error reading contacts:', error);
  }
};
