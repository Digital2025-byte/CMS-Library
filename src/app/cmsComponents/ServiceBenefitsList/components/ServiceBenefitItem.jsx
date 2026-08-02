import { typography } from "@/styles/typography";
import { getIconByName } from "@/constants/Icons";

export default function ServiceBenefitItem({ title, description, icon }) {
  const Icon = getIconByName(icon) || getIconByName("Star");

  return (
    <div className="flex items-start gap-3 md:gap-3 lg:gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary-1 md:h-11 md:w-11 lg:h-10 lg:w-10 mt-0 md:mt-3 ">
        {Icon ? <Icon className="h-5 w-5" weight="fill" size={20} /> : null}
      </div>

      <div className="min-w-0 flex-1">
        {title ? (
          <h3
            className={`${typography.itemTitle} font-semibold text-white md:text-base lg:text-lg`}
          >
            {title}
          </h3>
        ) : null}
        {description ? (
          <p className="mt-1 text-sm leading-relaxed text-white/90 md:text-sm md:leading-5 lg:text-base lg:leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
