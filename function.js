  //Convert Function to convert an array into array of words with their frequency

  let convert = function(data, N){
    data = data.toLowerCase(); //So that 'You' and 'you are not considered as different words'
    let arr = data.split(/[^a-z']+/); //Words contain only letters and apostrophe. Splitting the array on the basis of every other character found.
    let freq = frequency(arr); // Calling frequency function to calculate frequency
    let sorted = [];
    while(freq.length > 0){
      sorted.push(freq.splice(0,2)); //Binding the word and its frequency in a nested array
    }
    sorted.sort(function(a, b) //Sorting the array
    {
      return b[1]-a[1]; // comparing frequency
    });
    return sorted.slice(0, N);
  }

  //Function to calculate the frequency of words in an array

  let frequency = function(arr){
    let freq = [];//
    for(index in arr){
      let word = arr[index];
      if(freq.includes(word)){
        freq[freq.indexOf(word) + 1]++;
      }
      else {
        freq.push(word, 1);
      }
    }
    return freq;
  }

module.exports = {
  convert, frequency
}
