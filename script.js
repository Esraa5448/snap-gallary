document.addEventListener("DOMContentLoaded", function () {
    // إنشاء عناصر الـ Lightbox
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const img = document.createElement("img");
    lightbox.appendChild(img);

    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.id = "closeBtn";
    lightbox.appendChild(closeBtn);

    // إضافة الحدث عند النقر على أي صورة في المعرض
    const galleryItems = document.querySelectorAll(".gallery-item img");
    galleryItems.forEach(image => {
        image.addEventListener("click", () => {
            lightbox.classList.add("active");
            img.src = image.src;
        });
    });

    // إغلاق الـ Lightbox عند النقر على زر الإغلاق أو الخلفية
    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== img) {
            lightbox.classList.remove("active");
        }
    });
});