# electron-safe-storage-bug

Changing the `userData` path in Electron causes `electron-safe-storage` to fail to decrypt data?

To reproduce the bug, run the following commands:

```bash
1. pnpm i
2. pnpm encrypt
3. pnpm decrypt
```

To see it work, comment out the following lines in `encrypt.js` and `decrypt.js`:

```js
  const userDataPath = path.join(__dirname, 'userData1');
  app.setPath('userData', userDataPath);
```