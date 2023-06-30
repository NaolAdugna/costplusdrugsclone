//Image Family
import WorkImage1 from "../image/work1.png";
import WorkImage2 from "../image/work2.png";
import WorkImage3 from "../image/work3.png";

import PriceImage1 from "../image/price1.png";
import PriceImage2 from "../image/price2.png";
import PriceImage3 from "../image/price3.png";
import PriceImage4 from "../image/price4.png";

import PlusCircleImage from "../image/pluscircle2.png";
import CheckCircleImage from "../image/checkmark3.png";

import WSJPressImage from "../image/wsj2.jpeg";
import CBSPressImage from "../image/cbs.png";
import CNNPressImage from "../image/cnn4.jpeg";
import ForbesPressImage from "../image/forbes.jpeg";
import USAPressImage from "../image/usatoday1.png";
import NPRPressImage from "../image/npr.png";
//Fontawesome Family
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const FirstDiv = [
  {
    id: 1,
    url: "/",
    title: "Browser Medications",
  },
  {
    id: 2,
    url: "/",
    title: "Contact Doctor",
  },
  {
    id: 3,
    url: "/",
    title: "Privacy Policy",
  },
];
const SecondDiv = [
  {
    id: 4,
    url: "/",
    title: "Our Mission",
  },
  {
    id: 5,
    url: "/",
    title: "FAQs",
  },
  {
    id: 6,
    url: "/",
    title: "HIPAA Policy",
  },
];
const ThirdDiv = [
  {
    id: 7,
    url: "/",
    title: "For Provider",
  },
  {
    id: 8,
    url: "/",
    title: "Contact Us",
  },
  {
    id: 9,
    url: "/",
    title: "Terms of Service",
  },
];

const HeroData = [
  {
    id: 1,
    title: "Imatinib",
    description: "(Generic for Gleevic)",
    price: "$12.00",
    retail: "Retail Price:$2502.50",
    url: "/",
  },
  {
    id: 2,
    title: "Abiraterone Acetate",
    description: "(Generic for Zytiga)",
    price: "$33.60",
    retail: "Retail Price:$1093.20",
    url: "/",
  },
  {
    id: 3,
    title: "Invokana",
    description: "(Canagliflozin)",
    price: "$243.92",
    retail: "Retail Price:$676.14",
    url: "/",
  },
  {
    id: 4,
    title: "Mesalamine",
    description: "(Generic for Canasa)",
    price: "$26.70",
    retail: "Retail Price:$766.80",
    url: "/",
  },
  {
    id: 5,
    title: "Lisinopril",
    description: "(Generic for Prinivil)",
    price: "$3.60",
    retail: "Retail Price:$24.00",
    url: "/",
  },
  {
    id: 6,
    title: "Fluoxetine",
    description: "(Generic for Prozac)",
    price: "$4.20",
    retail: "Retail Price:$22.94",
    url: "/",
  },
  {
    id: 7,
    title: "Vancomycin",
    description: "(Generic for Vancocin HCI)",
    price: "$32.10",
    retail: "Retail Price:$679.04",
    url: "/",
  },
  {
    id: 8,
    title: "Tacrolimus",
    description: "(Generic for Prograf)",
    price: "$7.50",
    retail: "Retail Price:$87.48",
    url: "/",
  },
  {
    id: 9,
    title: "Sertraline",
    description: "(Generic for Zoloft)",
    price: "$3.90",
    retail: "Retail Price:$74.00",
    url: "/",
  },

  {
    id: 10,
    title: "Atorvastatin",
    description: "(Generic for Lipitor)",
    price: "$3.60",
    retail: "Retail Price:$55.08",
    url: "/",
  },
];

const WorkData = [
  {
    id: 1,
    no: 1,
    title: "Find your medication",
    url: WorkImage1,
  },
  {
    id: 2,
    no: 2,
    title: "Ask your doctor to send our pharmacy partner your prescription",
    url: WorkImage2,
  },
  {
    id: 3,
    no: 3,
    title: "Receive your medications",
    url: WorkImage3,
  },
];

