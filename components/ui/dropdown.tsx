import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface DropdownProps {
  buttonLabel?: string;
  icon?: JSX.Element;
  align?: "start" | "center" | "end";
  children: React.ReactNode;
  className?: string;
}

const Dropdown = ({
  buttonLabel,
  icon,
  align,
  children,
  className,
}: DropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className={cn(className)}>
          {icon}
          <p>{buttonLabel}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className='w-56'>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
