import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = { title: 'Chopsticks Restaurant | Authentic Asian, Chinese & Tibetan Cuisine', description: 'Experience the authentic taste of Asia at Chopsticks Restaurant. Freshly prepared Chinese, Tibetan, and Asian delicacies. Order now via WhatsApp for fast delivery!', openGraph: { title: 'Chopsticks Restaurant | Authentic Asian, Chinese & Tibetan Cuisine', description: 'Experience the authentic taste of Asia at Chopsticks Restaurant. Freshly prepared Chinese, Tibetan, and Asian delicacies. Order now via WhatsApp for fast delivery!', type: 'website' } };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
