//Document Elements
var mode = "None";
var lastMode = "None";
var active = -1;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var slider = document.getElementById("slider");
var slideSpeed = document.getElementById("slideSpeed");
var slideText = document.getElementById("choice");
var speedText = document.getElementById("speed");
var await = 0;
var await2 = 0;
var size = 10;
var speed = 3;
var minIndex = -1;
slideText.innerHTML = size;
speedText.innerHTML = speed;
var arr = reset(size ,[]);
var visited = [];
var iterated = [];
var selector = document.getElementById('Sorting Method');
var buttonSort = document.getElementById('Sort');
var buttonGen = document.getElementById('New');
var buttonStop = document.getElementById('Stop');

//Used to pick a random sorting method
function randomize() {
    mode = "None";
    arr = reset(arr.length);
    rand = Math.floor(Math.random() * 13);
    if (rand == 0) {
        buttonQuick();
    }
    else if (rand == 1) {
        buttonSelection();
    }
    else if (rand == 2) {
        buttonBubble();
    }
    else if (rand == 3) {
        buttonMerge();
    }
    else if (rand == 4) {
        buttonShell();
    }
    else if (rand == 5) {
        buttonCocktail();
    }
    else if (rand == 6) {
        buttonGnome();
    }
    else if (rand == 7) {
        buttonBogo();
    }
    else if (rand == 8) {
        buttonKnow();
    }
    else if (rand == 9) {
        buttonKnow2();
    }
    else if (rand == 10) {
        buttonCool();
    }
    else if (rand == 11) {
        buttonGravity();
    }
    else if (rand == 12) {
        buttonQ();
    }
}

//Queues the selected sorting method
buttonSort.onclick = function() {
    let method = selector.value;
    if (method == 'Quick Sort') {
        buttonQuick();
    }
    if (method == 'Gravity Sort') {
        buttonGravity();
    }
    if (method == 'Selection Sort') {
        buttonSelection();
    }
    if (method == 'Bubble Sort') {
        buttonBubble();
    }
    if (method == 'Merge Sort') {
        buttonMerge();
    }
    if (method == 'Shell Sort') {
        buttonShell();
    }
    if (method == 'Cocktail Sort') {
        buttonCocktail();
    }
    if (method == 'Gnome Sort') {
        buttonGnome();
    }
    if (method == 'Bogo Sort') {
        buttonBogo();
    }
    if (method == 'Know Sort') {
        buttonKnow();
    }
    if (method == "Know Sort 2") {
        buttonKnow2();
    }
    if (method == "Cool Sort") {
        buttonCool();
    }
    if (method == "QS") {
        buttonQ();
    }
    if (method == "Random") {
        randomize();
    }
}

//Re-randomizes the array
buttonGen.onclick = function() {
    minIndex = -1;
    lastMode = mode;
    mode = "None";
    arr = reset(arr.length);
}

//Halts the sorting process
buttonStop.onclick = function() {
    if (mode == "Cool") {
        await = 1;
    }
    if (mode == "Select") {
        await2 = 1;
    }
    lastMode = mode;
    mode = "None";  
}

//function used for re-randomizing array based on value
function reset(size, ar = []) {
    nums = [];
    slide = false;
    if (ar == "") {
        for (let i = 1; i <= size; i++) {
            nums.push(i);
            slide = true;
        }
        while (nums.length > 0) {
            const random = Math.floor(Math.random() * nums.length);
            ar.push(nums[random]);
            nums.splice(random, 1);
        }
    }

    ctx.clearRect(0, 0, c.width, c.height);
    for (let i = 0; i < size; i++) {
        ctx.fillStyle = 'white';
        if (i == active) {
            ctx.fillStyle = 'blue';
        }
        else if (i == minIndex) {
            ctx.fillStyle = 'red';
        }
        else if (i == ar[i] - 1) {
            ctx.fillStyle = 'purple';
        }
        ctx.fillRect(i * (1400 / size), 0, 1400 / size, 600 / (size) * ar[i]);
    }
    return ar;
}

