import Head from "next/head";

import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

export default function HomePage(props) {

    return (
        <>
        <Head>
            <title>Choi' Blog</title>
            <meta name='description' content='Ich poste über Programmierung und Webentwicklung.'/>
        </Head>
        <Hero />
        <FeaturedPosts posts={props.posts}/>
        </>
    );
}

export function getStaticProps() {

    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 60 
    }
}