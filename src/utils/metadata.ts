import { Metadata } from "next";

export function constructMetadata({
  title = "Hesham El-Mahdi - Web Development",
  description = "Web developer from Cairo, Egypt. Based in Indiana, USA. I excel at crafting innovative web solutions and robust software for startups, enterprises, and everything in between. Web development, Web design, CRM systems, and so much more.",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    icons,
    metadataBase: new URL("https://www.heshamelmahdi.com/"),
  };
}
