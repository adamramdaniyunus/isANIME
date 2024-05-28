import axios from "axios";


export const getData = async (id= 20) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ANIME}/anime/${id}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getDataRecomended = async (page:number) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ANIME}/top/anime?page=${page}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getDataRandom = async (page:number) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ANIME}/anime?type=movie&page=${page}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getDataUpComing = async (page:number) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ANIME}/anime?status=upcoming&page=${page}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getDataSearch = async (search:string, page:number) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ANIME}/anime?q=${search}&limit=20&page=${page}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getDataEpisode = async (id:number) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ANIME}/anime/${id}/episodes`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}