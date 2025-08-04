window.addEventListener("load", function () {
    fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            const memes = data.data.memes;
            const position = Math.floor(Math.random() * memes.length);
            const memeImg = memes[position];
            const memeImgHtml = document.getElementById("meme");
            const memeImgWrapper = document.getElementById("meme-wrapper");
            memeImgHtml.src = memeImg.url;
            memeImgHtml.alt = memeImg.name;
            // memeImgWrapper.style.width = memeImg.width + "px";
            // memeImgWrapper.style.height = memeImg.height + "px";
        })
});