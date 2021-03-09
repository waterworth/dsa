/**
 * Constructor Names
 *
 * Supposed you are creating a new programming language. This language will support OOP and to make it special, you want some
 * features of it to differ from the standard.
 *
 * In some languages, such as C or java, class constructor names are forced to have the same name as the class. Here you want to weaken this
 * restriction, and to allow constructor names to be acceptable as long as they're close to the class name. We will consider two strings close
 * if one can be obtained from the other, using the following operations:
 *  - swap any two symbols in one of the strings,
 *  - swap occurrences of any two existing symbols in one of the strings (for example, if your string contains both a's and b's , you can change all a's to b's)
 *
 *  Now you want to write a method that finds out whether the given methodName is considered close to the given className, by the definition above.
 *
 * Example
 *  For className = 'abbzccc' and methodName = 'babzzcz' the output should be constructorNames(className, methodName) = true
 *
 */

function constructorNames(className: string, methodName: string): boolean {
  const classMap: { [character: string]: number } = {};
  for (const character of className) {
    if (!(character in classMap)) classMap[character] = 0;
    classMap[character]++;
  }
  const methodMap: { [character: string]: number } = {};
  for (const character of methodName) {
    if (!(character in methodMap)) methodMap[character] = 0;
    methodMap[character]++;
  }

  for (const character of className) {
    if (methodMap[character] !== classMap[character]) return false;
  }

  return true;
}