const PriceData = [
  {
    id: 1,
    url: PriceImage1,
    title: "Manufacturing",
    subtitle: "",
    price: "$31.20",
  },
  {
    id: 2,
    url: PriceImage2,
    title: "15% Markup",
    subtitle: "",
    price: "$4.80",
  },
  {
    id: 3,
    url: PriceImage3,
    title: "Pharmacy Labor",
    subtitle: "",
    price: "$3.00",
  },
  {
    id: 4,
    url: PriceImage4,
    title: "Shipping",
    subtitle: "Additional cost at checkout",
    price: "$5",
  },
];

const AffordableData = [
  {
    id: 1,
    icon: PlusCircleImage,
    title: "Diabetes",
    url: "/",
  },
  {
    id: 2,
    icon: PlusCircleImage,
    title: "Heart Health",
    url: "/",
  },
  {
    id: 3,
    icon: PlusCircleImage,
    title: "Gastrointestin",
    url: "/",
  },
  {
    id: 4,
    icon: PlusCircleImage,
    title: "Mental Health",
    url: "/",
  },
  {
    id: 5,
    icon: PlusCircleImage,
    title: "High Blood Pressure",
    url: "/",
  },
  {
    id: 6,
    icon: PlusCircleImage,
    title: "Cancer",
    url: "/",
  },
];

const OfferData = [
  {
    id: 1,
    title: "Find and afford the drug you need",
    url: CheckCircleImage,
  },
  {
    id: 2,
    title: "know what your drug costs",
    url: CheckCircleImage,
  },
  {
    id: 3,
    title: "Track you order in real time",
    url: CheckCircleImage,
  },
];

const PressData = [
  {
    id: 1,
    title: "Mark Cuban Has a New Job: Working at an Online Discount Pharmacy",
    description:
      "Founded by a radiologist-math prodigy, the startup aims to lower drug costs by eliminating middlemen—and eventually to manufacture..",
    url: WSJPressImage,
    link: "Read Article",
  },
  {
    id: 2,
    title:
      "Entrepreneur Mark Cuban joined CBS News to discuss his new low-cost online...",
    description:
      "Entrepreneur and owner of the Dallas Mavericks Mark Cuban joined CBS News to discuss his new low-cost online ...",
    url: CBSPressImage,
    link: "Read Article",
  },
  {
    id: 3,
    title:
      "Prescription drugs are too expensive for many Americans. These companies are...",
    description:
      "It's an experience millions of Americans have had: you go to the doctor, get a prescription, take it to the pharmacy and...",
    url: CNNPressImage,
    link: "Read Article",
  },
  {
    id: 4,
    title:
      "Billionaire Mark Cuban Launches Company To Provide Affordable Generic Drugs",
    description:
      "Billionaire investor Mark Cuban launched an online company Thursday that offers more than 100 generic drugs at an affordable price...",
    url: ForbesPressImage,
    link: "Read Article",
  },
  {
    id: 5,
    title:
      "Billionaire Mavericks owner Mark Cuban launches online company offering prescription drugs",
    description:
      "Billionaire and Mavericks owners Mark Cuban has opened up an online company offering prescription drugs at cheaper prices...",
    url: USAPressImage,
    link: "Read Article",
  },
  {
    id: 6,
    title:
      "Businessman and Mavs owner Mark Cuban launches an online company for generic drugs",
    description:
      "Billionaire investor and Dallas Mavericks owner Mark Cuban has launched an online company for generic drugs...",
    url: NPRPressImage,
    link: "Read Article",
  },
];

