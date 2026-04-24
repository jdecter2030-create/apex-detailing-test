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
  };

  const services = [
    {
      title: "Full Detail",
      price: "$150",
      description:
        "A complete interior and exterior cleaning package designed to refresh your whole vehicle inside and out. Our top seller.",
      includes: [
        "Exterior in depth wash",
        "Wheel and tire cleaning",
        "Deep interior wash",
        "Dashboard and surface wipe down",
        "Window cleaning",
        "Before and after photos",
      ],
    },
    {
      title: "Exterior Detail",
      price: "$60",
      description:
        "A thorough wash of the exterior of your car designed to make your car look fresh and glossy.",
      includes: [
        "Complete wheel and tire scrub",
        "Exterior window cleaning",
        "Foam cannon spray down",
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
    { title: "Interior Detail", note: "Add real interior photo" },
    { title: "Exterior Finish", note: "Add exterior photo" },
    { title: "Before & After", note: "Show transformation" },
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
              <div className="mb-4 flex items-center gap-2 text-neutral-300">
                <Sparkles /> Premium Mobile Detailing
              </div>

              <h1 className="text-5xl font-black">{business.name}</h1>

              <p className="mt-4 text-neutral-300">
                {business.tagline}
              </p>

              <div className="mt-6 space-y-2 text-neutral-300">
                <div className="flex gap-2"><Phone /> {business.phoneDisplay}</div>
                <div className="flex gap-2"><MapPin /> {business.serviceArea}</div>
              </div>

              <div className="mt-6 flex gap-4">
                <a href="#booking">
                  <Button>Book Now</Button>
                </a>
                <a href={`tel:${business.phoneLink}`}>
                  <Button variant="outline">Call Now</Button>
                </a>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 flex justify-center items-center h-full">
                <Car size={60} />
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

          {/* SERVICES LIST */}
          <div className="flex flex-col gap-6">
            {services.map((service) => (
              <Card key={service.title}>
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-neutral-400">{service.description}</p>
                    </div>
                    <p className="text-xl font-bold">{service.price}</p>
                  </div>

                  <div className="mt-4 grid gap-2">
                    {service.includes.map((item) => (
                      <div key={item} className="flex gap-2">
                        <CheckCircle2 size={16} /> {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ADDONS */}
          <Card>
            <CardContent className="p-6">
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
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Book Your Detail</h2>

              <form
                action="https://formspree.io/f/xnjlgblj"
                method="POST"
                className="mt-4 space-y-3"
              >
                <input name="name" placeholder="Name" className="w-full p-2" />
                <input name="phone" placeholder="Phone" className="w-full p-2" />
                <input name="vehicle" placeholder="Vehicle" className="w-full p-2" />

                <select className="w-full p-2">
                  <option>Full Detail - $150</option>
                  <option>Exterior Detail - $60</option>
                </select>

                <textarea placeholder="Notes" className="w-full p-2" />

                <Button type="submit">Submit</Button>
              </form>
            </CardContent>
          </Card>

          {/* SIDE */}
          <div className="grid gap-6">

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold">Contact</h3>
                <p>{business.phoneDisplay}</p>
                <p>{business.serviceArea}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold">Important</h3>

                <p>All times are subject to change.</p>
                <p className="font-bold text-yellow-400">
                  ⚠️ Weekend bookings will have a higher confirmation rate
                </p>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>
    </div>
  );
}