import axios from "axios";

export const fetchWeightClassesData = async () => {
    try{
        // TODO: for deployment use
        // const data = await axios.get(process.env.REACT_APP_FEED_WEIGHTCLASSES)
            // TODO: for local use
            const data = await axios.get(process.env.REACT_APP_API_WEIGHTCLASSES)
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
        // const data = await axios.get(process.env.REACT_APP_FEED_ATHLETES_RANKINGS)
            // TODO: for local use
           const data = await axios.get(process.env.REACT_APP_API_ATHLETES_RANKINGS)
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
    //    const data = await axios.get(`${process.env.REACT_APP_FEED_ATHLETES_ALL}/${page}`)
            // TODO: for local use
           const data = await axios.get(`${process.env.REACT_APP_FIGHTERS_ALL}/${page}`)
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
        // const data = await axios.get(`${process.env.REACT_APP_FEED_FIGHTERS_MEN}/${page}`)
            // TODO: for local use
           const data = await axios.get(`${process.env.REACT_APP_FIGHTERS_MEN}/${page}`)
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


//TODO: the below funcitons just fetching local json data manually ( current server is temporary down )

export const getRankingsData = async () => {
    try{
        const data = await axios.get('data/ufc_rankings.json')
        .then(res => res.data)
        return data
    }catch (err){
        console.log(err)
        return []
    }
}

export const getWeightClassesData = async () => {
    try{
        const data = await axios.get('data/weight_classes.json')
        .then(res => res.data)
        return data
    }catch (err){
        console.log(err)
        return []
    }
}

export const getAthletesData = async (page) => {
    try{
        const data = await axios.get(`data/ufc_athletes_all.json`)
        .then(res => res.data)
        const result = data.slice(page * 12 - 12, page * 12)
        
        return result

    } catch (err){
        console.log(err)
        return []
    }
}


export const getMenData = async (page) => {
    try{
           const data = await axios.get(`data/ufc_athletes_all.json`)
            .then(res => res.data)
           const men = ["welterweight", "flyweight", "bantamweight", "featherweight", "lightweight", "middleweight", "light Heavyweight", "heavyweight"]
           const result_list = data.filter(el => men.includes(el.weight_class.toLowerCase()) )
           const result = result_list.slice(page * 12 - 12, page * 12)
           return result

    } catch (err){
        console.log(err)
        return []
    }
}

export const getWomenData = async (page) => {
    try{
        
       const data = await axios.get(`data/ufc_athletes_all.json`)
            .then(res => res.data)
       const women = ["women's strawweight", "women's bantamweight", "women's flyweight", "women's featherweight"]
       const result_list = data.filter(el => women.includes(el.weight_class.toLowerCase()) )
       const result = result_list.slice(page * 12 - 12, page * 12)
       return result

    } catch (err){
        console.log(err)
        return []
    }
}
