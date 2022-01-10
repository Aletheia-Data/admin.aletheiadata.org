module.exports = {
    settings: {
      parser: {
        enabled: true,
        multipart: true,
        formidable: {
          maxFileSize: 400 * 1024 * 1024 // Defaults to 400mb
        }
      }
    }
  };