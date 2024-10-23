export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* Create local variables */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* Return the initial task and task2 */

  return [task, task2];
}
