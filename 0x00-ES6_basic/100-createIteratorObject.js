export default function createIteratorObject(report) {
  if (!report || !report.allEmployees) {
    return [];
  }

  const idx = report.getNumberOfDepartments(report.allEmployees);
  const iterable = [];
  const keys = Object.keys(report.allEmployees);

  for (let i = 0; i < idx; i++) {
    if (keys[i]) {
      iterable.push(...report.allEmployees[keys[i]]);
    }
  }
  
  return iterable;
}
