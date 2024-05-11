import request from "./request"
import SSE from "./sse"

export const downlaodImages = (url = '', on: Function, error: Function) => {
    const EventSource = new SSE()
    EventSource.send(`http://192.168.50.155:9999/downloadImage?url=${url}`)
    EventSource.on((progress: any) => {
        // console.log(progress, 'progressprogressprogressprogress')
        const task = JSON.parse(progress)
        if (task.currentProgress === task.totalProgress) {
            EventSource.close()
        }
        on(task)
    })
    // EventSource.error(error)
}