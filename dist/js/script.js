

const [projectGallery, imgs] = [document.getElementById('galleryImg'), document.querySelectorAll('.project .icon .view')]

imgs.forEach(img => img.addEventListener('click', e => {projectGallery.src = e.target.dataset.src}));