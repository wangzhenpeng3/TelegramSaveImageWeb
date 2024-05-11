export default class SSE {
    private sseService: any
    send(url = '') {
        this.sseService = new EventSource(url);
    }
    on(callbck: Function) {
        this.sseService.onmessage = function (event: any) {
            callbck?.(event.data)
        };
    }
    error(callbck: Function) {
        this.sseService.onmessage = function (event: any) {
            callbck?.(event)
        };
    }
    open(callbck: Function) {
        this.sseService.onmessage = function (event: any) {
            callbck?.(event)
        };
    }
    close() {
        this.sseService.close();
    }
}