/*
buttonResume.onclick = function() {
    if (lastMode != "None") {
        mode = lastMode;
    }
    if (mode == "Quick") {
        quicksort();
    }
    else if (mode == "Bubble") {
        bubblesort();
    }
    else if (await2 == 1) {
        await2 = 0;
        mode = "Select";
        selectionsort();
    }
    else if (mode == "Merge") {
        visited = [];
        iterated = [];
        for (let i = 0; i < arr.length; i++) {
            iterated.push(0);
            visited.push(0);
        }
        mergesort(0, arr.length - 1);
    }
    else if (mode == "Know") {
        knowSort();
    }
    else if (mode == "Know2") {
        knowSort2();
    }
    else if (await == 1) {
        await = 0;
        mode = "Cool";
        coolSort();
    }
}
*/


//manages the process for each sorting method onclick
function buttonQ() {
    minIndex = -1;
    if (mode != "QS") {
        lastMode = mode;
        mode = "QS";
        qsort(0, arr.length - 1);
    }
}
function buttonQuick() {
    minIndex = -1;
    if (mode != "Quick") {
        lastMode = mode;
        mode = "Quick";
        quicksort();
    }
}
function buttonBubble() {
    minIndex = -1;
    if (mode != "Bubble") {
        lastMode = mode;
        mode = "Bubble";
        bubblesort();
    }
}
function buttonGravity() {
    minIndex = -1;
    if (mode != "Gravity") {
        lastMode = mode;
        mode = "Gravity";
        gravitysort();
    }
}
function buttonSelection() {
    minIndex = -1;
    if (mode != "Select") {
        lastMode = mode;
        mode = "Select";
        selectionsort();
    }
}
function buttonBogo() {
    minIndex = -1;
    if (mode != "Bogo") {
        lastMode = mode;
        mode = "Bogo";
        bogosort();
    }
}
function buttonMerge() {
    minIndex = -1;
    if (mode != "Merge") {
        lastMode = mode;
        mode = "Merge";
        visited = [];
        iterated = [];
        for (let i = 0; i < arr.length; i++) {
            iterated.push(0);
            visited.push(0);
        }
        mergesort(0, arr.length - 1);
    }
}
function buttonShell() {
    minIndex = -1;
    if (mode != "Shell") {
        lastMode = mode;
        mode = "Shell";
        shellsort();
    }
}
function buttonCocktail() {
    minIndex = -1;
    if (mode != "Cocktail") {
        lastMode = mode;
        mode = "Cocktail";
        cocktailsort();
    }
}
function buttonGnome() {
    minIndex = -1;
    if (mode != "Gnome") {
        lastMode = mode;
        mode = "Gnome";
        gnomesort();
    }
}
function buttonKnow() {
    minIndex = -1;
    if (mode != "Know") {
        lastMode = mode;
        mode = "Know";
        knowSort();
    }
}
function buttonKnow2() {
    minIndex = -1;
    if (mode != "Know2") {
        lastMode = mode;
        mode = "Know2";
        knowSort2();
    }
}
function buttonCool() {
    minIndex = -1;
    if (mode != "Cool") {
        lastMode = mode;
        mode = "Cool";
        coolSort();
    }
}

//Adjusts speed and size sliders
slider.oninput = function() {
    minIndex = -1;
    lastMode = mode;
    mode = "None";
    slideText.innerHTML = this.value;
    size = this.value;
    ctx.clearRect(0, 0, c.width, c.height);
    arr = reset(size);
}
slideSpeed.oninput = function() {
    speedText.innerHTML = this.value;
    speed = this.value;
}

