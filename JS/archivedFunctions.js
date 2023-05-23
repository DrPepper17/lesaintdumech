function cleanseList (array) {
    for (let i=0;i<finishedList.length;i++) {
        if (array.includes(finishedList[i])) {
            let arrayIndex = array.indexOf(finishedList[i]);
            array.splice(arrayIndex,1);
        }
    }
    return array;
    console.log(array.sort()); 
}

