interface UserInfoItemProps {
  label: string;
  data: string | undefined | null;
}

export const UserInfoItem = ({
  label,
  data,
}: UserInfoItemProps) => {
  return (
    <div className="flex flex-row items-center justify-between rounded-xl border p-3 shadow-sm">
      <p className="text-sm font-medium">{label}</p>
      <p className="text-xs truncate max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
        {data}
      </p>
    </div>
  );
};
