import { cn } from '@/utils/classes';
import React from 'react';

// Define types for our grid items
type GridItem = {
    id: number;
    title: string;
    content: string;
    area: 'hero' | 'aside1' | 'aside2' | 'aside3' | 'aside4';
};

// Define props interface for our component
interface BentoGridProps {
    items?: GridItem[];
}

const defaultItems: GridItem[] = [
    {
        id: 1,
        title: 'Hero Section',
        content: 'Main content area spanning multiple grid cells',
        area: 'hero'
    },
    {
        id: 2,
        title: 'Aside 1',
        content: 'First sidebar section',
        area: 'aside1'
    },
    {
        id: 3,
        title: 'Aside 2',
        content: 'Second sidebar section',
        area: 'aside2'
    },
    {
        id: 4,
        title: 'Aside 3',
        content: 'Third sidebar section',
        area: 'aside3'
    },
    {
        id: 5,
        title: 'Aside 4',
        content: 'Fourth sidebar section',
        area: 'aside4'
    }
];

const BentoGrid: React.FC<BentoGridProps> = ({ items = defaultItems }) => {
    // Ensure items is never undefined by using defaultItems
    const gridItems = items || defaultItems;

    const getGridAreaClasses = (area: string): string => {
        const areaClasses = {
            hero: '[grid-area:hero]',
            aside1: '[grid-area:aside1]',
            aside2: '[grid-area:aside2]',
            aside3: '[grid-area:aside3]',
            aside4: '[grid-area:aside4]',
        };
        return areaClasses[area as keyof typeof areaClasses] || '';
    };

    return (
        <div className="w-full max-w-[1500px] h-[1000px] bg-orange-50 p-[1vw]">
            <div
                className={cn('grid gap-[1.5vw] grid-cols-6 auto-rows-auto [grid-template-areas:"hero_hero_hero_hero_aside1_aside1"_"hero_hero_hero_hero_aside1_aside1"_"hero_hero_hero_hero_aside1_aside1"_"hero_hero_hero_hero_aside1_aside1"_"aside2_aside2_aside3_aside3_aside4_aside4"]')
                }
            >
                {gridItems.map((item) => (
                    <div
                        key={item.id}
                        className={cn("border-2 border-red-200 rounded-md p-4 transition-all duration-300 hover:border-red-300 hover:shadow-lg", getGridAreaClasses(item.area), 'text-red-500')}
                    >
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-gray-600">{item.content}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default BentoGrid;