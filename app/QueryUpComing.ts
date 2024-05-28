'use client'
import {useQuery} from "@tanstack/react-query";
import {getDataRecomended, getDataSearch, getDataUpComing} from "@/lib/Data";
import {useParams} from "next/navigation";
import {useEffect} from "react";

export default function QueryUpComing() {
    const params = useParams()
    const {
        data: animes,
        refetch,
        isFetching,
        isLoading: loading,
    } = useQuery({
        queryFn: () => getDataUpComing(parseInt(params.page as string)),
        queryKey: ["upcoming-list"],
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