export default (name, size, downloadUrl, user, creationDate = Date.now()) => ({
    name,
    size,
    downloadUrl,
    user,
    creationDate
})
