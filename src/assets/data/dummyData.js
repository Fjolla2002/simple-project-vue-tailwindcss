import product1 from "../images/product1.jpeg";
import product2 from "../images/product2.jpeg";
import product3 from "../images/product3.jpeg";
import product4 from "../images/product4.jpeg";
import product5 from "../images/product5.jpeg";
import product6 from "../images/product6.jpeg";
import product7 from "../images/product7.jpeg";
import product8 from "../images/product8.jpg";
import service1 from "../images/service1.jpeg";
import service2 from "../images/service2.jpeg";
import profile1 from "../images/profile.png";
import profile2 from "../images/profile1.jpg";

const data = {
  products: [
    { image: product1 },
    { image: product2 },
    { image: product3 },
    { image: product4 },
    { image: product5 },
    { image: product6 },
    { image: product7 },
    { image: product8 },
  ],
  services: [
    {
      image: service1,
      title: "For business owners",
      desc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      image: service2,
      title: "For bloggers",
      desc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
  ],
  statistics: [
    {
      count: 50,
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      count: 17,
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      count: 20,
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      count: 13,
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
  ],
  team: [
    {
      name: "Olivia Anderson",
      position: "Lead Developer",
      desc: "Olivia is a seasoned software engineer with a passion for creating innovative and efficient solutions to complex problems.",
      image: profile1,
    },
    {
      name: "Ethan Martinez",
      position: "Marketing Manager",
      desc: "Ethan excels in crafting compelling marketing strategies and campaigns that resonate with our audience, driving brand visibility and engagement.",
      image: profile2,
    },
    {
      name: "Maya Rodriguez",
      position: "UX/UI Designer",
      desc: "Maya is a creative and detail-oriented designer, dedicated to crafting seamless user experiences and visually stunning interfaces.",
      image: profile1,
    },
    {
      name: "Alexander Carter",
      position: "Operations Manager",
      desc: "Alexander oversees our day-to-day operations, ensuring smooth-workflow and efficiency across the organization with a focus on continous improvement.",
      image: profile2,
    },
  ],
  faq: [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of architectural services, including conceptual design, schematic design, design development, construction documentation, and construction administration. Additionally, we provide expertise in urban planning, interior design, sustainable design, and historic preservation.",
    },
    {
      question:
        "How do you collaborate with clients during the design process?",
      answer:
        "We believe in a collaborative design process where the client's vision and feedback are integral. From the initial concept phase to finalizing details, we maintain open communication channels, actively seeking input and insights from our clients every step of the way. Through regular meetings, presentations, and design workshops, we ensure that the project evolves in alignment with the client's goals, preferences, and aspirations. This collaborative approach not only fosters a sense of ownership and satisfaction but also results in tailored solutions that uniquely reflect the client's vision.",
    },
    {
      question: "How do you handle project budgets and timelines?",
      answer:
        "We understand the importance of staying within budget and meeting project deadlines. Our team carefully evaluates project requirements and collaborates closely with clients to establish realistic budgets and timelines from the outset. Throughout the design and construction process, we employ effective project management strategies to monitor progress, mitigate risks, and ensure timely delivery without compromising quality.",
    },
  ],
};

export { data };
