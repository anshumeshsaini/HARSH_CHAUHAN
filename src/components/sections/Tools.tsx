import React from "react";
import { motion } from "framer-motion";

const tools = [
  { name: "Ahrefs", logo: "https://imgs.search.brave.com/ga2DvaHvTbaVPZo1ZPgwoz3V-pCEUKAqywtBDSbhGvM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTYvQWhy/ZWZzLUxvZ28tUE5H/LVBob3Rvcy0zMDB4/MjI1LnBuZw" },
  { name: "SEMrush", logo: "https://imgs.search.brave.com/LCWa89K_zq1R6-OMaBF_0yicXsbgwg3f7PLMRNwyFkI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MjlhNDBiNjNlNTll/ZTA2OWRhOTRjODEu/cG5n" },
  { name: "Google Analytics", logo: "https://imgs.search.brave.com/L_MThgZbYrMG_HPtGE97qsAJReHYZ7OGKvCpOez3XW0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZV9hbmFseXRp/Y3MvZ29vZ2xlX2Fu/YWx5dGljcy1vZmZp/Y2lhbC5zdmc" },
  { name: "Search Console", logo: "https://imgs.search.brave.com/s-Jr5wS57jQstQM31BsApwKiupHYPk-J6Mo-GSQR0F8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aGF2ZS15b3Utbm90/aWNlZC10aGUtbmV3/LWdvb2dsZS1zZWFy/Y2gtY29uc29sZS1s/b2dvLXYwLXl5aWw1/anZyZnFlZjEuanBn/P3dpZHRoPTY0MCZj/cm9wPXNtYXJ0JmF1/dG89d2VicCZzPTU2/OTc1YjQ4YjM5NzNk/MjhmNmI4NTg5Nzhi/NGE3ZDczMDYxM2Vi/Yjg" },
  { name: "Screaming Frog", logo: "https://imgs.search.brave.com/oR8x8Ly0L1NLJU0ueaQz2wBV_0u5Zb1AV9BR_n_lNrg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3NjcmVh/bWluZy1mcm9nMzQz/MC5sb2dvd2lrLmNv/bS53ZWJw" },
  { name: "Surfer SEO", logo: "https://imgs.search.brave.com/SQh3PbFYrHzGuhgH6xzV6DaHjQc2UVm1cFi5GxD1-u4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc29mdHdhcmVz/dWdnZXN0LmNvbS9z/b2Z0d2FyZV9sb2dv/L3N1cmZlcnNlby0y/MDI0MDcxNTE1MTcy/OS5wbmc" },
  { name: "Hotjar", logo: "https://imgs.search.brave.com/3O9Q3v6LU5I2P-In1LhMq0RZOIKwvNTnz0KbsNyJm80/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWhvdGphci1sb2dv/LWljb24tZG93bmxv/YWQtaW4tc3ZnLXBu/Zy1naWYtZmlsZS1m/b3JtYXRzLS10ZWNo/bm9sb2d5LXNvY2lh/bC1tZWRpYS1jb21w/YW55LXZvbC0zLXBh/Y2stbG9nb3MtaWNv/bnMtMzAzMjQyMi5w/bmc_Zj13ZWJwJnc9/MjU2" },
  { name: "Moz", logo: "https://imgs.search.brave.com/nKvwKtxKIEqSXlhQLK8Y4lglpPFQg6A41GqcL98rMRY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzEvbW96LWxv/Z28tcG5nX3NlZWts/b2dvLTI3NTA0NC5w/bmc" },
  { name: "ChatGPT", logo: "https://imgs.search.brave.com/4BFJJNsJl_5bqGthCjuD4VpCjjXDyWTVLHw6m1bSYCc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pY29u/cy1zYW1wbGUtcHNv/c3Qtc2V0dGluZy00/MTQ1OTUzMjMuanBn" },
  { name: "Canva", logo: "https://imgs.search.brave.com/v953Gn-mmpyjrxEpH9SpRGYX1wHLiorF_pFwTV-C0Zs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NjczNDg1/OGNhbnZhLXBuZy1s/b2dvLnBuZw" },
  { name: "Figma", logo: "https://imgs.search.brave.com/WRfS1tNUzTbzWBeskeHZVSewzZwmHEZwibUH2q2Oi50/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvRmln/bWEtTG9nby1QTkct/RmlsZS5wbmc" },
  { name: "HubSpot", logo: "https://imgs.search.brave.com/jISZMKOiJKn8pBtMvHQ_WSe3t_92283Yy1SNgTD_yfU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFkLzMy/LzllLzFkMzI5ZWUz/YWQ3NTZlOGE0ODIx/ZDQ4ZTRmNGVkZTJj/LmpwZw" },
];

export const Tools = () => {
  return (
    <section
      id="tools"
      className="relative py-28 bg-black overflow-hidden"
    >
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
        <span className="text-white">SEO</span>{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
          Weapon Stack
        </span>
      </h2>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 w-max px-12"
      >
        {[...tools, ...tools].map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            className="relative group"
          >
            {/* Outer glass circle */}
            <div className="w-28 h-28 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.15)]">
              
              {/* Inner white logo circle */}
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />

                {/* Fallback letter */}
                <span className="hidden w-full h-full items-center justify-center text-cyan-500 font-bold text-xl">
                  {tool.name[0]}
                </span>
              </div>
            </div>

            {/* Neon ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/0 group-hover:border-cyan-400/70 transition-all duration-300" />

            {/* Tooltip */}
            <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-xs text-cyan-300 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
