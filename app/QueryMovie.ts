'use client'
import {useQuery} from "@tanstack/react-query";
import {getDataRandom, getDataRecomended, getDataSearch} from "@/lib/Data";
import {useParams} from "next/navigation";
import {useEffect} from "react";

export default function QueryMovie() {
    const params = useParams()
    const {
        data: animes,
        refetch,
        isFetching,
        isLoading: loading,
    } = useQuery({
        queryFn: () => getDataRandom(parseInt(params.page as string)),
        queryKey: ["anime-movies"],
        staleTime: 30 * 60 * 1000
    });

    useEffect(() => {
        if (params.page) {
            refetch();
        }
    }, [refetch,params]);

    return{
        animes, refetch, loading, isFetching
    }
}