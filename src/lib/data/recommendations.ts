export interface Recommendation {
  id: number;
  name: string;
  designation: string;
  company: string;
  avatar: string;
  linkedin: string;
  date: string;
  relationship: string;
  recommendation: string;
}

const recommendationsPage = "https://www.linkedin.com/in/hasib11038/details/recommendations/?detailScreenTabIndex=0";

export const recommendations: Recommendation[] = [
  {
    id: 1,
    name: "Tahmid Rahman",
    designation: "AI Corporate Trainer & Consultant",
    company: "FDE AI Engineer",
    avatar: "/img/re-tahmid.png",
    linkedin: recommendationsPage,
    date: "July 2025",
    relationship: "Worked with Hasibul on the same team",
    recommendation: "I wholeheartedly recommend Hasibul Hasan bhai as an exceptional full stack expert with strong AI capabilities. Over time, he has consistently demonstrated technical excellence, adaptability, and leadership whenever the team needed guidance. On critical projects, Hasib bhai has been my go-to discussion partner—his insights, clarity, and depth of knowledge are second to none. From frontend to backend, from AI model integration to seamless deployment, Hasibul Hasan bhai is truly a complete package. Beyond his technical skills, he is a team player in every sense, always ready to support and uplift others. Any team would be lucky to have such a valuable and dependable asset.",
  },
  {
    id: 2,
    name: "Tanimul Haque Khan",
    designation: "Senior Engineering Manager",
    company: "Brain Station 23",
    avatar: "/img/re-tanimul.png",
    linkedin: recommendationsPage,
    date: "September 2024",
    relationship: "Was Hasibul's mentor",
    recommendation: "He is one of the most passionate web developers who have worked under me. He is very keen to learn new things and takes ownership of the tasks. His biggest feat under my supervision is that he delivered a custom e-commerce site single-handedly, and the client was very happy with it.",
  },
  {
    id: 3,
    name: "Sifat Ul Alam Nabil",
    designation: "Machine Learning Engineer",
    company: "LLM Applications & Backend Engineering",
    avatar: "/img/re1.png",
    linkedin: "https://www.linkedin.com/in/sifat-nabil/",
    date: "February 2024",
    relationship: "Worked with Hasibul on the same team",
    recommendation: "A key member of our development team has been Hasibul Hasan. He was in charge of creating and designing our applications' backends. His proficiency with the MERN stack and meticulous attention to detail in determining the optimal strategy made a significant contribution to our systems' resilience and scalability. His critical thinking skills are a wonderful advantage in solving problems. In addition to his natural development, he also excels at mentoring and advising junior people. I heartily endorse Hasibul as a capable team player and a priceless asset that anyone can rely on.",
  },
  {
    id: 4,
    name: "Faisal Ahmed",
    designation: "Senior Software Engineer I",
    company: "Brain Station 23",
    avatar: "/img/re2.png",
    linkedin: "https://www.linkedin.com/in/md-faisal-ahmed/",
    date: "February 2024",
    relationship: "Worked with Hasibul on the same team",
    recommendation: "Hasibul Hasan is an outstanding professional with expertise in MERN Stack, AWS, and DevOps. His skills in development, cloud infrastructure, and DevOps practices are truly impressive. As a MERN Stack developer, Hasibul excels in React, Node.js, and MongoDB, ensuring efficient and scalable projects. His proficiency in AWS services enables him to design and manage cloud infrastructure effectively, contributing to project success. His DevOps expertise streamlines development processes through CI/CD pipelines and reliable application delivery. A valuable team player, Hasibul's positive attitude and dedication make him an asset to any project.",
  },
  {
    id: 5,
    name: "Ziad Mohib",
    designation: "Senior Business Analyst",
    company: "Brain Station 23",
    avatar: "/img/re4.png",
    linkedin: "https://www.linkedin.com/in/ziadmohib/",
    date: "February 2024",
    relationship: "Worked with Hasibul on the same team",
    recommendation: "I highly recommend Hasibul Hasan as a software engineer. His outstanding ownership, coupled with an ability to meet client requirements effectively, makes him an awesome teammate.",
  },
];
