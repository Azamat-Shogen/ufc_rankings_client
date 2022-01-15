import axios from "axios";

export const fetchWeightClassesData = async () => {
    try{
        // TODO: for deployment use
        const data = await axios.get(process.env.REACT_APP_FEED_WEIGHTCLASSES)
            // TODO: for local use
           // const data = await axios.get(process.env.REACT_APP_API_WEIGHTCLASSES)
            // const data = await axios.get("http://ec2-18-225-28-103.us-east-2.compute.amazonaws.com:8000/api/weightclasses")
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
            //const data = await axios.get(process.env.REACT_APP_API_ATHLETES_RANKINGS)
           // const data = await axios.get("http://ec2-18-225-28-103.us-east-2.compute.amazonaws.com:8000/api/rankings-athletes")
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
            //const data = await axios.get(`http://ec2-18-225-28-103.us-east-2.compute.amazonaws.com:8000/api/fighters/${page}`)
            .then(res => res.data)
        return data

    } catch (err){
        console.log(err)
        return []
    }
}