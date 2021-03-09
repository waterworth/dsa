/**
 * Valid IP Addresses - Medium
 *
 * You're given a string of length 12 or smaller, containing only digits.
 * Write a function that returns all the possible IP addresses that can
 * be created by inserting three `.`s, where each individual integer
 * is within the range 0 - 255, inclusive.
 *
 * An IP address isn't valid if any of the indivudual integers contains
 * leading 0s. For example, `192.168.0.1` is a valid IP address, but
 * `192.168.00.1` isnt because it contains `00`. Another example of a valid
 * IP address is `99.1.1.10`. `991.1.1.0` is not valid because 991 > 255.
 *
 * The function should return the IP address in the string format and in
 * no particular order. If no valid IP address can be created from the
 * string, the function should return an empty list.
 *
 * Sample Input
 * string = '1921680'
 *
 * Sample Output
 * [
 *  '1.9.216.80',
 *  '1.92.16.80',
 *  '1.92.168.0',
 *  '19.2.16.80',
 *  '19.2.168.0',
 *  '19.21.6.80',
 *  '19.2.168.0',
 *  '19.216.8.0',
 *  '192.1.6.80',
 *  '192.1.68.0',
 *  '192.16.8.0',
 * ]
 */

// Time Complexity: O(1) || Space Complexity: O(1)

export function validIPAddresses(string: string) {
  const ipAddressFound: string[] = [];

  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const currentParts = ['', '', '', ''];

    currentParts[0] = string.slice(0, i);
    if (!isValidPart(currentParts[0])) continue;

    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      currentParts[1] = string.slice(i, j);
      if (!isValidPart(currentParts[1])) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentParts[2] = string.slice(j, k);
        currentParts[3] = string.slice(k);

        if (isValidPart(currentParts[2]) && isValidPart(currentParts[3])) {
          ipAddressFound.push(currentParts.join('.'));
        }
      }
    }
  }
  return ipAddressFound;
}

function isValidPart(string: string) {
  const stringAsInt = parseInt(string);
  if (stringAsInt > 255) return false;
  // check for leading 0s
  return string.length === stringAsInt.toString().length;
}