//Quicksort process
async function qsort(first, last) {
    if (first < last) {
        let pivIndex = await partition(first, last);
        await qsort(first, pivIndex - 1);
        await qsort(pivIndex + 1, last);
    }
    reset(arr.length, arr);
}
async function partition(first, last) {
    if (mode != "QS") {
        print(hi);
    }
    let pivot = arr[first];
    let up = first;
    let down = last;
    do {
        while (up < last && pivot >= arr[up]) { up++; }
        while (pivot < arr[down]) { down--; }
        if (up < down) {
            if (speed == 1) {
                await sleep(300);
            }
            else if (speed == 2) {
                await sleep(100);
            }
            else if (speed == 3) {
                await sleep(20);
            }
            else if (speed == 4) {
                await sleep(5);
            }
            else {
                await sleep(1);
            }
            let temp = arr[up];
            arr[up] = arr[down];
            arr[down] = temp;
            reset(arr.length, arr);
        }
    } while (up < down);
        if (speed == 1) {
            await sleep(300);
        }
        else if (speed == 2) {
            await sleep(100);
        }
        else if (speed == 3) {
            await sleep(20);
        }
        else if (speed == 4) {
            await sleep(5);
        }
        else {
            await sleep(1);
        }
    let temp = arr[first];
    arr[first] = arr[down];
    arr[down] = temp;
    reset(arr.length, arr);
    return down;
}

//bogosort process
async function bogosort() {
    let originalSize = arr.length;
    let i = arr.length - 1;
    let addOn = [];
    while (!isSorted()) {
        if (mode != "Bogo") {
            break;
        }
        if (speed == 1) {
            await sleep(300);
        }
        else if (speed == 2) {
            await sleep(100);
        }
        else if (speed == 3) {
            await sleep(20);
        }
        else if (speed == 4) {
            await sleep(5);
        }
        else {
            await sleep(1);
        }
        if (arr[i] - 1 == i) {
            newArr = [i + 1];
            addOn = newArr.concat(addOn);
            i--;
        }
        arr = reset(arr.length - (arr.length - 1 - i)).concat(addOn);
        reset(arr.length, arr);
    }
}

//gravity sort process
async function gravitysort() {
    max = Math.max.apply(Array, arr);
    beads = [];
    for (let i = 0; i < max; i++) {
        beads[i] = []
        for (let j = max; j > arr[i]; j--) {
            beads[i].push(0);
        }
        while (beads[i].length < max) {
            beads[i].push(1);
        }
    }
    for (let i = 0; i < beads.length; i++) {
        if (mode != "Gravity") {
            break;
        }
        let grav = false;
        while (!grav) {
            if (mode != "Gravity") {
                break;
            }
            for (let j = 0; j < max - 1; j++) {
                if (mode != "Gravity") {
                    break;
                }
                if (beads[j][i] == 1) {
                    if (beads[j + 1][i] == 0) {
                        active = j;
                        beads[j][i] = 0;
                        beads[j + 1][i] = 1;
                    }
                }
            }
            grav = true;
            let one = false;
            for (let j = 0; j < max - 1; j++) {
                if (mode != "Gravity") {
                    break;
                }
                if (beads[j][i] == 1) {
                    one = true;
                }
                else {
                    if (one) {
                        grav = false;
                    }
                }
            }
        }
        await grav_helper();
    }
    await grav_helper();
}
async function grav_helper() {
    if (speed == 1) {
        await sleep(500);
    }
    else if (speed == 2) {
        await sleep(100);
    }
    else if (speed == 3) {
        await sleep(20);
    }
    else if (speed == 4) {
        await sleep(5);
    }
    else {
        await sleep(1);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0;
        for (let j = 0; j < arr.length; j++) {
            arr[i] += beads[i][j];
        }
    }
    reset(arr.length, arr);
}

//shellsort process
async function shellsort() {
    for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) {
        if (mode != "Shell") {
            break;
        }
        for (let j = i; j < arr.length; j++) {
            if (mode != "Shell") {
                break;
            }
            active = j;
            let temp = arr[j];
            let k;
            for (k = j; k >= i && arr[k - i] > temp; k -= i) {
                if (mode != "Shell") {
                    break;
                }
                active = k;
                if (speed == 1) {
                    await sleep(500);
                }
                else if (speed == 2) {
                    await sleep(100);
                }
                else if (speed == 3) {
                    await sleep(20);
                }
                else if (speed == 4) {
                    await sleep(5);
                }
                else {
                    await sleep();
                }
                arr[k] = arr[k - i];
                reset(arr.length, arr);
            }
            arr[k] = temp;
            reset(arr.length, arr);
        }
    }
}