const FAQData = [
  {
    id: 1,
    unique: "first",
    title: "What is the Mark Cuban Cost Plus Drug Company?",
    description:
      "Mark Cuban Cost Plus Drug Company (more commonly known as Cost Plus Drugs) offers safe medicines at the lowest possible price. We provide complete transparency on  the cost of drugs so that patients know they are getting a fair price. As a public-benefit corporation, we prioritize our social mission of improving public health. To learn more about our mission, check out costplusdrugs.com.",
    Upicon: faAngleUp,
    downicon: faAngleDown,
  },
  {
    id: 2,
    unique: "second",
    title: "How does Cost Plus Drugs work?",
    description: `1.Find your medication in our online store by searching, browsing alphabetically or by medical condition.2.Once you’ve found your medication, sign up for an account. 
    3.Reach out to your doctor or provider with our provided instructions (costplusdrugs.com/contact-your-doctor) to receive your prescriptions. 
     4.Once we receive a prescription from your doctor, you’ll be notified to checkout. 
     5.Your medications will be delivered straight to your door in just a few days.`,
    Upicon: faAngleUp,
    downicon: faAngleDown,
  },
  {
    id: 3,
    unique: "third",
    title: "How are your prices so cheap?",
    description:
      "Our prices are the true cost to get each medication from the manufacturer to you. We cut out the pharmacy middlemen and negotiate directly with manufacturers to get the best possible price.Then, we show you exactly how much you’ll pay for us to keep our business running and how much it will cost to prepare and ship your prescription.",
    Upicon: faAngleUp,
    downicon: faAngleDown,
  },
  {
    id: 4,
    unique: "fourth",
    title: "Can I use my insurance?",
    description: `Currently, we only accept prescription insurance for Capital Blue Cross, Rightway, and other select prescription plans. However, we will be adding more insurance plans in the coming months.  If you aren’t sure if Cost Plus Drugs accepts your insurance, please contact your insurance company and ask if Mark Cuban Cost Plus Drugs is "an in-network pharmacy" with your prescription plan.`,
    Upicon: faAngleUp,
    downicon: faAngleDown,
  },
  {
    id: 5,
    unique: "fifth",
    title: "My provider sent me here. What do I do next?",
    description:
      "Just sign up for an account and the prescription from your doctor will be connected to your account. Then, our pharmacy partner will notify you when you’re ready to checkout and get your medications delivered",
    Upicon: faAngleUp,
    downicon: faAngleDown,
  },
  {
    id: 6,
    unique: "sixth",
    title: "Does Mark Cuban really own this company?",
    description:
      "Yes! Investor Mark Cuban and CEO Dr. Alexander Oshmyansky strongly believe that every American should have access to safe, affordable medicines. Many Americans are spending crazy amounts of money each month just to stay healthy. We know there’s a better way. We work with HealthDyne and Truepill, our trusted fulfillment partners to fill your prescriptions from their accredited pharmacies. HealthDyne and Truepill's licensed pharmacists will ensure your medication is safely dispensed and shipped to you, and they are available 24/7 for consultations or questions about your medication. To learn more about our mission and how Mark Cuban has been involved, check out Our Mission.",
    Upicon: faAngleUp,
    downicon: faAngleDown,
  },
  {
    id: 7,
    unique: "seventh",
    title: "Who fills my prescription?",
    description:
      "We work with HealthDyne and Truepill, our trusted fulfillment partners to fill your prescriptions. HealthDyne and Truepill's accredited pharmacists will ensure your medication is safe and delivered to your doorstep on time.",
    Upicon: faAngleUp,
    downicon: faAngleDown,
  },
  {
    id: 8,
    unique: "eight",
    title: "Can I get all my medications here?",
    description:
      "For now, we only offer a set amount of medications. To see all medications we currently offer, please go to costplusdrugs.com. We will be expanding this list regularly so if you don't see your medication, please sign up for our newsletter to be updated when we add new medications.",
    Upicon: faAngleUp,
    downicon: faAngleDown,
  },
];

export default {
  FirstDiv,
  SecondDiv,
  ThirdDiv,
  HeroData,
  WorkData,
  PriceData,
  AffordableData,
  OfferData,
  PressData,
  FAQData,
};
