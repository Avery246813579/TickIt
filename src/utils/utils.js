const RANDOM_STRING_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

/**
 *
 * @param length
 */
export function randomString(length) {
  let result = "";

  for (let i = 0; i < length; i++) {
    result += RANDOM_STRING_CHARSET.charAt(
      Math.floor(Math.random() * RANDOM_STRING_CHARSET.length)
    );
  }

  return result;
}
