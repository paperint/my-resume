import advicegenrator from "../assets/img/advice-generator-app.jpg";
import agecalculator from "../assets/img/age-calculator.jpg";
import creditcard from "../assets/img/creditcard.jpg";
import easybank from "../assets/img/easybank.jpg";
import newhomepage from "../assets/img/newhomepage.jpg";
import newsletter from "../assets/img/newsletter.jpg";
import qrcode from "../assets/img/qrcode.jpg";
import testimonial from "../assets/img/testimonial-grid.jpg";
import tipcalculator from "../assets/img/tipcalculator.jpg";
import todoapp from "../assets/img/todo-app.jpg";
import agencio from "../assets/img/agencio.png";
import resume from "../assets/img/resume.png";
import ecommerce from "../assets/img/ecommerce.jpg";
import multiStepForm from "../assets/img/multiStep.jpg";
import ipAddress from "../assets/img/ipaddress.jpg";
import staticJob from "../assets/img/static-job-listing.jpg";
import restCountry from "../assets/img/restcountry.jpg";
import register from "../assets/img/RegisterForm.png";
import population from "../assets/img/populationgrowth.png";
import { BsGithub } from "react-icons/bs";
import neatly from "../assets/img/neatlyhotel.svg";
import generator from "../assets/img/generatorpassword.png";
import touristblog from "../assets/img/touristblogpost.png";
import lotto from "../assets/img/lotto.png";

