'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import { servicesConfig } from '@/config/services';
import Pricing from '@/components/Pricing';

const ServiceDetailPage: React.FC = () => {
    const params = useParams();
    const serviceId = parseInt(params.id as string, 10);
    const service = servicesConfig.services.find(s => s.id === serviceId);

    if (!service) {
        notFound();
        return null;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
            <img src={service.image} alt={service.name} className="w-full h-64 object-cover mb-4" />
            <p className="mb-8">{service.description}</p>
            <h2 className="text-2xl font-bold mb-4">Pricing</h2>
            <Pricing />
        </div>
    );
};

export default ServiceDetailPage;
