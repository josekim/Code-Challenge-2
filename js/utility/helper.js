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

const newDataArrayChecked = function newDataArrayChecked(data, sender, checked) {
  const newData = [];
  data.forEach(instance => {
    if (instance.sender !== sender) {
      newData.push(instance);
    } else if (instance.sender === sender) {
      const newInstance = Object.assign({}, instance, { organize: checked });
      newData.push(newInstance);
    }
  });
  return newData;
};
const newDataArrayFolder = function newDataArrayFolder(data, sender, value) {
  const newData = [];
  data.forEach(instance => {
    if (instance.sender !== sender) {
      newData.push(instance);
    } else if (instance.sender === sender) {
      const newInstance = Object.assign({}, instance, { folder: value });
      newData.push(newInstance);
    }
  });
  return newData;
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const newFolderArray = function newFolderArray(data) {
  const newData = [];
  data.forEach(instance => {
    newData.push(instance.folder);
  });
  const uniq = newData.filter(onlyUnique);
  return uniq;
};

export { FilterData, newDataArrayChecked, newDataArrayFolder, newFolderArray };
