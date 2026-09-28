# Traductions du thème Native pour PrestaShop 9.1

## Structure des traductions

Ce dossier contient les traductions françaises (fr-FR) pour le thème Native PrestaShop 9.1.

### Fichiers inclus

1. **theme.json** - Traductions au format JSON pour PrestaShop 9.x (COMPLET)
2. **theme.po** - Fichier de traduction au format Gettext (.po) (COMPLET)
3. **theme.mo** - Fichier binaire de traduction compilé (.mo) - À générer avec msgfmt

### Traductions des modules

Chaque module inclus dans le thème possède son propre fichier de traduction JSON :

- **blockreassurance** - Bloc de réassurance
- **blockwishlist** - Liste de souhaits
- **contactform** - Formulaire de contact
- **productcomments** - Commentaires produit
- **ps_advertising** - Publicité
- **ps_banner** - Bannière
- **ps_bestsellers** - Meilleures ventes
- **ps_brandlist** - Liste des marques
- **ps_cashondelivery** - Paiement à la livraison
- **ps_categoryproducts** - Produits de catégorie
- **ps_categorytree** - Arborescence des catégories
- **ps_checkpayment** - Paiement par chèque
- **ps_contactinfo** - Informations de contact
- **ps_crossselling** - Vente croisée
- **ps_currencyselector** - Sélecteur de devise
- **ps_customeraccountlinks** - Liens du compte client
- **ps_customersignin** - Connexion client
- **ps_customtext** - Texte personnalisé
- **ps_emailalerts** - Alertes par email
- **ps_emailsubscription** - Abonnement newsletter
- **ps_facetedsearch** - Recherche à facettes
- **ps_featuredproducts** - Produits en vedette
- **ps_imageslider** - Carrousel d'images
- **ps_languageselector** - Sélecteur de langue
- **ps_linklist** - Liste de liens
- **ps_mainmenu** - Menu principal
- **ps_newproducts** - Nouveaux produits
- **ps_productinfo** - Informations produit
- **ps_rssfeed** - Flux RSS
- **ps_searchbar** - Barre de recherche
- **ps_sharebuttons** - Boutons de partage
- **ps_shoppingcart** - Panier
- **ps_socialfollow** - Réseaux sociaux
- **ps_specials** - Promotions
- **ps_supplierlist** - Liste des fournisseurs
- **ps_viewedproduct** - Produits vus
- **ps_wirepayment** - Paiement par virement
- **psgdpr** - RGPD

## Installation

1. Copiez le dossier `translations/fr-FR` dans le dossier de votre thème
2. Pour les fichiers .mo, compilez-les depuis les fichiers .po avec la commande :
   ```bash
   msgfmt translations/fr-FR/theme.po -o translations/fr-FR/theme.mo
   ```

## Compatibilité

- **PrestaShop 9.1.x** - Compatible avec les fichiers JSON
- **PrestaShop 8.x** - Compatible avec les fichiers .po/.mo
- **Langue** : Français standard (fr-FR)

## Notes

- Les traductions JSON sont priorisées dans PrestaShop 9.x
- Les fichiers .po/.mo assurent la compatibilité avec les versions antérieures
- Certains modules utilisent leurs propres systèmes de traduction internes