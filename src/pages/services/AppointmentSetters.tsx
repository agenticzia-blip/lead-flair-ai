import { CalendarCheck } from "lucide-react";
import ServicePage from "@/pages/ServicePage";

const AppointmentSetters = () => (
  <ServicePage
    icon={CalendarCheck}
    title="AI Appointment Setters"
    subtitle="Our AI appointment setters book meetings with your leads, freeing up your time and ensuring no opportunities are missed."
    description="Stop losing deals because of scheduling friction. Our AI Appointment Setter engages with your leads across multiple channels, finds mutually convenient times, sends confirmations and reminders, and handles rescheduling — all automatically. It integrates with your calendar and CRM for a seamless workflow."
    benefits={[
      "Automatic scheduling and reminders",
      "Avoid double-bookings and optimize your calendar",
      "Increase booking conversion rates through intelligent AI interaction",
      "Multi-channel engagement (email, SMS, chat)",
      "Calendar and CRM integration",
      "Automated follow-up sequences for no-shows",
    ]}
    howItWorks={[
      { step: "Connect Your Calendar", desc: "Sync your availability from Google Calendar, Outlook, or any calendar app." },
      { step: "Define Your Criteria", desc: "Set your ideal meeting parameters — duration, buffer time, and preferences." },
      { step: "AI Engages Leads", desc: "The AI reaches out to leads and finds the perfect time slot." },
      { step: "Meetings Booked", desc: "Confirmations and reminders are sent automatically. No-shows get followed up." },
    ]}
  />
);

export default AppointmentSetters;
