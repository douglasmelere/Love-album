    const detailButtons = document.querySelectorAll(".detailButton");
    const modalImage = document.getElementById("modalImage");
    const imageDateText = document.getElementById("imageDate");

    detailButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const imageSrc = this.closest(".card").querySelector("img").src;
        const imageDate = this.closest(".card").querySelector("img").getAttribute("date");
        const imageDescription = this.closest(".card").querySelector("span").textContent
        const imageDescriptionModal = document.querySelector("#imageDescription")
        
        const downloadLink = document.getElementById("downloadLink");
        imageDescriptionModal.innerHTML = imageDescription

        modalImage.src = imageSrc;
        imageDateText.textContent = `Data: ${imageDate}`;
        downloadLink.href = imageSrc;

        const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
        imageModal.show();
      });
    });

    const initialDownloadLink = document.querySelectorAll(".initialDownload");

  initialDownloadLink.forEach((button) => {
    button.addEventListener("click", () => {
      const imageSrc = button.closest(".card").querySelector("img").src;
      console.log(imageSrc);

      // Configurar o link de download na âncora oculta
      const downloadAnchor = document.getElementById("downloadAnchor");
      downloadAnchor.href = imageSrc;
      downloadAnchor.download = "lovePhoto.png"; // Defina o nome do arquivo para download aqui

      // Simule um clique no link de download para iniciar o download
      downloadAnchor.click();
    });
  });