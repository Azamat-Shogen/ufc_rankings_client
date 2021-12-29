
export const createRows = (weight_classes, num, athltes_data) => {
    let outerList = []
    let current = 0
    for (let i = 0; i < num; i++){
        outerList.push(weight_classes.slice(current, current+4))
        current += 4
    }
   
    const result = outerList.map((innerList) => innerList.map((el => {
        const athletes = athltes_data.filter(fighter => fighter.weight_class === el.id)
        return {...el, athletes}
    })))
    
    return result
}


