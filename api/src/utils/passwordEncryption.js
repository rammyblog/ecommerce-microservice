import bcrypt from 'bcryptjs';

async function passwordEncrypt(rawPassword) {
  const SALT = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(rawPassword, SALT);
  return encryptedPassword;
}

export default passwordEncrypt;
