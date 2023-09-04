const { app, safeStorage } = require('electron');
const path = require('path');
const fs = require('fs');

async function main() {
  const userDataPath = path.join(__dirname, 'userData1'); // uncomment this line to see it work (3/4)
  app.setPath('userData', userDataPath); // uncomment this line to see it work (4/4)

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

