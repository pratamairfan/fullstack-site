import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SelectProps {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  name?: string;
  value?: string;
  item?: string;
  imageUrl?: string;
  placeholder?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  mapping?: boolean;
}

export function SelectPersonal({
  children,
  className,
  name,
  label,
  value,
  placeholder,
  imageUrl,
  defaultValue,
  mapping,
  onValueChange,
}: SelectProps) {
  return (
    <Select
      name={name}
      onValueChange={onValueChange}
      defaultValue={defaultValue}>
      <SelectTrigger className='w-full gap-4 border-bdr-default'>
        <div className='flex gap-4'>
          {imageUrl && imageUrl.trim() !== "" && (
            <Image
              className='rounded-full'
              src={imageUrl as string}
              alt='Avatar'
              width={20}
              height={20}
              priority
            />
          )}
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent className={cn(className)}>
        {mapping === false ? (
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            <SelectItem value={value as string}>{value}</SelectItem>
          </SelectGroup>
        ) : (
          children
        )}
      </SelectContent>
    </Select>
  );
}
