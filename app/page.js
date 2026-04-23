"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Sparkles,
  Car,
  CheckCircle2,
  Camera,
  MessageSquare,
} from "lucide-react";

export default function DetailingBusinessWebsite() {
  const business = {
    name: "Elite Auto Detailing",
    tagline:
      "Professional interior and exterior car detailing that makes your vehicle look brand new.",
    phoneDisplay: "(973) 464-5222",
    phoneLink: "9734645222",
    serviceArea: "Montclair, NJ & Surrounding areas",
    instagram: "Elite Detailing Of New Jersey Instagram",
    instagramLink: "https://www.instagram.com/elitedetailingofnj/",
    hours: [
      { day: "Monday", time: "Closed" },
      { day: "Tuesday", time: "Closed" },
      { day: "Wednesday", time: "Closed" },
      { day: "Thursday", time: "Closed" },
      { day: "Friday", time: "4:00 PM - 7:30 PM" },
      { day: "Saturday", time: "9:00 AM – 6:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  };

  const services = [
    {
      title: "Full Detail",
      price: "$150",
      description:
        "A complete interior and exterior cleaning package designed to refresh your whole vehicle inside and out.",
      includes: [
        "Exterior in depth wash",
        "Wheel and tire cleaning",
        "Deep interior wash",
        "Dashboard and surface wipe down",
        "Window cleaning",
        "Final finish touch-up",
        "Before and after photos",
      ],
    },
  ];

  const addons = [
    { name: "Carpet Designs", price: "+$15" },
    { name: "Clay Protectant", price: "+$65" },
    { name: "Overhead Drone Photos", price: "+$35" },
  ];

  const gallery = [
    {
      title: "Interior Detail",
      note: "Replace this card with one of your best interior photos.",
    },
    {
      title: "Exterior Finish",
      note: "Replace this card with a glossy after-photo of the outside.",
    },
    {
      title: "Before & After",
      note: "Use a side-by-side photo to show the difference your work makes.",
    },
  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "Full Detail - $150",
    notes: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                <Sparkles className="h-4 w-4" /> Premium Mobile Detailing
              </div>

              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                {business.name}
              </h1>

              <p className="mt-4 max-w-xl text-lg text-neutral-300 md:text-xl">
                {business.tagline}
              </p>

              <div className="mt-6 flex flex-col gap-3 text-neutral-300">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>{business.phoneDisplay}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>{business.serviceArea}</span>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="#booking">
                  <Button className="rounded-2xl px-6 py-6 font-bold">
                    Book Now
                  </Button>
                </a>

                <a href={`tel:${business.phoneLink}`}>
                  <Button variant="outline" className="rounded-2xl px-6 py-6">
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            <Card className="rounded-3xl bg-white/5">
              <CardContent className="p-6">
                <div className="aspect-[4/3] rounded-2xl bg-neutral-800 flex items-center justify-center">
                  <Car />
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-black text-center mb-10">
          Services
        </h2>

        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">

          {services.map((service) => (
            <Card key={service.title}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-2 text-neutral-300">{service.description}</p>

                <p className="mt-4 text-xl font-bold">{service.price}</p>

                <div className="mt-6 grid gap-2">
                  {service.includes.map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold">Add-Ons</h3>

              <div className="mt-4 space-y-2">
                {addons.map((a) => (
                  <div key={a.name} className="flex justify-between">
                    <span>{a.name}</span>
                    <span>{a.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">

          {/* FORM */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold">Book</h2>

              <form
                action="https://formspree.io/f/xnjlgblj"
                method="POST"
                className="mt-6 space-y-4"
              >
                <input name="name" placeholder="Name" className="w-full p-2" />
                <input name="phone" placeholder="Phone" className="w-full p-2" />
                <input name="vehicle" placeholder="Vehicle" className="w-full p-2" />

                <Button type="submit">Submit</Button>
              </form>
            </CardContent>
          </Card>

          {/* RIGHT SIDE */}
          <div className="grid gap-6">

            {/* CONTACT */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Contact</h3>
                <p>{business.phoneDisplay}</p>
                <p>{business.serviceArea}</p>
              </CardContent>
            </Card>

            {/* HOURS */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Hours</h3>

                {business.hours.map((h) => (
                  <div key={h.day} className="flex justify-between">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>

        </div>
      </section>
    </div>
  );
}