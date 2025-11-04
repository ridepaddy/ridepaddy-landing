"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Star, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SlideIn } from "../animations/slide-in";
import { FadeIn } from "../animations/fade-in";
import { useState } from "react";

const stats = [
  { label: "Active Users", value: "50K+", icon: Users },
  { label: "Safety Score", value: "99.8%", icon: Shield },
  { label: "App Rating", value: "4.9★", icon: Star },
];

export function Hero() {
  const [isLive,] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-40" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <FadeIn delay={0.2}>
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                {isLive ? "Now Live in Lagos & Abuja" : "Coming soon"}
              </Badge>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Find Your
                <span className="gradient-text block">Ride Buddy</span>
                in Nigeria
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Connect with trusted drivers and passengers for safe, affordable
                carpooling across Nigeria. Turn your daily commute into a shared
                journey.
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="group" asChild>
                  <Link href="#download">
                    Download App
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={1.0}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="flex items-center space-x-2"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <SlideIn direction="right" delay={0.6}>
              <div className="relative">
                {/* Floating Elements */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-lg z-10"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">
                        Safe & Verified
                      </div>
                      <div className="text-xs text-gray-500">
                        All drivers checked
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-lg z-10"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">
                        Active Community
                      </div>
                      <div className="text-xs text-gray-500">50K+ users</div>
                    </div>
                  </div>
                </motion.div>

                {/* Main Phone Mockup */}
                <div className="relative mx-auto w-80 h-96 bg-black rounded-3xl p-2">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                    <Image
                      src="/images/hero-mockup.png"
                      alt="RidePaddy App Interface"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
