// ======== CARROSSEL DE FOTOS ======== //
const slides = document.querySelectorAll('.carousel__slide');
const prevBtn = document.querySelector('.carousel__btn--prev');
const nextBtn = document.querySelector('.carousel__btn--next');
let slideIndex = 0;
let slideInterval;
const slideTempo = 8000; // tempo de cada slide (ms)

function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlideFunc() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, slideTempo);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

prevBtn.addEventListener('click', () => { stopSlideShow(); prevSlideFunc(); startSlideShow(); });
nextBtn.addEventListener('click', () => { stopSlideShow(); nextSlide(); startSlideShow(); });

showSlide(slideIndex);
startSlideShow();


// ======== CRONÔMETRO ======== //
function atualizarCronometro() {
    const startDate = new Date("2025-05-05T00:00:00");
    const now = new Date();

    let anos = now.getFullYear() - startDate.getFullYear();
    let meses = now.getMonth() - startDate.getMonth();
    let dias = now.getDate() - startDate.getDate();
    if (dias < 0) { meses--; dias += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (meses < 0) { anos--; meses += 12; }

    let horas = now.getHours() - startDate.getHours();
    let minutos = now.getMinutes() - startDate.getMinutes();
    let segundos = now.getSeconds() - startDate.getSeconds();

    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }

    document.getElementById('contador').innerHTML =
        `${anos} Anos, ${meses} Meses, ${dias} Dias<br>` +
        `${horas} Horas, ${minutos} Minutos, ${segundos} Segundos`;
}

setInterval(atualizarCronometro, 1000);
atualizarCronometro();


// ======== CARROSSEL DE MOTIVOS ======== //
const motivos = document.querySelectorAll('.motivo');
const prevMotivoBtn = document.querySelector('.motivos__btn--prev');
const nextMotivoBtn = document.querySelector('.motivos__btn--next');
let motivoIndex = 0;
let motivoInterval;
const motivoTempo = 4000; // tempo de cada motivo (ms)

function showMotivo(index) {
    motivos.forEach((motivo) => motivo.classList.remove('active'));
    motivos[index].classList.add('active');
}

function nextMotivo() {
    motivoIndex = (motivoIndex + 1) % motivos.length;
    showMotivo(motivoIndex);
}

function prevMotivoFunc() {
    motivoIndex = (motivoIndex - 1 + motivos.length) % motivos.length;
    showMotivo(motivoIndex);
}

function startMotivoShow() {
    motivoInterval = setInterval(nextMotivo, motivoTempo);
}

function stopMotivoShow() {
    clearInterval(motivoInterval);
}

prevMotivoBtn.addEventListener('click', () => { stopMotivoShow(); prevMotivoFunc(); startMotivoShow(); });
nextMotivoBtn.addEventListener('click', () => { stopMotivoShow(); nextMotivo(); startMotivoShow(); });

showMotivo(motivoIndex);
startMotivoShow();


// ======== PLAYER DE MÚSICA ======== //
const audio = document.querySelector('audio');

// Toca automaticamente ao carregar a página
window.addEventListener('load', () => {
    audio.play().catch(() => {
        console.log('Autoplay bloqueado pelo navegador. Usuário precisa interagir para iniciar o áudio.');
    });
});