//Optimized insertion sort process
async function bin_search(arr, val, start, end) {
    active = start;
    reset(arr.length, arr);
    while (mode == "Quick") {
        if (speed == 1) {
            await sleep(500);
        }
        else if (speed == 2) {
            await sleep(100);
        }
        else if (speed == 3) {
            await sleep(20);
        }
        else if (speed == 4) {
            await sleep(5);
        }
        else {
            await sleep();
        }
        if (start == end) {
            if (arr[start] > val) {
                return start;
            }
            else {
                return start + 1;
            }
        }
        if (start > end) {
            return start;
        }
        var mid = Math.floor((start + end) / 2);
        if (arr[mid] < val) {
            return bin_search(arr, val, mid + 1, end);
        }
        else if (arr[mid] > val) {
            return bin_search(arr, val, start, mid - 1);
        }
        else {
            return mid;
        }
    }
}
async function quicksort() {
    let i = 0;
    while (i < arr.length) {
        active = i;
        if (mode != "Quick") {
            break;
        }
        let val = arr[i];
        let j = await bin_search(arr, val, 0, i - 1);
        let slice2 = arr.slice(j, i);
        let slice3 = arr.slice(i + 1);
        arr = arr.slice(0, j);
        arr.push(val);
        arr = arr.concat(slice2);
        arr = arr.concat(slice3);
        reset(arr.length, arr);
        i++;
    }
    lastMode = mode;
    mode = "None";
    active = -1;
}
async function swap(a, b) {
    if (speed == 1) {
        await sleep(500);
    }
    else if (speed == 2) {
        await sleep(100);
    }
    else if (speed == 3) {
        await sleep(50);
    }
    else if (speed == 4) {
        await sleep(10);
    }
    else {
        await sleep(1);
    }
    temp1 = arr[a];
    arr[a] = arr[b];
    arr[b] = temp1;
}
async function swapKnow(a, b) {
    if (speed == 1) {
        await sleep(500);
    }
    else if (speed == 2) {
        await sleep(100);
    }
    else if (speed == 3) {
        await sleep(30);
    }
    else if (speed == 4) {
        await sleep(5);
    }
    else {
        await sleep(1);
    }
    temp1 = arr[a];
    arr[a] = arr[b];
    arr[b] = temp1;
}

//bubblesort process
async function bubblesort() {
    for (let i = 0; i < arr.length; i++) {
        sorted = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            active = j;
            if (arr[j] > arr[j + 1]) {
                await swap(j, j + 1);
                reset(arr.length, arr);
                sorted = false;
            }
            if (mode != "Bubble") {
                break;
            }
        }
        if (mode != "Bubble") {
            break;
        }
        if (sorted) {
            break;
        }
    }
    lastMode = mode;
    mode = "None";
    active = -1;
}

//selectionsort process
async function selectionsort() {
    for (let i = 0; i < arr.length; i++) {
        if (mode != "Select") {
            break;
        }
        minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (mode != "Select") {
                break;
            }
            active = j;
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
            await swap(1, 1);
            reset(arr.length, arr);
        }
        await swap(i, minIndex);
        reset(arr.length, arr);
    }
    lastMode = mode;
    mode = "None";
    active = -1;
}

