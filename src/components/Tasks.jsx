import Button from "./Button";
import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from "../assets/icons";
import TasksSeparator from "./TasksSeparator";

const Tasks = () => {
  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div className="">
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar Tarefas
            <TrashIcon />
          </Button>

          <Button>
            <AddIcon />
            Nova Tarefa
          </Button>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator icon={<SunIcon />} text="Manhã" />
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator icon={<CloudSunIcon />} text="Tarde" />
        </div>

        <div className="space-y-3">
          <TasksSeparator icon={<MoonIcon />} text="Noite" />
        </div>
      </div>
    </div>
  );
};
export default Tasks;
