import dynamic from "next/dynamic";
import Head from "next/head";
import AboutSection from "../components/home-four/about-section";

import CardSliderOne from "../components/common/sliders/card/card-slider-one";
import TextSliderTwo from "../components/common/sliders/text/text-slider-two";
import HeroSection from "../components/home-three/hero-section";
import NewsLetter from "../components/home-three/news-letter";
import NftRoadMap from "../components/home-three/nft-roadmap";
import Team from "../components/home-three/Team";
import FaqAccordionThree from "../components/common/faq/faq-accordion-three";
import RoadmapSection from "../components/home-four/roadmap-section";

const FilterGalarryOne = dynamic(() => import("../components/common/filter-gallary/filter-gallary-one"), {
	ssr: false,
});


export default function Home() {
	return (
		<>
					<Head>
				<title>MonkeCrypto NFT Collections</title>
			</Head>
			<HeroSection />

			<AboutSection />
			
			
			{/* <FilterGalarryOne /> */}
			<TextSliderTwo />

			{/* <CardSliderOne /> */}
			{/* <Team /> */}
			{/* <NftRoadMap /> */}

			<RoadmapSection />
			<FaqAccordionThree />
			{/* <NewsLetter /> */}
		</>
	);
}
// export async function getStaticProps() {
// 	return { props: { header: "three", footer: "three" } };
// }

export async function getStaticProps() {
	return { props: { header: "one", footer: "one" } };
}
