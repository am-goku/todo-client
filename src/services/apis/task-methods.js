import { taskUrl } from "../../const/url"
import apiCall from "../apiCall"



export const createEvent = (eventName) => {
    return new Promise((resolve, reject) => {
        apiCall("post", taskUrl.newEvent, {eventName}).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
};

export const deleteEvent = (eventId) => {
    return new Promise((resolve, reject) => {
        apiCall("delete", taskUrl.deleteEvent(eventId)).then((res) => {
          console.log(eventId);
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
};


export const addTask = ({eventId, task}) => {
    return new Promise((resolve, reject) => {
        apiCall("post", taskUrl.addTask, {eventId, task})
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
    })
};


export const deleteTask = (taskId) => {
    return new Promise((resolve, reject) => {
      console.log(taskId);
        apiCall("delete", taskUrl.deleteTask(taskId))
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
    })
}


export const getEvents = () => {
    return new Promise((resolve, reject) => {
        apiCall("get", taskUrl.getEvents)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
    })
};


export const getTasks = (eventId) => {
    return new Promise((resolve, reject) => {
        apiCall("get", taskUrl.getTasks(eventId))
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
    })
};

export const clearTasks = (eventId) => {
    return new Promise((resolve, reject) => {
        apiCall("delete", taskUrl.clear(eventId))
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
    })
};



export const getSingleEvent = (eventId) => {
 return new Promise((resolve, reject) => {
  console.log(eventId);
  apiCall("get", taskUrl.getEvent(eventId)).then((res) => {
    resolve(res);
  }).catch((err) => {
    reject(err)
  })
 })
}