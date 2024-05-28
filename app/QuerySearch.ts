import {useQuery} from "@tanstack/react-query";
import {getDataSearch} from "@/lib/Data";
import {useParams} from "next/navigation";

export default function QuerySearch() {
    const params = useParams()

    const {
        data: animes,
        refetch,
        isFetching,
        isLoading: loading,
    } = useQuery({
        queryFn: () => getDataSearch(params.keyword.toString(), parseInt(params.page as string)),
        queryKey: ["anime-search"],
        staleTime: 30 * 60 * 1000
    });

    return{
        animes, refetch, loading, isFetching
    }
}