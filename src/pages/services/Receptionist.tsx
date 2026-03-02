import { UserCheck } from "lucide-react";
import ServicePage from "@/pages/ServicePage";

const Receptionist = () => (
  <ServicePage
    icon={UserCheck}
    title="AI Receptionist"
    subtitle="Replace traditional receptionists with AI-powered systems that answer calls, schedule appointments, and handle inquiries 24/7."
    description="Our AI Receptionist handles all incoming communications with the professionalism and warmth of your best employee — but with 24/7 availability. It answers calls, routes inquiries, schedules appointments, and provides information to callers, all while maintaining a natural conversational tone that represents your brand."
    benefits={[
      "24/7 availability for your clients",
      "Handle inquiries, schedule meetings, and route calls effortlessly",
      "Reduce overhead costs by automating front-line tasks",
      "Natural, human-like voice interactions",
      "Customizable to match your brand voice and protocols",
      "Seamless handoff to human agents when needed",
    ]}
    testimonial={{
      quote: "Our AI Receptionist handles 90% of incoming calls without any human intervention. Our clients love the instant response.",
      name: "Michael Chen",
      company: "Director, PrimeHealth Clinics",
    }}
  />
);

export default Receptionist;
