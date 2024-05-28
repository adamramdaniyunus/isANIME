import Layout from "@/app/components/Layout";
import MoviesList from "@/app/components/MoviesList/MoviesList";
import UpComingList from "@/app/components/UpComingList/UpComingList";
import Head from "next/head";

export const metadata = {
    title: "Upcoming - IsAnime",
};

export default function UpComing(){
    return(
        <>
            <Head>
                <title>{metadata.title}</title>
            </Head>
        <Layout>

            <UpComingList/>
        </Layout>
        </>
    )
}