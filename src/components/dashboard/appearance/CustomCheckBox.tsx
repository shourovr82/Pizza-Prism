import { useRadio, VisuallyHidden, RadioProps, cn } from "@nextui-org/react";

import { HiCheck } from "react-icons/hi";

export const CustomRadio = (props: RadioProps) => {
  const {
    Component,
    children,
    description,
    getBaseProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    isSelected,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center justify-between hover:bg-content2 flex-row-reverse",
        "w-full max-w-[300px] cursor-pointer border-2 border-default rounded-xl gap-4   px-4 pt-4 pb-2",
        isSelected && "border-warning-500", // Add border color when selected
        "relative",
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      <div {...getLabelWrapperProps()}>
        {isSelected && (
          <HiCheck
            className="bg-[#ec7c0a] p-0.5 text-white rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-20"
            size={26}
          />
        )}
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">
            {description}
          </span>
        )}
      </div>
    </Component>
  );
};
