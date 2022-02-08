import crypto from "crypto";

// Tables
import Passwords from "../../tables/security/passwords";

// Utils
import {randomString} from "../../utils/utils";
import {detailedError} from "../../utils/request-helper";

/**
 * Validates a password against the active password in the database
 *
 * @param account {Object}                    Account object
 * @param params
 * @param params.PASSWORD {String}
 */
export async function validatePassword(account, params) {
  const {PASSWORD: password} = params;

  const serverPassword = await Passwords.findOne({
    ACCOUNT_ID: account.ID,
    DATE_ARCHIVED: null,
  });

  if (serverPassword === null) {
    return detailedError("PASSWORD_INVALID");
  }

  const hash = fetchPasswordHash(password, serverPassword.CONTENT);

  if (hash !== serverPassword.CONTENT) {
    return detailedError("PASSWORD_INVALID");
  }
}

/**
 * Sets up a password
 *
 * @param account {Object}              Account object
 * @param params
 * @param params.PASSWORD {String}      Password to be set
 *
 * @returns {Promise<void>}
 */
export async function setupPassword(account, params) {
  const {PASSWORD: password} = params;

  // Invalidate any passwords that are being used
  await Passwords.update(
    {DATE_ARCHIVED: Date.now()},
    {
      ACCOUNT_ID: account.ID,
      DATE_ARCHIVED: null,
    }
  );

  const salt = randomString(32);
  const hash = fetchPasswordHash(password, salt);

  const passwordPayload = {
    ACCOUNT_ID: account.ID,

    CONTENT: hash,
    SALT: salt,

    DATE_CREATED: Date.now(),
    DATE_ARCHIVED: null,
  };

  passwordPayload.ID = await Passwords.insert(passwordPayload);
}

/**
 * Converts a password and salt into a 128 character hash using sha512
 *
 * @param password {String}       Raw password string
 * @param salt {String}           Salt to be added to password
 *
 * @return {String}               The hashed password
 */
export function fetchPasswordHash(password, salt) {
  return crypto
    .createHash("sha512")
    .update(password + salt)
    .digest("hex")
    .toUpperCase();
}
