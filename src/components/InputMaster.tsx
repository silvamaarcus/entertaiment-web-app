import SearchIcon from "@mui/icons-material/Search";

export interface InputMasterProps {
  placeholder?: string;
  type?: string;
  className?: string;
}

const InputMaster = ({ placeholder, type, className }: InputMasterProps) => {
  return (
    <div className="flex items-center gap-4 pr-2 sm:mt-2 sm:gap-6">
      <SearchIcon className="mt-2 h-8 w-8" />
      <input
        type={type}
        className={`custom-input py-2 pl-4 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputMaster;
