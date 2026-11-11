import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // В монорепо с lockfile в корне — явно указываем корень приложения
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
