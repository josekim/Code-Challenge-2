const FilterData = function FilterData(data, searchTerm) {
  return data.filter(
    instance => `${instance.sender} ${instance.domain} ${instance.email}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0
  );
};

export default FilterData;
