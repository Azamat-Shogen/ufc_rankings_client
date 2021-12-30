
// TODO: even out the names in a column
export const athletesNamesMod = (arr) => {
    const names = arr.map(el => el.athlete_name)
    const maxNameLength = Math.max(...names.map(el => el.length))

    const newList = arr.map(el => {
        while(el.athlete_name.length < maxNameLength+1){
           el.athlete_name += " "
        }
        return {...el, athlete_name: ` ${el.athlete_name}`}
    })

    return newList
}

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
