import { Metadata } from "next";

export const metaData: Metadata = {
  title: "About | Next App",
  description: "A page about where you have the opportunity to contact us",
};

const About = () => {
  return <h1 className="text-3xl">SelectAbout</h1>;
};

export default About;
