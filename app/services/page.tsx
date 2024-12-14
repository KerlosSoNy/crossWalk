import React from 'react'
import { HeroParallax } from '../components/ui/hero-parallax';
import { products } from '../constants';

export default function Page() {
    return (
        <HeroParallax products={products} />
    )
}


