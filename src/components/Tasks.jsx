import { useState } from "react";
import { toast } from "sonner";
import Button from "./Button";
import TasksSeparator from "./TasksSeparator";
import TaskItem from "./TaskItem";
import TASKS from "../constants/tasks";

import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from "../assets/icons";

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);

  const morningTasks = tasks.filter((task) => task.time === "morning");
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon");
  const eveningTasks = tasks.filter((task) => task.time === "evening");

  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }

      if (task.status === "not_started") {
        toast.success("Tarefa iniciada com sucesso!");
        return { ...task, status: "in_progress" };
      }

      if (task.status === "in_progress") {
        toast.success("Tarefa concluída com sucesso!");
        return { ...task, status: "done" };
      }

      if (task.status === "done") {
        toast.success("Tarefa reiniciada com sucesso!");
        return { ...task, status: "not_started" };
      }

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);

    toast.success("Tarefa deletada com sucesso!");
  };

  return (
    <div className="w-full space-y-6 px-8 py-16">
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

          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator icon={<CloudSunIcon />} text="Tarde" />

          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator icon={<MoonIcon />} text="Noite" />

          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tasks;
