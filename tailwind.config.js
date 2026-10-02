/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    /* Mobile-first breakpoints */
    screens: {
      xs: "375px",   // small phones
      sm: "480px",   // large phones
      md: "768px",   // tablets
      lg: "1024px",  // small desktops
      xl: "1280px",  // desktops
      "2xl": "1536px",
    },
    extend: {
      /* Brand color palette */
      colors: {
        brand: {
          50:  "#f0edff",
          100: "#e0d9ff",
          200: "#c2b3ff",
          300: "#a38dff",
          400: "#8567ff",
          500: "#6C47FF", // primary
          600: "#5636cc",
          700: "#402899",
          800: "#2b1b66",
          900: "#150d33",
        },
        success: {
          50: "#edfdf5",
          500: "#22c55e",
          700: "#15803d",
        },
        warning: {
          50: "#fffbeb",
          500: "#f59e0b",
          700: "#b45309",
        },
        danger: {
          50: "#fef2f2",
          500: "#ef4444",
          700: "#b91c1c",
        },
        surface: {
          0:   "#ffffff",
          50:  "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
      },
      /* Typography */
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },
      /* Spacing tailored for mobile touch targets */
      spacing: {
        "safe-top":    "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left":   "env(safe-area-inset-left)",
        "safe-right":  "env(safe-area-inset-right)",
        "touch": "44px", // minimum touch target
      },
      /* Border radius */
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      /* Box shadows */
      boxShadow: {
        card:   "0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)",
        "card-md": "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)",
        "card-lg": "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)",
        glow:   "0 0 20px rgb(108 71 255 / 0.35)",
      },
      /* Animation durations */
      transitionDuration: {
        250: "250ms",
      },
      /* z-index scale */
      zIndex: {
        navbar:  "100",
        sidebar: "200",
        modal:   "300",
        toast:   "400",
      },
    },
  },
  plugins: [],
};
