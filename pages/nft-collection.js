import BlogDarkInnerSection from "../components/nft-collection/blog-dark-inner-section";

export default function BlogDark() {
	return <BlogDarkInnerSection />;
}

export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
