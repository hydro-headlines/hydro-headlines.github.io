
const urlParams = new URLSearchParams(window.location.search);
const read = urlParams.get('date');
if(!read){
    window.location = window.location.origin
}
document.getElementById('display-image-hydro').src = `${window.location.origin}/pdf/breaking-news/${read}/breaking-news.png`