"use client"
import { Edit, Eye, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Task } from "@/types/task"
import { use } from "react"
import { toast } from "sonner"
import { deleteTask } from "@/lib/task"
import { useRouter } from "next/navigation"
import { useState } from "react"
import TaskEditModal from "./TaskModal"
import { getStatusColor, getStatusText } from "@/lib/utils"

export default function TaskList({ tasks }: { tasks: Promise<Task[]> }) {
    let allTasks = use(tasks)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [taskId, setTaskId] = useState<number | null>(null)
    const [modalMode, setModalMode] = useState<'view' | 'edit'>('view')
    const router = useRouter()
    const TaskDelete = async (id: number) => {
        try {
            await deleteTask(id)
            toast.success("Task deleted successfully")
            router.refresh()
        } catch (error) {
            toast.error("Task deletion failed")
        }
    }
    const showEditModal = async (id: number) => {
        setIsEditModalOpen(true)
        setTaskId(id)
        setModalMode('edit')
    }

    const closeModal = () => {
        setIsEditModalOpen(false)
        setTaskId(null)
    }

    const showViewModal = async (id: number) => {
        setIsEditModalOpen(true)
        setTaskId(id)
        setModalMode('view')
    }


    return (
        <>
            <div className="space-y-2">
                {allTasks?.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                        <p>No tasks yet. Add one above!</p>
                    </div>
                ) : (
                    allTasks?.map((task) => (
                        <div
                            key={task.id}
                            className="flex items-center justify-between p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow"
                        >
                            <div className="flex flex-col gap-2 w-full">
                                <span className="text-sm font-medium flex-1">Title: {task.title}</span>
                                <span className="text-sm font-medium flex-1">Due Date: {task.due_date}</span>
                                {task.description && <span className="text-sm font-medium flex-1">Description: {task.description}</span>}
                                <span className={`text-sm font-medium flex-1 ${getStatusColor(task.status)}`}>Status: {getStatusText(task.status)}</span>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => showViewModal(task.id!)}
                                className="h-8 w-8 text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                            >
                                <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => showEditModal(task.id!)}
                                className="h-8 w-8 text-blue-500 hover:text-blue-700 hover:bg-red-50"
                            >
                                <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => TaskDelete(task.id!)}
                                className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))
                )}
            </div>

            {/* Task Counter */}
            {/* {tasks?.length > 0 && (
                <div className="text-center text-sm text-muted-foreground border-t border-border pt-4">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {tasks?.length} {tasks?.length === 1 ? "task" : "tasks"} total
                    </span>
                </div>
            )} */}

            {isEditModalOpen && 
            <TaskEditModal 
                taskId={taskId} 
                isOpen={isEditModalOpen} 
                onClose={closeModal} 
                mode={modalMode}
            />}

        </>
    )
}