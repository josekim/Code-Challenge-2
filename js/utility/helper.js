function optionCheck(option, instance) {
  if (option === 'Show All') {
    return true;
  } else if (option === 'Organized') {
    return instance.organize === true;
  } else if (option === 'Unorganized') {
    return instance.organize === false;
  }
  return false;
}

const FilterData = function FilterData(data, searchTerm, option) {
  return data.filter(
    instance =>
      optionCheck(option, instance) &&
      `${instance.sender} ${instance.domain} ${instance.email}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0
  );
};

const newDataArray = function newDataArray(data, sender) {
  const newData = [];
  data.forEach(instance => {
    if (instance.sender !== sender) {
      newData.push(instance);
    } else if (instance.sender === sender) {
      const newInstance = Object.assign({}, instance, { organize: !instance.organize });
      newData.push(newInstance);
    }
  });
  return newData;
};

export { FilterData, newDataArray };
