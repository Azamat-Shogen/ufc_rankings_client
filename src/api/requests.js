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

export const fetchRankingsAthletesData = async () => {
    try{
        // TODO: for deployment use
        const data = await axios.get(process.env.REACT_APP_FEED_ATHLETES_RANKINGS)
            // TODO: for local use
           // const data = await axios.get(process.env.REACT_APP_API_ATHLETES_RANKINGS)
            .then(res => res.data)
        return data
    }catch (err){
        console.log(err)
        return []
    }
}

export const fetchAthletesData = async (page) => {
    try{
        // TODO: for deployment use
       const data = await axios.get(`${process.env.REACT_APP_FEED_ATHLETES_ALL}/${page}`)
            // TODO: for local use
           // const data = await axios.get(`${process.env.REACT_APP_FIGHTERS_ALL}/${page}`)
            .then(res => res.data)
        return data

    } catch (err){
        console.log(err)
        return []
    }
}

export const fetchMenData = async (page) => {
    try{
        // TODO: for deployment use
        const data = await axios.get(`${process.env.REACT_APP_FEED_FIGHTERS_MEN}/${page}`)
            // TODO: for local use
           // const data = await axios.get(`${process.env.REACT_APP_FIGHTERS_MEN}/${page}`)
            .then(res => res.data)
        return data

    } catch (err){
        console.log(err)
        return []
    }
}

export const fetchWomenData = async (page) => {
    try{
        // TODO: for deployment use
       const data = await axios.get(`${process.env.REACT_APP_FEED_FIGHTERS_WOMEN}/${page}`)
            // TODO: for local use
           // const data = await axios.get(`${process.env.REACT_APP_FIGHTERS_WOMEN}/${page}`)
            .then(res => res.data)
        return data

    } catch (err){
        console.log(err)
        return []
    }
}