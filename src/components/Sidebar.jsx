import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white ">
      <div className="px-8 py-6 space-y-4">
        <h1 className="text-[#00ADB5] text-xl font-semibold">Suas Tarefas</h1>

        <p>
          Um simples{" "}
          <span className="text-[#00ADB5]">organizador de tarefas.</span>
        </p>
      </div>

      <div className="flex flex-col p-2 gap-2">
        <SidebarButton variant="unselected">Ínicio</SidebarButton>
        <SidebarButton variant="selected">Minhas Tarefas</SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
