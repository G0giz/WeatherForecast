import { Notyf } from "notyf";

class Notify {
    private notyf = new Notyf({
        duration: 3000,
        dismissible: true,
        position: { x: "center", y: "top" },
    })

    public success(message: string): void {
        this.notyf.success(message);
    }

    public fail(err: any): void {
        const message = this.getMessage(err);
        this.notyf.error(message);
    }

    // Extract original error message:
    private getMessage(err: any): string {

        // If given error is a string:
        if(typeof err === "string") return err;

        // If error is in err.response.data
        if(typeof err?.response?.data === "string") return err.response.data
        
        // If error is in err.message:
        if(typeof err.message === "string") return err.message;
    
        // Return general error message:
        return "Some error, please try again.";
    }
}

export const notify = new Notify();
