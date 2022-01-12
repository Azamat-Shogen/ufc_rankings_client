import axios from "axios";

export const fetchWeightClassesData = async () => {
    try{
        // TODO: for deployment use
        const data = await axios.get(process.env.REACT_APP_FEED_WEIGHTCLASSES)
        // TODO: for local use
        //const data = await axios.get(process.env.REACT_APP_API_WEIGHTCLASSES)
            .then(res => res.data)
        return data
    }catch (err){
        console.log(err)
        return []
    }
}

export const fetchAthletesData = async () => {
    try{
        // TODO: for deployment use
        const data = await axios.get(process.env.REACT_APP_FEED_ATHLETES_ALL)
        // TODO: for local use
        // const data = await axios.get(process.env.REACT_APP_API_ATHLETES_ALL)
            .then(res => res.data)
        return data
    }catch (err){
        console.log(err)
        return []
    }
}