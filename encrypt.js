const { app, safeStorage } = require('electron');
const path = require('path');
const fs = require('fs');

async function main() {
  const userDataPath = path.join(__dirname, 'userData1');
  app.setPath('userData', userDataPath);

  await app.whenReady();

  const password = 'password';

  const encryptedPassword = safeStorage.encryptString(password);
  const decryptedPassword = safeStorage.decryptString(encryptedPassword); // this works
  console.log('decryptedPassword', decryptedPassword); // 'password'
  await fs.promises.writeFile(path.join(__dirname, 'encryptedPassword.txt'), encryptedPassword);
  app.quit();
}

try {
  main();
} catch (error) {
  console.error(error);
}
