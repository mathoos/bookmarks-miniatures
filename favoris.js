document.addEventListener('DOMContentLoaded', function() {
    chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
        const bookmarksList = document.querySelector('.bookmarks_container');
        displayBookmarks(bookmarkTreeNodes, bookmarksList);
    });
});

function getScreenshot(url) {

    const apiKey = CONFIG.API_KEY;
    const dimension = "320x240";
    const device = "desktop";
    const format = "jpg";
    const delay = 10000;
    const encodedUrl = encodeURIComponent(url);

    return `https://api.screenshotmachine.com/?key=${apiKey}&url=${encodedUrl}&device=${device}&dimension=${dimension}&format=${format}&delay=${delay}`;
}

  
function displayBookmarks(bookmarks, parentElement) {
    bookmarks.forEach(bookmark => {
        if (bookmark.url) {
            const bookmarkElement = document.createElement('a');
            bookmarkElement.className = 'bookmark';
            bookmarkElement.href = bookmark.url;
            bookmarkElement.setAttribute("target", "_blank");

            const screenshotUrl = getScreenshot(bookmark.url);

            bookmarkElement.innerHTML = `            
                <img src="${screenshotUrl}" class="bookmark_img"/>
                <p class="bookmark_title">${bookmark.title}</p>              
            `;

            parentElement.appendChild(bookmarkElement);
        }

        // Si c'est un dossier, appel récursif
        if (bookmark.children) {
            displayBookmarks(bookmark.children, parentElement);
        }
    });
}

  
