import React from "react";

const PremiumCTA = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 4s ease infinite",
      }}
    >
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes premiumGlow {
          0% {
            background-position: 0% 50%;
            box-shadow:
              0 0 30px rgba(255, 215, 0, 0.4),
              0 0 60px rgba(255, 165, 0, 0.2),
              0 10px 30px rgba(0, 0, 0, 0.3);
          }
          50% {
            background-position: 100% 50%;
            box-shadow:
              0 0 40px rgba(255, 107, 107, 0.5),
              0 0 80px rgba(78, 205, 196, 0.3),
              0 15px 40px rgba(0, 0, 0, 0.4);
          }
          100% {
            background-position: 0% 50%;
            box-shadow:
              0 0 30px rgba(255, 215, 0, 0.4),
              0 0 60px rgba(255, 165, 0, 0.2),
              0 10px 30px rgba(0, 0, 0, 0.3);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes pulseRing {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .premium-button {
          background: linear-gradient(
            135deg,
            #ffd700 0%,
            #ffa500 25%,
            #ff6b6b 50%,
            #4ecdc4 75%,
            #45b7d1 100%
          );
          background-size: 300% 300%;
          animation: premiumGlow 3s ease infinite;
          box-shadow:
            0 0 30px rgba(255, 215, 0, 0.4),
            0 0 60px rgba(255, 165, 0, 0.2),
            0 10px 30px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .premium-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow:
            0 0 50px rgba(255, 215, 0, 0.6),
            0 0 100px rgba(255, 165, 0, 0.4),
            0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .premium-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shine 2.5s infinite;
        }

        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 9999px;
          animation: pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)
            infinite;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: float 6s infinite ease-in-out;
        }

        .particle:nth-child(1) {
          width: 8px;
          height: 8px;
          left: 10%;
          animation-delay: 0s;
        }
        .particle:nth-child(2) {
          width: 12px;
          height: 12px;
          left: 20%;
          animation-delay: 1s;
        }
        .particle:nth-child(3) {
          width: 6px;
          height: 6px;
          left: 35%;
          animation-delay: 2s;
        }
        .particle:nth-child(4) {
          width: 10px;
          height: 10px;
          left: 60%;
          animation-delay: 0.5s;
        }
        .particle:nth-child(5) {
          width: 8px;
          height: 8px;
          left: 80%;
          animation-delay: 1.5s;
        }
        .particle:nth-child(6) {
          width: 14px;
          height: 14px;
          left: 90%;
          animation-delay: 2.5s;
        }
      `}</style>

      {/* Floating Particles */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already managing their finances
          smarter with Welth
        </p>

        <div className="relative inline-block">
          <div className="pulse-ring"></div>
          <a
            href="/dashboard"
            className="premium-button px-8 py-4 rounded-xl text-lg font-bold text-gray-900 transition-all duration-300 ease-out relative z-10 inline-block no-underline"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default PremiumCTA;
