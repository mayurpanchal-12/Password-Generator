export default function usePasswordLogic(length, includeChar, includeNum) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "#$%^!@*()";

  let charset = "";
  if (includeChar) charset += letters;
  if (includeNum) charset += numbers;

  let pass = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * charset.length);
    pass += charset[index];
  }

  return pass;
}
