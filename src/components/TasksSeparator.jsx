const TasksSeparator = ({ icon, text }) => {
  return (
    <div className="border-brand-border flex gap-2 border-b border-solid pb-1">
      {icon}
      <p className="text-brand-text-gray text-sm">{text}</p>
    </div>
  );
};
export default TasksSeparator;
