import { appPDF } from "../base-auth-services";

export const downloadPDF = () =>{
    let request: any = {
        url: '/',
        responseType: 'blob'
    }
    return appPDF.get(request)
}