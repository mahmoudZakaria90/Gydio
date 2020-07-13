export default (name, size, downloadUrl, user, createdDate = Date.now()) => {
    return {
        name,
        size,
        downloadUrl,
        user,
        createdDate
    }
}