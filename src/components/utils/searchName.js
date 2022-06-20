const searchName = (arr, string) => {
  const str = string.toLowerCase();
  const length = str.length;
  let filteredArr = arr.filter(
    (person) => str === person.firstName.toLowerCase().slice(0, length)
  );

  return filteredArr;
};

export default searchName;
