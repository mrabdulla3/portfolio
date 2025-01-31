document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
document.querySelector('.sidebar').classList.toggle('sidebarGo');
if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.cross').style.display='none';
    document.querySelector('.ham').style.display='inline';
}
else{
    document.querySelector('.ham').style.display='none';
    document.querySelector('.cross').style.display='inline';
}
});

document.getElementById('downloadAgri').addEventListener('click', function () {
    window.open(
        "https://docs.google.com/uc?export=download&id=1F9eb7Y8E-vaSvmpiBggU3xrX42pzLxAA", 
        "_blank", 
        "noopener,noreferrer"
    );
});

document.getElementById('downloadGemini').addEventListener('click', function () {
    window.open(
        "https://docs.google.com/uc?export=download&id=1c0Yd5bo0aujyrkcPyYYVHoIr7T8eYKFg", 
        "_blank", 
        "noopener,noreferrer"
    );
});
document.getElementById('downloadHacker').addEventListener('click', function () {
    window.open(
        "https://docs.google.com/uc?export=download&id=1cj2IMEc7nmJQuzAMwWHT4K_UmoVFmA-y", 
        "_blank", 
        "noopener,noreferrer"
    );
});
