# 📸 Extension Chrome - affiche les favoris sous forme de miniatures

Affiche tes favoris sous forme de miniatures grâce à des captures d'écran automatiques des sites web !


## 📥 Installation

1️⃣ **Cloner le projet**  

    git clone https://github.com/mathoos/bookmarks-miniatures
 
2️⃣ **Installer les dépendances**  

    npm install

3️⃣ **Configuration de l'API Screenshot Machine**  
    🔹 Créer un compte sur Screenshot Machine.  
    🔹 Récupérer la clé API depuis le tableau de bord.  
    🔹 Créer un fichier config.js à la racine et ajouter la clé API  
   
    const CONFIG = {
        API_KEY: "MA_CLE_API"
    }

4️⃣ **Charger l'extension dans Chrome**  
   🔹 Aller dans **`chrome://extensions/`**  
   🔹 Activer le **Mode développeur**.  
   🔹 Cliquer sur **Charger l'extension non empaquetée**.  
   🔹 Sélectionner le dossier du projet.

## 🎯 Utilisation

  🔹 Aller dans **extensions**.  
  🔹 Cliquer sur **Bookmarks Miniatures**.  
  🔹 Une page web s'ouvre avec la liste des favoris sous forme de miniatures (Lors du premier chargement de la page, l'API peut mettre un certain temps à répondre. Mais une fois que les captures seront mises en cache, le chargement se fera rapidement).  
  🔹 Chaque favori a une **image générée automatiquement** avec [Screenshot Machine](https://www.screenshotmachine.com/).  
  🔹 Cliquer sur un favori pour l'ouvrir dans un **nouvel onglet**.