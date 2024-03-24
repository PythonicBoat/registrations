import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ZodError } from "zod";
import { User } from "@/lib/types";

type Props = {};

function Year({
  handleChange,
  formData,
  issues,
  name,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: User;
  issues: ZodError | null;
  name: string;
}) {
  return (
    <div>
      <Select
        value={formData.year}
        onValueChange={(value) =>
          handleChange({
            target: { name, value },
          } as React.ChangeEvent<HTMLInputElement>)
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue
            placeholder="Select your current year "
            className="md:text-xl"
          />
        </SelectTrigger>
        <SelectContent>
          {[2027, 2026, 2025, 2024].map((year) => {
            return (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            );2
          })}
        </SelectContent>
      </Select>
      {issues &&
        issues.issues.map((issue) => (
          <p className="text-red-800 md:text-base text-xs" key={issue.code}>
            {issue.message}
          </p>
        ))}
    </div>
  );
}

export default Year;
