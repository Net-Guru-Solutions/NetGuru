'use client';

import { InfiniteMovingCardsDemo } from "../snippets/infinite-moving-card-snippet";
import { Spotlight } from "@/components/ui/spotlight";
import SliderOne from "@/components/ui/slider";
import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./shopify-stores";
import Services from "./services";
import Brands from "./brands";
import Link from "next/link";
import FAQS from "./faq";

export default function Home() {
	return (
		<div className="max-w-screen md:items-center md:justify-center antialiased ">
			<Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
			<div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
				<div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
					Create, grow, and <br /> scale your business
				</div>
				<p className="mt-4 text-lg font-normal max-w-lg text-center mx-auto px-4">
					Custom tailored solutions for your business. We are a team of creatives who are excited to help you grow your business.
				</p>

				<Link
					href={"/book"}
					className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6"
				>
					Book a call
				</Link>
				<div className="w-full pt-20">
					<SliderOne />
					<WebsiteDesign />
					<GraphicDesign />
					<ShopifyStores />
					<Brands />
					<Services />
				</div>
				<InfiniteMovingCardsDemo />
				<FAQS />
			</div>
		</div>
	);
}
