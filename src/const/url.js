export const userUrl = {
    login: "/user/login-user",
    signup: "/user/create-account",
    get: "/user/get-user",
}


export const taskUrl = {
    newEvent: "/task/create-event",
    deleteEvent: (eventId) => `/task/delete-event/${eventId}`,
    addTask: "/task/add-task",
    deleteTask: (taskId)=> `/task/delete-task/${taskId}`,
    getEvents: "/task/get-events",
    getTasks: (eventId) => `/task/get-tasks/${eventId}`,
    clear: (eventId) => `/task/clear-tasks/${eventId}`,
    getEvent: (id) => `/task/get-event/${id}`,
}


export const authUrl = {
    refresh: "/auth/refresh-token",
}