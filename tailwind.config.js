/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "var(--font-display)",
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      spacing: {
        "sp-1": "var(--spacing-1)",
        "sp-2": "var(--spacing-2)",
        "sp-3": "var(--spacing-3)",
        "sp-4": "var(--spacing-4)",
        "sp-6": "var(--spacing-6)",
        "sp-8": "var(--spacing-8)",
        "sp-12": "var(--spacing-12)",
        "sp-16": "var(--spacing-16)",
        "sp-24": "var(--spacing-24)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        "accent-soft": "hsl(var(--accent-soft))",
        ring: "hsl(var(--ring))",
        border: "hsl(var(--border))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
