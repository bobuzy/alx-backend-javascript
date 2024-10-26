export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  const idx = reportWithIterator.length;
  for (let i = 0; i < idx; i++){
    string = string + reportWithIterator[i];
    if (i + 1 < idx){
        string = string + ' | ';
    }
  }
  return string;
}
