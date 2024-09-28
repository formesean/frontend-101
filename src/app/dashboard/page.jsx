"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [count, setCount] = useState(() => {
        // Initialize state from localStorage if available, otherwise default to 0
        const storedCount = localStorage.getItem('count');
        return storedCount !== null ? parseInt(storedCount) : 0;
    });

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-5xl">This is the Dashboard</h1>
            <Button onClick={handleClick}>count: {count}</Button>
        </div>
    );
}
