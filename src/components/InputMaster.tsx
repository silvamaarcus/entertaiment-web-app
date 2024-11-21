import SearchIcon from "@mui/icons-material/Search";

export interface InputMasterProps {
  placeholder?: string;
  type?: string;
  className?: string;
}

const InputMaster = ({ placeholder, type, className }: InputMasterProps) => {
  return (
    <div className="flex items-center gap-3 px-4 sm:mt-2">
      <SearchIcon className="mt-2 h-8 w-8" />
      <input
        type={type}
        className={`custom-input p-2 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputMaster;
