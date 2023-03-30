const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function fetchUsers() {
  const userRecords = await admin.auth().listUsers();
  const users = userRecords.users.map((user) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
  }));
  return users;
}

module.exports = fetchUsers;
