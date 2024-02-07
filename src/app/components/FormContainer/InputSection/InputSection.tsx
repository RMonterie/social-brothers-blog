import { Input } from "@/components/ui/input";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const InputSection: React.FC<Props> = ({
  label,
  value,
  onChange,
  placeholder = "Geen titel",
}) => {
  return (
    <>
      <label htmlFor="title" className="text-xs text-[#404040]">
        {label}
      </label>
      <Input
        type="text"
        name="title"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[#fafafa] placeholder:italic placeholder:text-[#c5c5c5] mb-6 text-xs"
      />
    </>
  );
};
