
export const createRows = (arr, num) => {
    let outerList = []
    let current = 0
    for (let i = 0; i < num; i++){
        outerList.push(arr.slice(current, current+4))
        current += 4
    }

    return outerList
}