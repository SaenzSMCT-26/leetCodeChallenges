function add2Numbers(arr1 = [3,5,2,6,9], target = 15){
    let emptyNotes = {};
    for(let i = 0; i < arr1.length; i++){
        let comp = target - arr1[i];
        let condition = emptyNotes[comp] !== undefined ? [emptyNotes[comp], i] : null;
        if(condition)return condition;
        emptyNotes[arr1[i]] = i;
    }
}
console.log(add2Numbers());