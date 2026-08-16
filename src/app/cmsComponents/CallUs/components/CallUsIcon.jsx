import { PhoneIcon } from "@phosphor-icons/react";

export default function CallUsIcon() {
  return (
    <div className=" mb-5 flex h-14 w-14 items-center justify-center rounded-full  bg-primary-1/90">
      <PhoneIcon
        size={26}
        weight="regular"
        className="text-white rtl:-scale-x-100"
      />
    </div>
  );
}
