---
slug: uploading-images-to-cloudinary-with-fetch
title: 'Uploading Images to Cloudinary with the Fetch API'
authors: johnnyreilly
tags: [react]
hide_table_of_contents: false
description: 'Learn how to handle image uploads to Cloudinary using Fetch instead of SuperAgent with a sample code demonstrating the replacement of FormData.'
---

I was recently checking out a [very good post](https://css-tricks.com/image-upload-manipulation-react/) which explained how to upload images using [React Dropzone](https://github.com/react-dropzone/react-dropzone) and [SuperAgent](https://github.com/visionmedia/superagent) to [Cloudinary](https://cloudinary.com/).

<!--truncate-->

It's a brilliant post; you should totally read it. Even if you hate images, uploads and JavaScript. However, there was one thing in there that I didn't want; SuperAgent. It's lovely but I'm a [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) guy. That's just how I roll. The question is, how do I do the below using Fetch?

```js
handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }
```

Well it actually took me longer to work out than I'd like to admit. But now I have, let me save you the bother. To do the above using Fetch you just need this:

```js
handleImageUpload(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own

    fetch(CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.secure_url !== '') {
          this.setState({
            uploadedFileCloudinaryUrl: data.secure_url
          });
        }
      })
      .catch(err => console.error(err))
  }
```

To get a pre-canned project to try this with take a look at [Damon's repo](https://github.com/damonbauer/react-cloudinary).