//mergesort process
async function merge(start, end) {
    let mid = Math.floor((start + end) / 2);
    let startOne = start;
    let startTwo = mid + 1;
    let endOne = mid;
    let endTwo = end;
    let index = start;
    while (startOne <= endOne && startTwo <= endTwo) {
        if (mode != "Merge") {
            break;
        }
        if (arr[startOne] <= arr[startTwo]) {
            iterated[index] = arr[startOne];
            index++;
            startOne++;
        }
        else if(arr[startOne] > arr[startTwo]) {
            iterated[index] = arr[startTwo];
            index++;
            startTwo++;
        }
    }
    while (startOne <= endOne) {
        if (mode != "Merge") {
            break;
        }
        iterated[index] = arr[startOne]
        index++;
        startOne++;
    }
    while (startTwo <= endTwo) {
        if (mode != "Merge") {
            break;
        }
        iterated[index] = arr[startTwo];
        index++;
        startTwo++;
    }
    index = start
    while (index < end + 1) {
        active = index;
        if (mode != "Merge") {
            break;
        }
        arr[index] = iterated[index];
        if (speed == 1) {
            await sleep(200);
        }
        else if (speed == 2) {
            await sleep(50);
        }
        else if (speed == 3) {
            await sleep(10);
        }
        else if (speed == 4) {
            await sleep(5);
        }
        else {
            await sleep(1);
        }
        reset(arr.length, arr);
        index++;
    }
}
async function mergesort(start, end) {
    if (mode == "Merge") {
        if (start < end) {
            let mid = Math.floor((start + end) / 2);
            await mergesort(start, mid);
            await mergesort(mid + 1, end);
            await merge(start, end);
            reset(arr.length, arr);
        }
    }
}

//cocktail sort process
async function cocktailsort() {
    let recurse = 0;
    while (!isSorted()) {
        if (mode != "Cocktail") {
            break;
        }
        if (recurse % 2 == 0) {
            for (let i = 0; i < arr.length - 1; i++) {
                if (mode != "Cocktail") {
                    break;
                }
                reset(arr.length, arr);
                active = i
                if (arr[i] > arr[i + 1]) {
                    await swap(i, i + 1);
                }
            }
        }
        else {
            for (let i = arr.length - 1; i > 0; i--) {
                if (mode != "Cocktail") {
                    break;
                }
                reset(arr.length, arr);
                active = i
                if (arr[i] < arr[i - 1]) {
                    await swap(i, i - 1);
                }
            }
        }
        recurse++;
    }
    lastMode = mode;
    mode = "None";
    active = -1;
}

//gnomesort process
async function gnomesort() {
    for (var i = 0; i < arr.length; i++) {
        if (mode != "Gnome") {
            break;
        }
        for (var j = i; j > 0; j--) {
            if (mode != "Gnome") {
                break;
            }
            active = j;
            if (arr[j] < arr[j - 1]) {
                if (mode != "Gnome") {
                    break;
                }
                await swap(j, j - 1);
                reset(arr.length, arr);
            }
        }
    }
}

//knowssort process
function isSorted() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != i + 1) {
            return false;
        }
    }
    return true;
}
async function knowSort() {
    for (let i = 0; i < arr.length; i++) {
        active = i;
        while (arr[i] != i + 1) {
            if (mode != "Know") {
                break;
            }
            await swapKnow(i, arr[i] - 1);
            reset(arr.length, arr);
        }
        if (mode != "Know") {
            break;
        }
    }
    lastMode = mode;
    mode = "None";
    active = -1;
}

//knowsort2 process
async function knowSort2() {
    sorted = false;
    while (!sorted) {
        if (mode != "Know2") {
            break;
        }
        sorted = true;
        for (let i = 0; i < arr.length; i++) {
            active = i;
            if (mode != "Know2") {
                break;
            }
            if (arr[arr[i] - 1] > arr[i]) {
                sorted = false;
            }
            await swapKnow(i, arr[i] - 1);
            reset(arr.length, arr);
        }
    }
    lastMode = mode;
    mode = "None";
    active = -1;
}

//coolsort process
async function coolSort() {
    for (let i = 0, j = arr.length - 1; i < j; i++) {
        if (mode != "Cool") {
            break;
        }
        await swapKnow(i, arr.indexOf(i + 1));
        active = i;
        reset(arr.length, arr);
        await swapKnow(j, arr.indexOf(j + 1));
        active = j;
        reset(arr.length, arr);
        j--;
    }
    lastMode = mode;
    mode = "None";
    active = -1;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
