import React from 'react';
import Link from 'next/link';
import { servicesConfig } from '@/config/services';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import Image from 'next/image';

const ServicesPage: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8">Our Services</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-36">
				{servicesConfig.services.map(service => (
					<CardContainer key={service.id}>
						<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl md:p-6 border">
							<CardItem translateZ={60} className="shadow-lg">
								<Image src={service.image} width={1000} height={1000} alt={service.name} className="w-full h-48 object-cover rounded-t-lg" />
							</CardItem>
							<CardItem translateZ={30} className="p-4 rounded-b-lg">
								<h2 className="text-2xl font-bold mb-2">{service.name}</h2>
								<p className="mb-4">{service.description}</p>
								<Link href={`/services/${service.id}`} className="text-blue-500 hover:underline">
									Learn More
								</Link>
							</CardItem>
						</CardBody>
					</CardContainer>
				))}
			</div>
		</div>
	);
};

export default ServicesPage;