import React from "react";
import { Clock, IndianRupee, Users, Award } from "lucide-react";
import { motion } from "motion/react";

function BottomFeatures() {
  const features = [
    {
      icon: <Clock size={20} />,
      title: "On Time Service",
    },
    {
      icon: <IndianRupee size={20} />,
      title: "Best & Transparent Prices",
    },
    {
      icon: <Users size={20} />,
      title: "Skilled & Trained\nProfessionals",
    },
    {
      icon: <Award size={20} />,
      title: "Assured Service Quality",
    },
  ];

  // Container variants for staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 45 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    },
  };

  return (
    <section className="relative py-20 overflow-hidden perspective-[1000px] bg-gradient-to-b from-[#0f5298] to-[#043364]">
      {/* CSS Animations for Live Water Effect */}
      <style>
        {`
          @keyframes wave-animate {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes float-bubble {
            0% { transform: translateY(100px) scale(0.5); opacity: 0; }
            50% { opacity: 0.6; }
            100% { transform: translateY(-300px) scale(1.2); opacity: 0; }
          }
          .wave-bg {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200%;
            height: 100%;
            background-repeat: repeat-x;
            background-position: bottom;
            background-size: 50% 100%;
            animation: wave-animate 15s linear infinite;
            opacity: 0.3;
          }
          .wave-bg-2 {
            animation: wave-animate 20s linear infinite reverse;
            opacity: 0.2;
            background-size: 50% 80%;
          }
          .wave-bg-3 {
            animation: wave-animate 10s linear infinite;
            opacity: 0.4;
            background-size: 50% 60%;
          }
          .bubble {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            animation: float-bubble 4s infinite ease-in;
          }
        `}
      </style>

      {/* Live Water Waves SVG Backgrounds */}
      <div 
        className="wave-bg" 
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"%3E%3Cpath fill=\"%23ffffff\" fill-opacity=\"1\" d=\"M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,160C672,160,768,192,864,197.3C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\"%3E%3C/path%3E%3C/svg%3E')" }}
      ></div>
      <div 
        className="wave-bg wave-bg-2" 
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"%3E%3Cpath fill=\"%23ffffff\" fill-opacity=\"1\" d=\"M0,96L60,112C120,128,240,160,360,165.3C480,171,600,149,720,128C840,107,960,85,1080,90.7C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"%3E%3C/path%3E%3C/svg%3E')" }}
      ></div>
      <div 
        className="wave-bg wave-bg-3" 
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"%3E%3Cpath fill=\"%23ffffff\" fill-opacity=\"1\" d=\"M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,149.3C672,128,768,128,864,149.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\"%3E%3C/path%3E%3C/svg%3E')" }}
      ></div>

      {/* Floating Bubbles */}
      <div className="bubble w-4 h-4 left-[10%] bottom-10" style={{ animationDelay: '0s' }}></div>
      <div className="bubble w-8 h-8 left-[30%] bottom-0" style={{ animationDelay: '2s' }}></div>
      <div className="bubble w-3 h-3 left-[50%] bottom-20" style={{ animationDelay: '1s' }}></div>
      <div className="bubble w-6 h-6 left-[70%] bottom-10" style={{ animationDelay: '3s' }}></div>
      <div className="bubble w-5 h-5 left-[90%] bottom-0" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10, 
                boxShadow: "0 25px 35px -5px rgba(0, 150, 255, 0.3)",
              }}
              key={index} 
              // Removed solid color, added glassmorphism effect
              className="group flex flex-col items-center justify-center p-6 md:p-8 bg-white/10 backdrop-blur-md text-center transition-all duration-300 rounded-[2rem] relative overflow-hidden shadow-lg border border-white/20 hover:border-white/50 hover:bg-white/20"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                // Keeping the vibrant pink/red icon for contrast, or change it to bright cyan
                className="w-16 h-16 mb-6 rounded-full flex items-center justify-center text-[#0f5298] bg-white shadow-xl shadow-white/30"
              >
                {React.cloneElement(feature.icon, { size: 28, strokeWidth: 2.5 })}
              </motion.div>
              <h4 className="font-black text-[13px] md:text-[15px] text-white uppercase tracking-widest whitespace-pre-line group-hover:text-cyan-200 transition-colors duration-300 drop-shadow-md">{feature.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BottomFeatures;
