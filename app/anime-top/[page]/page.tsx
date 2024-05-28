import Layout from "@/app/components/Layout";
import MoviesList from "@/app/components/MoviesList/MoviesList";
import TopAnimePage from "@/app/components/TopAnime/TopAnimePage";
import UpComingList from "@/app/components/UpComingList/UpComingList";
import Head from "next/head";

export const metadata = {
    title: "Top anime - IsAnime",
};

export default function TopAnime() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <Layout>

                <TopAnimePage />
            </Layout>
        </>
    )
}