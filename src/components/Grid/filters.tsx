export const stringFilter = {
    filterOptions: ['contains'],
    textMatcher: (column:any) => {
      return column.value.includes(column.filterText)
    },
    trimInput: true,
    debouceMs: 1000,
  }
  
  export const dateFilter = {
    comparator: (filterDate:any, cellValue:any) => {
      const formattedFilterDate =  new Date(filterDate).toLocaleDateString();
      const formattedCellValue = new Date(cellValue).toLocaleDateString();
      if(formattedFilterDate === formattedCellValue){
        return 0;
      }else if(formattedFilterDate <= formattedCellValue){
        return -1;
      }else {
        return 1;
      }
    }
  }
  
  export const numberFilter = {
    numberParser: (text:any) => {
      return text === null ? null : text;
    }
  }