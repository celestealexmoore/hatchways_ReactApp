function findAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += Number(grades[i]);
  }
  let average = sum / grades.length;
  return Math.round(average);
}

export default findAverage;
