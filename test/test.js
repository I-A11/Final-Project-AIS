const expect = chai.expect;
describe('TaskManager', () => {
    describe('constructor', () => {
        describe('when a new TaskManager is initialized.', () => {
            it('should creat an empty tasks array', () => {
                const taskManger = new TaskManager(1);
                expect(taskManger.tasks).to.be.eql([]);
            });

            it("should set the currentId to the passed in number", () => {
                const taskManger = new TaskManager(1);
                expect(taskManger.currentId).to.be.eql(1);
            });

        });

    });

    describe('addTask', () => {
        describe('adding new task', () => {
            it('should add task to array', () => {
                const taskManger = new TaskManager(10);
                const task = {
                    id: taskManager.currentId,
                    name: "test",
                    description: "test",
                    assignedTo: "test",
                    dueDate: Date.now(),
                    status: "In Progress",
                };

                taskManager.addTask(
                    task.name,
                    task.description,
                    task.assignedTo,
                    task.dueDate,
                    task.status
                );

                expect(taskManager.tasks[0]).to.be.eql(task);
            });

            it("should increment the currentId property", () => {
                const taskManager = new TaskManager(10);

                const task = {
                    id: taskManager.currentId,
                    name: "test",
                    description: "test",
                    assignedTo: "test",
                    dueDate: Date.now(),
                    status: "In Progress",
                };

                taskManager.addTask(
                    task.name,
                    task.description,
                    task.assignedTo,
                    task.dueDate,
                    task.status
                );

                expect(taskManager.currentId).to.be.eql(11);
            });

        });
    });
});


describe('delete task', () => {
    describe('when passed an exisiting taskId', () => {
        it('should remove the task', () => {
            const taskManager = new TaskManager();
            const taskToDelete = {
                id: taskManager.currentId,
                name: "test",
                description: "test",
                assignedTo: "test",
                dueDate: Date.now(),
                status: "In Progress",
            };

            const taskToKeep = {
                id: taskManager.currentId + 1,
                name: "water the garden",
                description: "water the garden",
                assignedTo: "Farida",
                dueDate: Date.now(),
                status: "In Progress",
            };
            taskManager.addTask(
                taskToDelete.name,
                taskToDelete.description,
                taskToDelete.assignedTom,
                taskToDelete.dueDate,
                taskToDelete.status
            );
            taskManager.addTask(
                taskToKeep.name,
                taskToKeep.description,
                taskToKeep.assignedTo,
                taskToKeep.dueDate,
                taskToKeep.status
            );

            taskManager.deleteTask(taskToDelete.id);

            expect(taskManager.tasks).to.not.contain(taskToDelete);

        });
    });
});

describe("getTaskById", () => {
    describe("when passed an existing taskId", () => {
        it("should return the task", () => {
            const taskManager = new TaskManager();

            const task = {
                id: taskManager.currentId,
                name: "test",
                description: "test",
                assignedTo: "test",
                dueDate: Date.now(),
                status: "In Progress",
            };

            taskManager.addTask(
                task.name,
                task.description,
                task.assignedTo,
                task.dueDate,
                task.status
            );

            const result = taskManager.getTaskById(task.id);

            expect(result).to.be.eql(task);
        });
    });
});

