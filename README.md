# Extension Chrome - Récupération des favoris avec miniatures

Extension Chrome qui affiche les favoris sous forme de miniatures grâce à des **captures d'écran automatiques** des sites web ! 📸  

---

## 📥 Installation

1. **Cloner le projet**  
    ```sh
    git clone https://github.com/mathoos/extension-favoris.git
    ```
3. **Installer les dépendances**

    ```sh
    npm install
    ```
4. **Configuration de l'API Screenshot Machine**
    - Créer un compte sur Screenshot Machine.
    - Récupérer la clé API depuis le tableau de bord.
    - Créer un fichier config.js à la racine et ajouter la clé API :
    ```sh
    const API_KEY = "MA_CLE_API";
    ```

4. **Charger l'extension dans Chrome**  
   - Aller dans `chrome://extensions/`.
   - Activer le **Mode développeur**.
   - Cliquer sur **Charger l'extension non empaquetée**.
   - Sélectionner le dossier du projet.

---

## Utilisation

- Aller dans **extensions**.
- Cliquer sur **Booksmarks miniatures**.
- Une page web s'ouvre avec la liste de vos favoris sous forme de miniatures.
- Chaque favori a une **image générée automatiquement** avec [Screenshot Machine](https://www.screenshotmachine.com/).
- Cliquez sur un favori pour l'ouvrir dans un **nouvel onglet**.

---