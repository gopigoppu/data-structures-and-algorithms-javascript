//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined



function firstRecurringCharacterUsingHashMap(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        // checking if character already available in map object, because we need to return first recurring char.
        if (map[input[i]] !== undefined) {
            return input[i];
        } else {
            // if char not available in hash, adding new char in map object
            map[input[i]] = i;
        }
    }
    // returing undefined if none of recurring chars in given input
    return undefined;
}

console.log(firstRecurringCharacterUsingHashMap([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacterUsingHashMap([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacterUsingHashMap([2, 3, 4, 5]));




function firstRecurringCharacterUsingNative(input) {
    let res = null;
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j] && (!res || (j < res.position))) {
                res = {
                    position: j,
                    value: input[i]
                };
            }
        }
    }
    return res ? res.value : undefined;
}

console.log(firstRecurringCharacterUsingNative([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacterUsingNative([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacterUsingNative([2, 3, 4, 5]));