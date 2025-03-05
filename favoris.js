document.addEventListener('DOMContentLoaded', function() {
    // Récupérer tous les favoris de l'utilisateur
    chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
      const bookmarksList = document.getElementById('bookmarks-list');
      // Appel à la fonction pour afficher les favoris
      displayBookmarks(bookmarkTreeNodes, bookmarksList);
    });
  });
  
  function displayBookmarks(bookmarks, parentElement) {
    bookmarks.forEach(bookmark => {
      // Si c'est un favori (et non un dossier), on crée un lien
      if (bookmark.url) {
        const bookmarkElement = document.createElement('a');
        bookmarkElement.className = 'bookmark';
        bookmarkElement.innerHTML = `
            <a href="${bookmark.url}" target="_blank" class="bookmark_container">
                <div class="bookmark_container-img"></div>
                <p class="bookmark_container-title">${bookmark.title}</p>
            </a>
        `;
        parentElement.appendChild(bookmarkElement);
      }
  
      // Si c'est un dossier, on l'affiche également (appel récursif)
      if (bookmark.children) {
        displayBookmarks(bookmark.children, parentElement);
      }
    });
  }
  

