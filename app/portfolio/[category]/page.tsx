"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Template = {
    id: number;
    title: string;
    imageUrl: string;
};

type CategoryTemplates = {
    [key: string]: Template[];
};

const categoryTemplates: CategoryTemplates = {
    ecommerce: [
        { id: 1, title: "E-commerce Template 1", imageUrl: "/images/ecommerce1.png" },
        { id: 2, title: "E-commerce Template 2", imageUrl: "/images/ecommerce-template2.jpg" },
        { id: 3, title: "E-commerce Template 3", imageUrl: "/images/ecommerce-template3.jpg" },
        { id: 4, title: "E-commerce Template 4", imageUrl: "/images/ecommerce-template4.jpg" },
        { id: 5, title: "E-commerce Template 5", imageUrl: "/images/ecommerce-template5.jpg" },
    ],
    logos: [
        { id: 1, title: "Logo Template 1", imageUrl: "/images/logo-template1.jpg" },
        { id: 2, title: "Logo Template 2", imageUrl: "/images/logo-template2.jpg" },
        { id: 3, title: "Logo Template 3", imageUrl: "/images/logo-template3.jpg" },
        { id: 4, title: "Logo Template 4", imageUrl: "/images/logo-template4.jpg" },
        { id: 5, title: "Logo Template 5", imageUrl: "/images/logo-template5.jpg" },
    ],
    landing: [
        { id: 1, title: "Landing Page Template 1", imageUrl: "/images/landing-page-template1.jpg" },
        { id: 2, title: "Landing Page Template 2", imageUrl: "/images/landing-page-template2.jpg" },
        { id: 3, title: "Landing Page Template 3", imageUrl: "/images/landing-page-template3.jpg" },
        { id: 4, title: "Landing Page Template 4", imageUrl: "/images/landing-page-template4.jpg" },
        { id: 5, title: "Landing Page Template 5", imageUrl: "/images/landing-page-template5.jpg" },
    ],
    consultancy: [
        { id: 1, title: "Consultancy Firm Template 1", imageUrl: "/images/consultancy-firm-template1.jpg" },
        { id: 2, title: "Consultancy Firm Template 2", imageUrl: "/images/consultancy-firm-template2.jpg" },
        { id: 3, title: "Consultancy Firm Template 3", imageUrl: "/images/consultancy-firm-template3.jpg" },
        { id: 4, title: "Consultancy Firm Template 4", imageUrl: "/images/consultancy-firm-template4.jpg" },
        { id: 5, title: "Consultancy Firm Template 5", imageUrl: "/images/consultancy-firm-template5.jpg" },
    ],
    tradesmen: [
        { id: 1, title: "Tradesmen Template 1", imageUrl: "/images/tradesmen-template1.jpg" },
        { id: 2, title: "Tradesmen Template 2", imageUrl: "/images/tradesmen-template2.jpg" },
        { id: 3, title: "Tradesmen Template 3", imageUrl: "/images/tradesmen-template3.jpg" },
        { id: 4, title: "Tradesmen Template 4", imageUrl: "/images/tradesmen-template4.jpg" },
        { id: 5, title: "Tradesmen Template 5", imageUrl: "/images/tradesmen-template5.jpg" },
    ],
    social: [
        { id: 1, title: "Social Media App Template 1", imageUrl: "/images/social-media-app-template1.jpg" },
        { id: 2, title: "Social Media App Template 2", imageUrl: "/images/social-media-app-template2.jpg" },
        { id: 3, title: "Social Media App Template 3", imageUrl: "/images/social-media-app-template3.jpg" },
        { id: 4, title: "Social Media App Template 4", imageUrl: "/images/social-media-app-template4.jpg" },
        { id: 5, title: "Social Media App Template 5", imageUrl: "/images/social-media-app-template5.jpg" },
    ],
};

function formatTemplateUrl(title: string, id: number): string {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    return `https://${formattedTitle}.netgurusolutions.co.uk`;
}

export default function CategoryPage() {
    const pathname = usePathname();
    const category = pathname.split("/").pop();

    if (!category || !categoryTemplates[category]) {
        return <div>Category not found</div>;
    }

    const templates = categoryTemplates[category];

    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-12">{category.charAt(0).toUpperCase() + category.slice(1)} Templates</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {templates.map((template) => (
                    <Link key={template.id} href={formatTemplateUrl(template.title, template.id)} target="_blank" className="group">
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <Image
                                src={template.imageUrl}
                                alt={template.title}
                                width={500}
                                height={300}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-75" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white transition-all duration-500 group-hover:bg-opacity-75">
                                <h2 className="text-2xl font-bold">{template.title}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link href="/portfolio" className="text-blue-500 hover:underline">Back to Portfolio</Link>
            </div>
        </div>
    );
}
