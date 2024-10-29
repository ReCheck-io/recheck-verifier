import VerifyForm from "@/components/Form";
import Timeline from "@/components/Timeline";

export default function Page() {
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-between">
      <Timeline />
      <VerifyForm />
    </div>
  );
}
