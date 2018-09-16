class Sorter {
  constructor () {
      this.name = [];
      this.comFun = function (a,b){
        if (a>b) return 1;
        if (a<b) return -1;
        };
                  
  };
  
  add (element){
      this.name.push(element)
  };
  
  at(index) {
      return this.name[index];
    };
    
  get length () {
  return this.name.length;
  };
  
  toArray () {
  return this.name
  };
  
  sort(indices) {
  var tempArray =[];
const sortFunction = (left, right) => left - right;
indices.sort(sortFunction);

  for (var i =0; i<indices.length; i++){
tempArray[i] = this.name[indices[i]];
  };
  //
  tempArray.sort(this.comFun);
  //
  for (var j =0; j<indices.length; j++){
  this.name[indices[j]] = tempArray[j];
  };
  //
  };
  
  setComparator (compareFunction) {
  this.comFun = compareFunction;
  };
   
  };

module.exports = Sorter;