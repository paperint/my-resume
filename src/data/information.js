import advicegenrator from "../img/advice-generator-app.jpg";
import agecalculator from "../img/age-calculator.jpg";
import creditcard from "../img/creditcard.jpg";
import easybank from "../img/easybank.jpg";
import newhomepage from "../img/newhomepage.jpg";
import newsletter from "../img/newsletter.jpg";
import qrcode from "../img/qrcode.jpg";
import testimonial from "../img/testimonial-grid.jpg";
import tipcalculator from "../img/tipcalculator.jpg";
import todoapp from "../img/todo-app.jpg";
import agencio from "../img/agencio.png";
import resume from "../img/resume.png";

const data = [
  {
    name: "Tanakit Kankangboon",
    position: "Developer",
    aboutme:
      "I am a motivated professional with 27 years of experience in accounting and administration. Now, I'm excited to take on a new challenge as a front-end and full-stack developer. I have a strong background in financial management and organization, and I pay great attention to detail. Web development is my passion, and I enjoy coding, creative problem-solving, and creating user-friendly interfaces. I am dedicated to delivering exceptional web experiences and ready to contribute my adaptability, creativity, and strong work ethic to a collaborative team.",
    experience: [
      {
        id: 1,
        company: "Never Sleep Ltd.,Part",
        position: "Administrator & Accountant",
        description:
          "my primary responsibility was to address basic issues and inquiries from customers, primarily utilizing the Line Official Account platform. Additionally, I played a key role in coordinating the work among different departments, ensuring smooth collaboration. Furthermore, I also took on some accounting tasks as part of my role.",
        date: "Apr.2020 - Apr.2023",
      },
      {
        id: 2,
        company: "Pro Enterprise Service Ltd.,Part",
        position: "Administrator",
        description:
          "I was responsible for various tasks, including managing all paperwork and database systems. I also handled coordination between departments and facilitated their work and activities. Additionally, I sorted and distributed incoming and outgoing mail. Moreover, I was in charge of inventory management.",
        date: "Mar.2019 - Apr.2020",
      },
    ],
    skill: [
      "HTML",
      "CSS",
      "Tailwinds",
      "React",
      "Javascript",
      "Python",
      "Excel",
      "SQL",
    ],
    education: [
      {
        faculty: "Full-Stack Software Development - TechUp",
        graduated: "June 2023 - October - 2023",
      },
      {
        faculty: "Economics - Chiang Mai University",
        graduated: "Graduated 2018",
      },
    ],
    recentwork: [
      {
        title: "Easybank Landingpage",
        link: "https://github.com/paperint/easybank-landingpage",
        live: "https://extraordinary-buttercream-315853.netlify.app/",
        tools: ["Vite", "React", "Tailwindcss"],
        image: easybank,
      },
      {
        title: "Age Calculator",
        link: "https://github.com/paperint/age-calculator",
        live: "https://neon-klepon-c3502a.netlify.app/",
        tools: ["Vite", "React", "Tailwindcss"],
        image: agecalculator,
      },
      {
        title: "Todo App",
        link: "https://github.com/paperint/todo-app",
        live: "https://curious-biscotti-15e8f6.netlify.app/",
        tools: ["Vite", "React", "Tailwindcss"],
        image: todoapp,
      },
      {
        title: "Tip Calculator App",
        link: "https://github.com/paperint/Tip-Calculator",
        live: "https://boisterous-marigold-6ea197.netlify.app/",
        tools: ["Vite", "React", "Tailwindcss"],
        image: tipcalculator,
      },

      {
        title: "Newsletter Signup",
        link: "https://github.com/paperint/newsletter-sign-up-with-success-message",
        live: "https://bejewelled-madeleine-3fcf4e.netlify.app",
        tools: ["Vite", "React", "Tailwindcss"],
        image: newsletter,
      },
      {
        title: "Interative CreditCard",
        link: "https://github.com/paperint/interactive-creditcard",
        live: "https://marvelous-lollipop-4c3819.netlify.app",
        tools: ["Vite", "React", "Tailwindcss"],
        image: creditcard,
      },
      {
        title: "Testimonials Grid",
        link: "https://github.com/paperint/testimonials-grid-section",
        live: "https://inspiring-kelpie-61d651.netlify.app",
        tools: ["Vite", "React", "Tailwindcss", "Grid"],
        image: testimonial,
      },
      {
        title: "Agencio Landingpage",
        link: "https://github.com/paperint/Agencio_Landingpage",
        live: "#",
        tools: ["Tailwindcss"],
        image: agencio,
      },
      {
        title: "QR Code Component",
        link: "https://github.com/paperint/QR-code-component",
        live: "https://qr-code-component-three-rose.vercel.app/",
        tools: ["Tailwindcss"],
        image: qrcode,
      },
      {
        title: "Advice Generator App",
        link: "https://github.com/paperint/Advice-generator-app",
        live: "https://tranquil-horse-53e8bc.netlify.app/",
        tools: ["Vite", "React", "Tailwindcss", "Axios"],
        image: advicegenrator,
      },
      {
        title: "News Homepage",
        link: "https://github.com/paperint/news-homepage-main",
        live: "https://monumental-yeot-6bf18a.netlify.app/",
        tools: ["Vite", "React", "Tailwindcss"],
        image: newhomepage,
      },
      {
        title: "Resume",
        link: "https://github.com/paperint/my-resume",
        live: "https://wondrous-churros-b3c5a6.netlify.app",
        tools: ["Vite", "React", "Tailwindcss"],
        image: resume,
      },
    ],
    email: "Tanakit.Kankangboon@gmail.com",
    phone: "088-2669690",
    githubLink: "https://github.com/paperint?tab=repositories",
    linkedIn: "https://www.linkedin.com/in/tanakit-kankangboon-32329b1a5/",
    certificate: [
      {
        title: "Python (Basic)",
        link: "https://www.hackerrank.com/certificates/c95796d20b03",
      },
      {
        title: "SQL (Basic)",
        link: "https://www.hackerrank.com/certificates/ec39a0086ab3",
      },
    ],
  },
];

export default data;
