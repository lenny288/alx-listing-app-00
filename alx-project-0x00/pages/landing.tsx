import Card from "@/components/Card"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
    </div>
  )
}
export default Landing

import Button from "@/components/Button";

export default function Landing() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Landing Page Buttons</h1>

      {/* Small Buttons */}
      <div className="flex gap-3">
        <Button title="Small - ig" styles="text-sm px-3 py-1 rounded-ig" />
        <Button title="Small - ig" styles="text-sm px-3 py-1 rounded-ig" />
        <Button title="Small - ig" styles="text-sm px-3 py-1 rounded-ig" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-3">
        <Button title="Medium - ig" styles="text-base px-4 py-2 rounded-ig" />
        <Button title="Medium - ig" styles="text-base px-4 py-2 rounded-ig" />
        <Button title="Medium - ig" styles="text-base px-4 py-2 rounded-ig" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-3">
        <Button title="Large - ig" styles="text-lg px-6 py-3 rounded-ig" />
        <Button title="Large - ig" styles="text-lg px-6 py-3 rounded-ig" />
        <Button title="Large - ig" styles="text-lg px-6 py-3 rounded-ig" />
      </div>
    </div>
  );
}

