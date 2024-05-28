import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {getData} from "@/lib/Data";

export default function QueryIdAnime() {
    const params = useParams()

    const {
        data,
        refetch,
        isFetching,
        isLoading: loading,
    } = useQuery({
        queryFn: () => getData(params.ml_id ? parseInt(params.ml_id as string) : 1000),
        queryKey: ["anime"],
        staleTime: 30 * 60 * 1000
    })

    return {
        data, refetch, isFetching, loading
    }
}