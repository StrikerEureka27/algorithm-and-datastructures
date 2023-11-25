/*
 * Given an array of integers, sort array.
 * [ -6, 20, 8, -2, 4 ]
 * 
 */

function insertionSort(arr) {

    let se = arr[0];
    let nti = arr[1];
    for (let i = 0; i < arr.length - 1; i++) {

        console.log("Iteration: " + i);
        console.log("Sorted element: " + se);
        console.log("Number to insert: " + nti);

        if (se < nti) {
            se = nti;
            console.log("No shift");
            console.log("");
        } else {
            nti = arr[i + 1 ];
            console.log("new nti: " + nti );
            console.log("Shifting " + arr[i + 1] + " by " + se);
            arr[i + 1] = se;
            console.log("arr after shift: " + arr);
            console.log("Evaluation nti");
            if(se>nti){
                arr[i]= nti;
            }
            console.log("arr after evaluation: " + arr);
        }

    };

    return arr;
};

console.log(insertionSort([-6, 20, 8, -2, 4]));