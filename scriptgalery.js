
      const images = [];

      let currentIndex = 0;
      const imageElement = document.getElementById('image');
      const descriptionElement = document.getElementById('description');
      const imageUrlInput = document.getElementById('imageUrl');
      const imageDescriptionInput = document.getElementById('imageDescription');

      function displayImage(index) {
        if (images[index]) {
          imageElement.src = images[index].url;
          descriptionElement.textContent = images[index].description;
        }
      }

      function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        displayImage(currentIndex);
      }

      function previousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        displayImage(currentIndex);
      }

      function addImage() {
        const imageUrl = imageUrlInput.value;
        const imageDescription = imageDescriptionInput.value;

        if (imageUrl && imageDescription) {
          images.push({ url: imageUrl, description: imageDescription });
          imageUrlInput.value = '';
          imageDescriptionInput.value = '';
          currentIndex = images.length - 1;
          displayImage(currentIndex);
        }
      }
      displayImage(currentIndex);
 
