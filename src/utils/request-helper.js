/**
 * A more detailed error that will be sent to the client
 *
 * @param error {String}                      The error string
 * @param data {Object}                       An object with extra information
 */
export function detailedError(error, data = null) {
  const errorPayload = {
    error,
  };

  if (data !== null) {
    errorPayload.data = data;
  }

  return Promise.reject(errorPayload);
}
