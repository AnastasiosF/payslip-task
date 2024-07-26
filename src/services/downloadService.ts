import {Directory, DownloadFileOptions, Filesystem} from "@capacitor/filesystem";
import {ErrorResponse, MyFile, ResponseUI, SuccessResponse} from "../data/Models";

/**
 * Downloads a file from a given URL and saves it to the device's filesystem.
 *
 * @param {MyFile} file - The file object containing the name and URL of the file to be downloaded.
 * @returns {Promise<ResponseUI<string>>} - A promise that resolves to a ResponseUI object indicating the success or failure of the download operation.
 */
export async function downloadFile(file: MyFile):Promise<ResponseUI<string>> {
    //Check permissions
    const results = await Filesystem.checkPermissions()
    if(results.publicStorage === 'denied'){
        const requestResults = await Filesystem.requestPermissions();
        if(requestResults.publicStorage === 'denied'){
            return {
                status: 'error',
                error: 'Permission denied'
            } as ErrorResponse;
        }
    }

    //Permission granted
    const downloadOptions: DownloadFileOptions = {
        path: file.name,
        directory: Directory.Documents,
        url: file.url,
        recursive: true,
        progress: true
    }
    const download = await Filesystem.downloadFile(downloadOptions);
    if (download.path) {
        return {
            status: 'success',
            data: download.path
        } as SuccessResponse<string>;
    }
    return {
        status: 'error',
        error: 'Download failed'
    } as ErrorResponse;

}