const data = [
  {
    name: "Tanakit Kankangboon",
    position: "Developer",
    aboutme:
      "I am a motivated professional with 4 years of experience in accounting and administration. Now, I'm excited to take on a new challenge as a front-end and full-stack developer. I have a strong background in financial management andorganization, and I pay great attention to detail. Web development is my passion,and I enjoy coding, creative problem-solving, and creating user-friendly interfaces. I am dedicated to delivering exceptional web experiences and ready to contribute myadaptability, creativity, and strong work ethic to a collaborative team.",
    experience: [
      {
        id: 1,
        company: "Mini Project",
        position: (
          <>
            <a
              className="inline-flex items-center gap-2 underline underline-offset-2"
              href="https://github.com/Simbly7961/NEATLY-Salmon"
            >
              Neatly Hotel <BsGithub />
            </a>{" "}
          </>
        ),
        description: [
          <p>
            <strong style={{ fontWeight: "bold" }}>Search System: </strong>
            Created an efficient room search system with detailed room
            information.
          </p>,
          <p>
            <strong style={{ fontWeight: "bold" }}>Preview Feature: </strong>
            Developed a random room preview for quick user decision-making.
          </p>,
          <p>
            <strong style={{ fontWeight: "bold" }}>Authentication: </strong>
            Integrated Supabase authentication for secure user registration and
            login.
          </p>,
          <p>
            <strong style={{ fontWeight: "bold" }}>Avatar Management: </strong>
            Enabled avatar uploads and downloads for user personalization.
          </p>,
          <p>
            <strong style={{ fontWeight: "bold" }}>Multi-Form Booking: </strong>
            Designed a versatile booking system with room availability queries
            and reservations.
          </p>,
          <p>
            <strong style={{ fontWeight: "bold" }}>Payment Gateway: </strong>
            Integrated Omise for secure payment processing.
          </p>,
          <p>
            <strong style={{ fontWeight: "bold" }}>Booking History: </strong>
            Implemented user-friendly booking history with modification and
            cancellation options.
          </p>,
          <p>
            <strong style={{ fontWeight: "bold" }}>Admin Dashboard: </strong>
            Developed an admin dashboard for room management, including price
            adjustments and file uploads.
          </p>,
          <p>
            <strong style={{ fontWeight: "bold" }}>Notification: </strong>
            Delevop notification to let user know checkin and checkout date.
          </p>,
        ],
        date: "NOW",
      },
      {
        id: 2,
        company: "Never Sleep Ltd.,Part",
        position: "Administrator & Accountant",
        description: [
          "Addressed customer inquiries via Line Official Account platform.",
          "Coordinated inter-departmental work to foster smooth collaboration.",
          "Assisted in basic accounting tasks alongside primary responsibilities.",
        ],
        date: "Apr.2020 - Apr.2023",
      },
      {
        id: 3,
        company: "Pro Enterprise Service Ltd.,Part",
        position: "Administrator",
        description: [
          "Managed paperwork and database systems.",
          "Coordinated activities and communication across departments.",
          "Facilitated departmental work processes.",
          "Sorted and distributed incoming and outgoing mail.",
          "Oversaw inventory management responsibilities.",
        ],
        date: "Mar.2019 - Apr.2020",
      },
    ],
    skill: [
      "HTML",
      "CSS",
      "Tailwinds",
      "React",
      "NextJS",
      "Javascript",
      "Postgresql",
      "MongoDB",
      "Supabase",
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
        title: "Neatly Hotel",
        link: "https://github.com/Simbly7961/NEATLY-Salmon",
        live: "https://neatly-salmon.vercel.app/",
        tools: [
          "NextJS",
          "NodeJS",
          "Express",
          "PostgreSQL",
          "Supabase",
          "Tailwindcss",
          "React-hook-form",
          "Shadcn",
        ],
        image: neatly,
      },
      {
        title: "Register Form",
        link: "https://github.com/paperint/registerform",
        live: "https://registerform-kappa.vercel.app/",
        tools: ["NextJS", "Typescript", "React-hook-form", "Supabase"],
        image: register,
      },
      {
        title: "Tourist Blogpost",
        link: "https://github.com/paperint/touristBlogpost",
        live: "https://tourist-blogpost.vercel.app/",
        tools: ["VueJS", "NodeJS", "Express", "Tailwindcss", "DaisyUi"],
        image: touristblog,
      },
      {
        title: "Population Growth",
        link: "https://github.com/paperint/Countrypopulation",
        live: "https://countrypopulation-gules.vercel.app/",
        tools: ["NextJS", "PostgreSQL", "Tailwindcss", "ChartJS"],
        image: population,
      },
      {
        title: "Multi Step Form",
        link: "https://github.com/paperint/multi-step-form",
        live: "https://merry-granita-5e8c91.netlify.app/",
        tools: ["Javascript", "React", "Tailwindcss"],
        image: multiStepForm,
      },
      {
        title: "Generater Password",
        link: "https://github.com/paperint/generatepassword",
        live: "https://generatepassword-two.vercel.app/",
        tools: ["VueJS", "Tailwindcss", "DaisyUI"],
        image: generator,
      },
      {
        title: "Lotto",
        link: "https://github.com/paperint/lotto",
        live: "https://lotto-tanakit.netlify.app/",
        tools: ["React", "Javascript", "Tailwindcss"],
        image: lotto,
      },
      {
        title: "Static Job Listing",
        link: "https://github.com/paperint/static-job-listing",
        live: "https://dancing-squirrel-25a20f.netlify.app/",
        tools: ["Javascript", "React", "Tailwindcss"],
        image: staticJob,
      },
      {
        title: "Rest Countries API",
        link: "https://github.com/paperint/rest-countries-api",
        live: "https://shimmering-macaron-b85fb7.netlify.app/",
        tools: ["Javascript", "React", "Tailwindcss", "axios"],
        image: restCountry,
      },
      {
        title: "Age Calculator",
        link: "https://github.com/paperint/age-calculator",
        live: "https://neon-klepon-c3502a.netlify.app/",
        tools: ["Javascript", "React", "Tailwindcss"],
        image: agecalculator,
      },
      {
        title: "Todo App",
        link: "https://github.com/paperint/todo-app",
        live: "https://curious-biscotti-15e8f6.netlify.app/",
        tools: ["Javascript", "React", "Tailwindcss"],
        image: todoapp,
      },
      {
        title: "Easybank Landingpage",
        link: "https://github.com/paperint/easybank-landingpage",
        live: "https://extraordinary-buttercream-315853.netlify.app/",
        tools: ["Javascript", "React", "Tailwindcss"],
        image: easybank,
      },
      {
        title: "Tip Calculator App",
        link: "https://github.com/paperint/Tip-Calculator",
        live: "https://boisterous-marigold-6ea197.netlify.app/",
        tools: ["Javascript", "React", "Tailwindcss"],
        image: tipcalculator,
      },
      {
        title: "E-commerce Product Page",
        link: "https://github.com/paperint/e-commerce-product-page",
        live: "https://sparkling-axolotl-3b5137.netlify.app/",
        tools: ["Javascript", "React", "Tailwindcss"],
        image: ecommerce,
      },
      {
        title: "IP Address Tracking Master",
        link: "https://github.com/paperint/ip-address-tracker-master",
        live: "https://tangerine-zuccutto-4a2964.netlify.app/",
        tools: ["Javascript", "React", "Tailwindcss", "Axios"],
        image: ipAddress,
      },

      {
        title: "Newsletter Signup",
        link: "https://github.com/paperint/newsletter-sign-up-with-success-message",
        live: "https://bejewelled-madeleine-3fcf4e.netlify.app",
        tools: ["Javascript", "React", "Tailwindcss"],
        image: newsletter,
      },
      {
        title: "Interative CreditCard",
        link: "https://github.com/paperint/interactive-creditcard",
        live: "https://marvelous-lollipop-4c3819.netlify.app",
        tools: ["Javascript", "React", "Tailwindcss"],
        image: creditcard,
      },
      {
        title: "Testimonials Grid",
        link: "https://github.com/paperint/testimonials-grid-section",
        live: "https://inspiring-kelpie-61d651.netlify.app",
        tools: ["Javascript", "React", "Tailwindcss", "Grid"],
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
        tools: ["Javascript", "React", "Tailwindcss", "Axios"],
        image: advicegenrator,
      },
      {
        title: "News Homepage",
        link: "https://github.com/paperint/news-homepage-main",
        live: "https://monumental-yeot-6bf18a.netlify.app/",
        tools: ["Javascript", "React", "Tailwindcss"],
        image: newhomepage,
      },
      {
        title: "Resume",
        link: "https://github.com/paperint/my-resume",
        live: "https://wondrous-churros-b3c5a6.netlify.app",
        tools: ["Javascript", "React", "Tailwindcss"],
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
      {
        title: "English Test By EF SET",
        link: "https://www.efset.org/cert/YcomDP",
      },
    ],
  },
];

export default data;
