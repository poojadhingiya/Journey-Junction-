const galleryImages = [
    { url: "goadestination.html", src: "https://tse2.mm.bing.net/th?id=OIP.TtQj9Yxjc1A7MeU16guAxgHaFc&pid=Api&P=0&h=180", alt: "Gallery Image 1" },
    { url: "FinalShimla.html", src: "https://i.pinimg.com/564x/f6/32/2a/f6322a7ce00a9ad7006b674ea5c82e61.jpg", alt: "Gallery Image 2" },
    { url: "ladakhdestination.html", src: "https://i.pinimg.com/236x/e3/22/34/e32234577da6c5af07beebcab6790378.jpg", alt: "Gallery Image 3" },
    { url: "uttttt.html", src: "https://i.pinimg.com/564x/d1/5f/e3/d15fe3ca29ec9b5d1af5fc836e1a1546.jpg", alt: "Gallery Image 4" },
    { url: "updateKerala.html", src: "https://i.pinimg.com/236x/6f/38/b1/6f38b10e88d0df51c09735ffa3f0a8af.jpg", alt: "Gallery Image 5" },
    { url: "FinalJK.html", src: "https://i.pinimg.com/236x/17/45/f5/1745f523e5e4a628857a822589536654.jpg", alt: "Gallery Image 6" }
];

document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");

    galleryImages.forEach(image => {
        const link = document.createElement("a");
        link.href = image.url;
        
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;

        link.appendChild(img);
        gallery.appendChild(link);
    });
});
