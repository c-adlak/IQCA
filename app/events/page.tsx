"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Event = {
    id: number;
    name: string;
    description: string;
    image: string;
    date: string;
};

const mockEvents: Event[] = [
    {
        id: 1,
        name: "Norway-UK Business Meet and Greet",
        description: "Organised by international qualification and certifications assessment board.",
        image: "/images/events/Norway-UK-meet.jpeg",
        date: "2025-06-10",
    },
    // {
    //     id: 2,
    //     name: "Health & Safety Workshop",
    //     description: "Hands-on safety training for industrial professionals.",
    //     image: "/images/events/Norway-UK-meet.jpeg",
    //     date: "2025-04-15",
    // },
    // {
    //     id: 3,
    //     name: "Green Tech Conference",
    //     description: "Exploring sustainability and innovation in tech.",
    //     image: "/images/events/Norway-UK-meet.jpeg",
    //     date: "2025-07-01",
    // },
];

export default function EventPage() {
    const [upcoming, setUpcoming] = useState<Event[]>([]);
    const [past, setPast] = useState<Event[]>([]);

    useEffect(() => {
        const today = new Date();
        const upcomingEvents = mockEvents.filter(
            (event) => new Date(event.date) >= today
        );
        const pastEvents = mockEvents.filter(
            (event) => new Date(event.date) < today
        );
        setUpcoming(upcomingEvents);
        setPast(pastEvents);
    }, []);

    return (
        <div className="py-12 px-4 pt-32 md:px-10 bg-gray-50 text-gray-800">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2">Events Happening at IQCA</h1>
                <p className="text-lg text-gray-600">
                    “Empowering through knowledge, one event at a time.”
                </p>
            </div>

            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-6 text-primary">Upcoming Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {upcoming.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden w-[22rem]"
                        >
                            <div className="relative w-full h-[420px]">
                                <Image
                                    src={event.image}
                                    alt={event.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 flex flex-col justify-between">
                                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                                <p className="text-sm text-gray-600 flex-grow">{event.description}</p>
                                {/* <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90">
                                    Read More
                                </button> */}
                            </div>
                        </div>

                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">Past Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {past.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden w-[22rem]"
                        >
                            <div className="relative w-full h-[420px]">
                                <Image
                                    src={event.image}
                                    alt={event.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 flex flex-col justify-between h-[200px]">
                                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                                <p className="text-sm text-gray-600 flex-grow">{event.description}</p>
                                {/* <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90">
                                    Read More
                                </button> */}
                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </div>
    );
}
