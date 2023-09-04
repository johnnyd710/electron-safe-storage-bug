const { app, safeStorage } = require('electron');
const path = require('path');
const fs = require('fs');

async function main() {
  // const userDataPath = path.join(__dirname, 'userData1'); // uncomment this lines to see it work
  const userDataPath = path.join(__dirname, 'userData2'); // comment this line to see it work
  app.setPath('userData', userDataPath); 

  await app.whenReady();

  const encryptedPassword = await fs.promises.readFile(path.join(__dirname, 'encryptedPassword.txt'));

  const decryptedPassword2 = safeStorage.decryptString(encryptedPassword);
  console.log('decryptedPassword2', decryptedPassword2);
  app.quit();
}

try {
  main();
} catch (error) {
  console.error(error);
}

