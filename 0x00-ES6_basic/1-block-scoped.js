/* modified the initial function, to prevent overidding
   of the varaibles in the if block
 */

export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      const task = true;
      const task2 = false;
    }
    return [task, task2];
}
