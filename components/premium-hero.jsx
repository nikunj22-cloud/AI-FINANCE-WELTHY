"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import PremiumButton from "./started";

const PremiumHeroSection = () => {
  const imageRef = useRef(null);

  // Scroll Effect for Image - FIXED
  useEffect(() => {
    const handleScroll = () => {
      // Only check if the ref current exists - no need to check classList
      if (imageRef.current) {
        const scrollY = window.scrollY;
        const parallaxValue = scrollY * 0.1;
        imageRef.current.style.transform = `translateY(${parallaxValue}px)`;
      }
    };

    // Add passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .gradient-title {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      <section className="relative pt-40 pb-20 px-4 overflow-hidden min-h-screen">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
        <div
          className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-indigo-400 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-float"></div>

        <div className="container mx-auto text-center relative z-10">
          {/* Premium Status Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-sm font-bold mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-30"></div>
              </div>
              <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent font-black tracking-wide">
                AI-POWERED • PREMIUM EXPERIENCE • LIVE NOW
              </span>
            </div>
          </div>

          {/* Premium Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[105px] pb-8 font-black leading-[0.9] relative">
            <div className="relative inline-block">
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 hover:from-purple-600 hover:via-pink-600 hover:to-indigo-600 transition-all duration-1000">
                Transform Your Wealth
              </span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-1000">
                with AI Precision
              </span>

              {/* Decorative Premium Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-60 animate-float transform rotate-12"></div>
              <div className="absolute -top-8 -right-8 w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl blur-md opacity-50 animate-float-delayed transform -rotate-12"></div>
              <div className="absolute -bottom-6 right-1/4 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-sm opacity-70 animate-float"></div>
            </div>
          </h1>

          {/* Premium Value Proposition */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-6">
              Step into the future of financial mastery with our
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
                {" "}
                revolutionary AI technology
              </span>
              .
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience intelligent wealth optimization, predictive market
              insights, and personalized financial strategies that adapt and
              evolve with your ambitions.
            </p>
          </div>

          {/* Premium Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              {
                icon: "🤖",
                text: "Advanced AI Analytics",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "📈",
                text: "Predictive Insights",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: "🎯",
                text: "Smart Optimization",
                color: "from-green-500 to-teal-500",
              },
              {
                icon: "🛡️",
                text: "Bank-Grade Security",
                color: "from-indigo-500 to-purple-500",
              },
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div
                  className={`flex items-center space-x-3 bg-white/80 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-sm font-bold text-gray-800">
                    {feature.text}
                  </span>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>

          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <PremiumButton />

            <button className="group relative px-8 py-4 text-indigo-700 font-bold border-2 border-indigo-200 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 hover:border-indigo-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm">
              <span className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Watch Premium Demo</span>
              </span>
            </button>
          </div>

          {/* Premium Dashboard Preview */}
          <div className="hero-image-wrapper mt-8 relative group">
            {/* Floating Premium Elements */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl opacity-20 blur-lg rotate-12 animate-float group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute -top-8 -right-16 w-20 h-20 bg-gradient-to-br from-pink-400 to-indigo-500 rounded-2xl opacity-25 blur-md -rotate-12 animate-float-delayed group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute -bottom-16 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl opacity-30 blur-sm rotate-45 animate-float group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute -bottom-8 -right-12 w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg opacity-40 blur-sm -rotate-30 animate-float-delayed group-hover:scale-110 transition-transform duration-700"></div>

            {/* Premium Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl scale-110 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-3xl blur-2xl scale-105 opacity-60 group-hover:scale-110 transition-transform duration-700"></div>

            <div ref={imageRef} className="hero-image relative">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/banner.jpeg"
                  width={1280}
                  height={720}
                  alt="Premium AI Financial Dashboard"
                  className="rounded-3xl shadow-2xl border-4 border-white/60 mx-auto relative z-10 group-hover:scale-105 transition-all duration-700 ease-out"
                  priority
                />

                {/* Premium Overlay Elements */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Premium Live</span>
                  </div>
                </div>

                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-black/20 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-medium">
                    AI-Powered Dashboard
                  </div>
                </div>

                {/* Bottom Premium Badge */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-white/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-white/50">
                    <div className="flex items-center space-x-4 text-sm font-bold text-gray-800">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Real-time</span>
                      </div>
                      <div className="w-px h-4 bg-gray-300"></div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>AI-Driven</span>
                      </div>
                      <div className="w-px h-4 bg-gray-300"></div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Trust Indicators */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "🔒",
                title: "Bank-Level Security",
                desc: "256-bit encryption with multi-factor authentication",
                gradient: "from-green-500 to-emerald-600",
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                desc: "Real-time processing with AI-powered insights",
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                icon: "🏆",
                title: "Award Winning",
                desc: "Recognized as the #1 AI Financial Platform",
                gradient: "from-purple-500 to-pink-600",
              },
            ].map((trust, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="text-4xl mb-4">{trust.icon}</div>
                  <h3
                    className={`text-lg font-bold mb-2 bg-gradient-to-r ${trust.gradient} bg-clip-text text-transparent`}
                  >
                    {trust.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {trust.desc}
                  </p>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${trust.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>

          {/* Final Premium Stats */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-70">
            <div className="text-center">
              <div className="text-2xl font-black text-indigo-600">1M+</div>
              <div className="text-sm text-gray-600 font-medium">
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-purple-600">$50B+</div>
              <div className="text-sm text-gray-600 font-medium">
                Assets Managed
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-pink-600">99.9%</div>
              <div className="text-sm text-gray-600 font-medium">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PremiumHeroSection;
