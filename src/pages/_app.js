import { SocketProvider } from "@/content/socket";
import { Inter, Roboto, Roboto_Slab } from "@next/font/google";

import "@/styles/globals.css";

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto_slab",
  weight: ["100", "300", "400"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto_slab.variable} font-sans`}>
      <SocketProvider>
        <Component {...pageProps} />
      </SocketProvider>
    </main>
  );
}
