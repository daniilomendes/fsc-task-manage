import SidebarButton from "./SidebarButton";
import { HomeIcon, TasksIcon } from "../assets/icons";

const Sidebar = () => {
  return (
    <div className="h-screen w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-brand-primary text-xl font-semibold">
          Suas Tarefas
        </h1>

        <p>
          Um simples{" "}
          <span className="text-brand-primary">organizador de tarefas.</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant="unselected">
          <HomeIcon /> Ínicio
        </SidebarButton>
        <SidebarButton variant="selected">
          <TasksIcon /> Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
