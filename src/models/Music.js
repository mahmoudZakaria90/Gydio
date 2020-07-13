export class MusicModel {
    constructor(name, blob, size, downloadUrl, user, createdDate = Date.now()) {
        this.name = name
        this.blob = blob;
        this.size = size;
        this.downloadUrl = downloadUrl;
        this.user = user
        this.createdDate = createdDate
    }
}