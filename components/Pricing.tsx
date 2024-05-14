"use client";

import { PiCheckCircleFill } from "react-icons/pi";
import Link from "next/link";

const plans = [
    {
        index: 0,
        name: "Starter Plan",
        price: "£300/year or £30/month",
        features: [
            "3-5 static web pages (e.g., Home, About Us, Services, Contact)",
            "Enhanced responsive design with improved styling options",
            "Basic SEO optimization",
            "Contact form integration with additional customization options",
            "Standard support via email",
        ],
        style: "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
        description: "Entry-level plan for small businesses or startups needing a more comprehensive website solution.",
        button: "Buy Now",
    },
    {
        index: 1,
        name: "Standard Plan",
        price: "£600/year or £60/month",
        features: [
            "5-10 dynamic web pages with blog/news section integration",
            "Customizable responsive design with advanced styling options",
            "Integration of social media links and sharing buttons",
            "Enhanced SEO optimization with keyword research",
            "Priority support with faster response times",
        ],
        style: "h-full rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
        description: "Ideal for growing businesses or organizations requiring additional features and functionality.",
        button: "Buy Now",
    },
    {
        index: 2,
        name: "Premium Plan",
        price: "£1,200/year or £120/month",
        features: [
            "10-15 dynamic web pages with advanced functionality",
            "Custom design and branding elements",
            "Advanced SEO optimization with keyword research and analytics",
            "Integration of e-commerce functionality (optional)",
            "Dedicated account manager for ongoing support and consultations",
        ],
        style: "h-full rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
        description: "Tailored for businesses seeking advanced features and marketing capabilities.",
        button: "Buy Now",
    },
    {
        index: 3,
        name: "Ultimate Plan",
        price: "Custom Quote",
        features: [
            "Unlimited pages and content updates",
            "Advanced e-commerce functionality with product listings and shopping cart integration",
            "Custom graphics, animations, and interactive elements",
            "Enhanced security measures and performance optimization",
            "VIP support with 24/7 assistance and priority response",
        ],
        style: "h-full rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
        description: "Comprehensive package designed for established businesses or enterprises requiring extensive website solutions.",
        button: "Contact Us",
    },
];

const Pricing: React.FC = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
                Simple Pricing <br /> Choose your plan
            </div>
            <div className="grid md:grid-cols-2 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-stretch">
                {plans.map((plan, index) => (
                    <div key={plan.name} className="h-full flex flex-col justify-between border rounded-3xl px-6">
                        <div className={`${plan.style} flex-grow`}>
                            <div className="text-4xl flex items-center font-medium mb-4">
                                {plan.name}
                                {plan.price === "Custom Quote" && (
                                    <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center">
                                        Contact Us
                                    </div>
                                )}
                            </div>
                            <div className="text-3xl">{plan.price}</div>
                            <div className="py-6">{plan.description}</div>
                            <ul>
                                {plan.features.map((feature) => (
                                    <li key={feature} className="text-lg py-2 flex space-x-2 items-center">
                                        {plan.price === "Custom Quote" ? (
                                            <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                                        ) : (
                                            <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                                        )}
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300">
                            {index !== 3 ? (
                                <Link
                                    href={
                                        index === 0
                                            ? "https://buy.stripe.com/6oEg1WdsibFr1EYbIK"
                                            : index === 1
                                                ? "https://buy.stripe.com/14k2b65ZQ8tf5Ve28c"
                                                : index === 2
                                                    ? "https://buy.stripe.com/14k3c65ZQ8tf5Ve28c"
                                                    : "https://buy.stripe.com/14k4d65ZQ8tf5Ve28c"
                                    }
                                >
                                    {plan.button}
                                </Link>
                            ) : (
                                <Link href="/contact">
                                    {plan.button}
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
