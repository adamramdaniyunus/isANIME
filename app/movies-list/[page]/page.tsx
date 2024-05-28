import Layout from "@/app/components/Layout";
import MoviesList from "@/app/components/MoviesList/MoviesList";
import UpComingList from "@/app/components/UpComingList/UpComingList";
import Head from "next/head";

export const metadata = {
    title: "Movies - IsAnime",
};

export default function Movie(){
    return(
        <>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <Layout>

                <MoviesList/>
            </Layout>
        </>
    )
}