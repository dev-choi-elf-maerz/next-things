import Head from "next/head";

import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

export default function AllPostsPage(props) {
    return (
        <>
        <Head>
            <title>Alle Artikel</title>
            <meta name='description' content='Eine Liste aller Tutorials und Beiträge zum Thema Programmierung!' />
        </Head>
        <AllPosts posts={props.posts} />
        </>
    );
}

export function getStaticProps() {

    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        },
        revalidate: 60 
    }
}