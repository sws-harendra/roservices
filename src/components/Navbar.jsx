// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BsFillDropletFill } from "react-icons/bs";
// import { MessageCircleMore } from "lucide-react";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "/about" },
//     { name: "Services", link: "/services" },
//     { name: "Contact", link: "/contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3">
//           <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-sky-100 flex items-center justify-center shadow">
//             <BsFillDropletFill className="text-sky-700 text-2xl sm:text-3xl" />
//           </div>

//           <div>
//             <h1 className="text-xl sm:text-3xl font-bold leading-none">
//               Aqua<span className="text-sky-600">Trust</span>
//             </h1>

//             <p className="hidden sm:block text-sm text-gray-500">
//               RO Service Center
//             </p>
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex items-center gap-10">
//           {navLinks.map((item) => (
//             <Link
//               key={item.name}
//               to={item.link}
//               className="relative font-semibold text-slate-700 hover:text-sky-600 group"
//             >
//               {item.name}

//               <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//         </nav>

//         {/* Desktop Buttons */}
//         <div className="hidden lg:flex items-center gap-3">
//           <button className="px-5 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700">
//             📞 9876543210
//           </button>

//           <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
//             <MessageCircleMore size={18} />
//             WhatsApp
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setOpen(!open)} className="lg:hidden">
//           {open ? <X size={30} /> : <Menu size={30} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="lg:hidden bg-white shadow-md">
//           <div className="px-6 py-5 flex flex-col gap-5">
//             {navLinks.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.link}
//                 onClick={() => setOpen(false)}
//                 className="font-medium text-slate-700 hover:text-sky-600"
//               >
//                 {item.name}
//               </Link>
//             ))}

//             <button className="w-full bg-sky-600 text-white py-3 rounded-lg">
//               📞 9876543210
//             </button>

//             <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg">
//               <MessageCircleMore size={18} />
//               WhatsApp
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { BsFillDropletFill } from "react-icons/bs";
import { Menu, X, PhoneCall } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      >
        <div className="h-20 rounded-2xl border border-red-200 bg-white/90 backdrop-blur-xl shadow-l px-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-lg"
            >
              <BsFillDropletFill className="text-2xl" />
            </motion.div>

            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                Aqua<span className="text-sky-600">Prime</span>
              </h1>
              <p className="text-xs text-slate-500">RO Service Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center bg-slate-100 rounded-full p-1">
            {navLinks.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.link}
                  className="px-6 py-2 rounded-full font-medium text-slate-700 hover:bg-white hover:text-sky-600 transition"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-red-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition"
            >
              <PhoneCall size={18} />
              Book Service
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <button onClick={() => setOpen(true)} className="lg:hidden">
            <Menu size={30} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Menu</h2>

                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-sky-50 hover:text-sky-600 transition font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <button className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl flex items-center justify-center gap-2">
                <PhoneCall size={18} />
                Book Service
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
