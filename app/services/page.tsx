import React from 'react'
import { HeroParallax } from '../components/ui/hero-parallax';
import { products } from '../constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://cross-walk.vercel.app/services"),
    title: {
        default: "CrossWalk",
        template:
            "%s | Services - CrossWalk",
    },
    description:
        "Welcome to CrossWalk Marketing, your go-to destination for innovative marketing strategies, impactful branding solutions, and expert insights into the world of advertising. Whether you're a budding entrepreneur or an established business, our curated services and resources empower you to elevate your brand, reach your target audience, and stay ahead of the latest marketing trends. Join our community and unlock the potential of your business with CrossWalk Marketing!",
    openGraph: {
        title: "CrossWalk",
        description:
            "Welcome to CrossWalk Marketing, your go-to destination for innovative marketing strategies, impactful branding solutions, and expert insights into the world of advertising. Whether you're a budding entrepreneur or an established business, our curated services and resources empower you to elevate your brand, reach your target audience, and stay ahead of the latest marketing trends. Join our community and unlock the potential of your business with CrossWalk Marketing!",
        type: "website",
        locale: "en_US",
        url: "https://cross-walk.vercel.app/",
        siteName: "CrossWalk",
    },
    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png",
    },
};


export default function Page() {
    return (
        <HeroParallax products={products} />
    )
}


