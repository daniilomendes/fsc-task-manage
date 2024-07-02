import Button from "./Button";
import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from "../assets/icons";

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
    </div>
  );
};
export default Tasks;
