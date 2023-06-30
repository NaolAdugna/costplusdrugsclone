//Image Family
import DollarImage from "../image/providers/dollarsign.png";
import UserImage from "../image/providers/user.png";
import VerificationImage from "../image/providers/verfication.png";
//Fontawesome Family
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PatientData = [
  {
    id: 1,
    title: ">90% savings on ultra-high-cost drugs",
    url: DollarImage,
  },
  {
    id: 2,
    title: "Improve adherence via increased access + affordability",
    url: UserImage,
  },
  {
    id: 3,
    title: "URAC-accredited facilities delivering to all 50 States",
    url: VerificationImage,
  },
];

const PatientsThanksData = [
  {
    id: 1,
    url: faCheckCircle,
    title: "We shows exactly how our medications are priced",
  },
  {
    id: 2,
    url: faCheckCircle,
    title: "We've provide real  time order and delivery update",
  },
  {
    id: 3,
    url: faCheckCircle,
    title: "We're commited to safety,and price transparency",
  },
];

const FAQData = [
  {
    id: 1,
    title: "Do you carry all medications?",
    description:
      "Today, we carry more than 1,000 commonly prescribed generic medications and a limited number of brand medications. We are continually adding more drugs to our inventory.",
    upicon: faAngleUp,
    downicon: faAngleDown,
    unique: "first",
  },
  {
    id: 2,
    title: "Can patients pay using insurance?",
    description: `Currently, we only accept prescription insurance for Capital Blue Cross, Rightway, and other select prescription plans. However, we will be adding more insurance plans in the coming months. If you aren’t sure if Cost Plus Drugs accepts your insurance, please contact your insurance company and ask if Mark Cuban Cost Plus Drugs is an “in-network pharmacy" with your prescription plan. `,
    uppeon: faAngleUp,
    downicon: faAngleDown,
    unique: "second",
  },
  {
    id: 3,
    title: `Can I send my prescription by escript?`,
    description: `Yes! Our pharmacy partner works with Surescripts to receive eScripts.`,
    upicon: faAngleUp,
    downicon: faAngleDown,
    unique: "third",
  },
  {
    id: 4,
    title: "How do I change a prescription that I've sent through?",
    description: "Please call Truepill Pharmacy at +1 (833) 926 3384",
    upicon: faAngleUp,
    downicon: faAngleDown,
    unique: "fourth",
  },
  {
    id: 5,
    title:
      "How will I be contacted for questions regarding my patient's prescription?",
    description:
      "We will contact you by phone, fax or via your EHR if we have any questions regarding your prescriptions.",
    upicon: faAngleUp,
    downicon: faAngleDown,
    unique: "fifth",
  },
  {
    id: 6,
    title: "What are the common rejections that prescribers might see?",
    description:
      "Common rejections we encounter are potential interactions with other medications, high doses, pregnancy or diagnosis contraindication, or invalid prescribing or prescription information.",
    upicon: faAngleUp,
    downicon: faAngleDown,
    unique: "sixth",
  },
  {
    id: 7,
    title:
      "Who provides medication consultations for my patients if they have any questions?",
    description:
      "Accredited pharmacists are available 24/7 through our fulfillment partners, HealthDyne and Truepill.",
    upicon: faAngleUp,
    downicon: faAngleDown,
    unique: "seventh",
  },
  {
    id: 8,
    title: "Do I need to include the patient's email address on prescriptions?",
    description:
      "Yes, the patient's email address needs to be included on the prescription. If your EMR does not have a field for email, you can include it in a note on the EMR.",
    upicon: faAngleUp,
    downicon: faAngleDown,
    unique: "eight",
  },
];

export default { PatientData, PatientsThanksData, FAQData };
