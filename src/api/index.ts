import request from "./request"

export const downlaodImages = (url = '') => {
    return request.get('download-image', {params: { url }})
}