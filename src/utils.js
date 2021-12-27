import axios from "axios";

export const createRows = (arr, num) => {
    let outerList = []
    let current = 0
    for (let i = 0; i < num; i++){
        outerList.push(arr.slice(current, current+4))
        current += 4
    }

    return outerList
}

export const fetchWeightClassesData = async () => {
    try{
        const data = await axios.get(process.env.REACT_APP_API_WEIGHTCLASSES)
            .then(res => res.data)
        return data
    }catch (err){
        console.log(err)
        return []
    }
}

export const fetchAthletesData = async () => {
    try{
        const data = await axios.get(process.env.REACT_APP_API_ATHLETES)
            .then(res => res.data)
        return data
    }catch (err){
        console.log(err)
        return []
    }
}