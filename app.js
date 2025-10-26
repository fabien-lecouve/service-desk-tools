//// CONSTANTES POUR LES BOUTONS DU HEADER ////
const lacoste = document.getElementById('lacoste');
const urgo = document.getElementById('urgo');
const fr = document.getElementById('fr');
const en = document.getElementById('en');

const brandButtons = [lacoste, urgo];
const langButtons = [fr, en];

const notes = [
    // GENERAL
    {
        slug: "call",
        translations: {
            fr: "Pourriez-vous nous rappeler au +33 1 44 58 12 99 afin que nous puissions traiter votre ticket ?",
            en: "Could you please call us back at +33 1 44 58 12 99 so we can process your ticket ?"
        }
    },
    {
        slug: "follow",
        translations: {
            fr: "L'incident est-il toujours d'actualité ? Si tel est le cas, pouvez-vous nous recontacter par téléphone au +33 1 44 58 12 99 ?",
            en: "Is the incident still ongoing? If so, could you please contact us again by phone at +33 1 44 58 12 99 ?"
        }
    },
    {
        slug: "modification",
        translations: {
            fr: "Des modifications ont été apportées sur votre compte.\nPourriez-vous réessayer et nous faire un retour ?",
            en: "Changes have been made to your account.\nCould you try again and give us feedback ?"
        }
    },
    {
        slug: "reminder_1",
        translations: {
            fr: "Nous n'avons pas reçu de réponse de votre part suite à notre dernier message. Nous vous invitons à nous recontacter dès que vous serez disponible.\n\nSans retour de votre part après trois relances, nous procéderons à la clôture du ticket.\n\nMerci pour votre compréhension.",
            en: "We have not received a reply to our last message. Please contact us again as soon as you are available.\n\nIf we do not hear from you after three reminders, we will close the ticket.\n\nThank you for your understanding."
        }
    },
    {
        slug: "reminder_2",
        translations: {
            fr: "Nous n'avons pas reçu de réponse de votre part suite à notre dernier message. Ceci est notre deuxième relance et nous vous invitons à nous recontacter dès que vous serez disponible.\n\nSans retour de votre part après trois relances, nous procéderons à la clôture du ticket.\n\nMerci pour votre compréhension.",
            en: "We have not received a reply to our last message. This is our second reminder and we invite you to contact us again as soon as you are available.\n\nIf you do not reply after three reminders, we will close the ticket.\n\nThank you for your understanding."
        }
    },
    {
        slug: "reminder_3",
        translations: {
            fr: "Nous n'avons pas reçu de réponse de votre part à la suite de notre dernier message. Nous vous invitons à nous recontacter dès que vous serez disponible.\n\nIl s'agit de la dernière relance, votre ticket sera clôturé d'ici 48h en cas de non-retour de votre part.\n\nMerci pour votre compréhension.",
            en: "We have not received a reply to our last message. Please contact us again as soon as you are available.\n\nThis is the last reminder, your ticket will be closed within 48 hours if you do not return.\n\nThank you for your understanding."
        }
    },
    {
        slug: "reminder_closure",
        translations: {
            fr: "Nous avons tenté de vous joindre à plusieurs reprises par téléphone et mails.\n\nN'ayant aucun retour de votre part nous clôturons administrativement votre demande.\n\nToutefois, vous pouvez rouvrir ce ticket ou un nouveau si nécessaire.\n\nMerci pour votre compréhension.",
            en: "We have tried to reach you several times by phone and email.\n\nAs we don't have feedback from you, we are administratively closing the incident.\n\nHowever, you can reopen this ticket or a new one if necessary.\n\nThank you for your understanding."
        }
    },
    {
        slug: "escalation",
        translations: {
            fr: "Pourriez-vous prendre en charge ce ticket s'il vous plaît ?",
            en: "Could you handle this ticket please?"
        },
        type: "esc"
    },
    {
        slug: "escalation_to_be_confirmed",
        translations: {
            fr: "D'après les informations disponibles, ce périmètre semble être géré par votre équipe.\n\nExemple : TICKET\n\nPourriez-vous prendre en charge ce ticket ou, le cas échéant, m'orienter vers l'équipe concernée ?",
            en: "Based on the information available, this area appears to be managed by your team.\n\nExample: TICKET\n\nCould you take charge of this ticket or, if necessary, direct me to the appropriate team ?"
        },
        type: "esc"
    },
    {
        slug: "escalation_validation",
        translations: {
            fr: "Validez-vous cette demande ?",
            en: "Do you approve this request?"
        },
        type: "esc"
    },
    {
        slug: "resolution_inc",
        translations: {
            fr: "Suite à l'intervention de nos services, votre incident est à présent résolu.\n\nNous procédons donc à la clôture de ce ticket.",
            en: "Following our support team's intervention, your incident is now resolved.\n\nWe are therefore closing this ticket."
        }
    },
    {
        slug: "resolution_ritm",
        translations: {
            fr: "Suite à l'intervention de nos services, votre demande a bien été prise en compte.\n\nNous procédons donc à la clôture de ce ticket.",
            en: "Following our support team's intervention, your request has been received.\n\nWe are therefore closing this ticket."
        }
    },
    {
        slug: "closure_inc_ritm",
        translations: {
            fr: "Votre ticket concerne une demande et non un incident. Afin de bien séparer les besoins des utilisateurs, nous allons clore ce ticket.\n\nVous pouvez refaire votre demande en suivant ce lien :\nhttps://lacoste.service-now.com/sp?id=sc_cat_item&sys_id=f47dff701b12ff8046d3dc65bd4bcb39",
            en: "Your ticket concerns a request, not an incident. To properly separate user needs, we will close this ticket.\n\nYou can resubmit your request by following this link:\nhttps://lacoste.service-now.com/sp?id=sc_cat_item&sys_id=f47dff701b12ff8046d3dc65bd4bcb39"
        }
    },
    {
        slug: "closure_ritm_inc",
        translations: {
            fr: "Votre ticket concerne une déclaration d'incident et non une demande. Afin de bien séparer les besoins des utilisateurs, nous allons clore ce ticket.\n\nVous pouvez refaire votre déclaration d'incident en suivant ce lien :\nhttps://lacoste.service-now.com/sp?id=sc_cat_item&sys_id=3f1dd0320a0a0b99000a53f7604a2ef9",
            en: "Your ticket concerns an incident report, not a request. To properly separate user needs, we will close this ticket.\n\nYou can resubmit your incident report by following this link:\nhttps://lacoste.service-now.com/sp?id=sc_cat_item&sys_id=3f1dd0320a0a0b99000a53f7604a2ef9"
        }
    },
    {
        slug: "closure_sg",
        translations: {
            fr: "Votre demande ne peut pas être prise en charge par notre service.\n\nNous vous invitons à contacter les services généraux à l'adresse crocoservices@lacoste.com s'il vous plaît.",
            en: "Your request cannot be handled by our service.\n\nWe invite you to contact general services at crocoservices@lacoste.com please."
        }
    },
    {
        slug: "closure_jira",
        translations: {
            fr: "Votre demande ne peut pas être prise en charge par notre service.\n\nNous vous invitons à contacter les équipes Jira à l'adresse jira_admin@lacoste.com s'il vous plaît.",
            en: "Your request cannot be handled by our service.\n\nWe invite you to contact the Jira teams at jira_admin@lacoste.com please."
        }
    },
    // INCIDENTS GENERAUX
    {
        slug: "private_browsing_chrome",
        translations: {
            fr: "Pourriez-vous essayer de vous y connecter en navigation privée ?\nCliquez sur les trois points verticaux en haut à droite de votre navigateur Chrome puis \"Nouvelle fenêtre de navigation privée\".\n\nCette action a-t-elle réglé votre incident ?",
            en: "Could you try logging in in private browsing?\nClick on the three vertical dots at the top right of your Chrome browser then \"New Private Browsing Window\".\n\nDid this action resolve your incident ?"
        }
    },
    {
        slug: "clear_cache_chrome",
        translations: {
            fr: "Pourriez-vous vider le cache de votre navigateur ?\n\nPour Google Chrome :\n- Cliquez sur les trois points verticaux en haut à droite.\n- Allez dans Historique (ou raccourci ctrl + H)  > Supprimer les données de navigation.\n- Cliquez sur \"Paramètres avancés\" et dans le sélecteur \"Période\" choisir \"Toutes les périodes\"\n- Cochez uniquement les 4 premières cases \"Historique de navigation\", \"Historique des téléchargements\", \"Cookies\", \"Images et fichiers en cache\"\n- Cliquez sur \"Supprimer les données\"\n- Fermez le navigateur (vérifier bien que toutes vos fenêtres sont fermées)\n- Rouvrez le navigateur et réessayez\n\nLes actions ont elles réglé votre incident ?",
            en: "Could you clear your browser cache ?\n\nFor Google Chrome:\n- Click on the three vertical dots at the top right.\n- Go to History (or shortcut ctrl + H) > Delete browsing data.\n- Click on \"Advanced settings\" and in the \"Period\" selector choose \"All periods\"\n- Check only the first 4 boxes \"Browsing history\", \"Download history\", \"Cookies\", \"Cached images and files\"\n- Click on \"Delete data\"\n- Close the browser (make sure all your windows are closed)\n- Reopen the browser and try again\n\nDid the actions resolve your incident ?"
        }
    },
    // {
    //     slug: "page_inaccessible",
    //     translations: {
    //         fr: "Avez-vous pu effectuer les tests de base suivants :\n- Tester en navigation privée. Si cela fonctionne, videz entièrement votre cache de navigateur.\n- Tester sur un autre navigateur.\n- Si vous avez des collègues en télétravail ont-ils également accès (via VPN) ?\n\nSi malgré tout cela le problème persiste, pourriez-vous refaire un test et nous fournir les informations suivantes :\n- Horodotage exact du test (date et heure).\n- Votre adresse IP lors du test.\n- Le lien exact auquel vous tenté d'accéder.\nEt nous confirmer que ce test est réalisé sous VPN.\n\nMerci d'avance pour votre retour.",
    //         en: ""
    //     }
    // },
    // INCIDENTS APPLICATIFS
    {
        slug: "incident_ao_system_mdw_requirements",
        translations: {
            fr: "Pouvez vous nous transmettre votre numéro de PC commençant par fr ?\n\nVous pouvez le trouver soit sur votre bureau en haut à droite, soit en ouvrant les paramètres du poste et en allant dans \"Système\".",
            en: "Can you please send us your PC number beginning with fr ?\n\nYou can find it either on your desktop in the top right corner, or by opening your computer's settings and going to \"System\"."
        }
    },
    {
        slug: "incident_ao_system_mdw_wn",
        translations: {
            fr: "Copie du fichier system.mdw de \\\\inffilprdstb1\\Distrib\\Soft\\AccesOrli DLL vers C:\\rtacc2000\\Office\n\nOU\n\nCopie du fichier system.mdw de \\\\inffilprdstb1\\Distrib\\Soft\\AccesOrli DLL vers \\\\FRLPFH5J094\\c$\\rtacc2000\\Office",
            en: "Copie du fichier system.mdw de \\\\inffilprdstb1\\Distrib\\Soft\\AccesOrli DLL vers C:\\rtacc2000\\Office\n\nOU\n\nCopie du fichier system.mdw de \\\\inffilprdstb1\\Distrib\\Soft\\AccesOrli DLL vers \\\\FRLPFH5J094\\c$\\rtacc2000\\Office"
        },
        type: "wn"
    },
    {
        slug: "incident_ao_system_mdw_resolution",
        translations: {
            fr: "Merci pour votre retour.\nLe fichier manquant a bien été ajouté à votre poste.\n\nIl ne vous reste plus qu'à vous rendre sur votre bureau, dans le dossier \"Applications Lacoste\" et à exécuter \"Nouvelle version Access Orli\".\nUne fois cette tâche terminée vous pouvez relancer Access Orli et tout devrait être fonctionnel.\nN'hésitez pas à revenir vers nous si ce n'est pas le cas.",
            en: "Thank you for your feedback.\nThe missing file has been added to your computer.\n\nAll you have to do now is go to your desktop, to the \"Lacoste Applications\" folder, and run \"New Access Orli Version.\"\nOnce this task is complete, you can restart Access Orli, and everything should be working properly.\nPlease don't hesitate to get back to us if this is not the case."
        }
    },
    {
        slug: "incident_adobe_acrobat_reader_wn",
        translations: {
            fr: "Désinstallation Adobe Acrobat Reader 64bits OK\n\nTéléchargement depuis https://get.adobe.com/fr/reader/\n\nRéinstallation Adobe Acrobat Reader 32bits OK",
            en: "Désinstallation Adobe Acrobat Reader 64bits OK\n\nTéléchargement depuis https://get.adobe.com/fr/reader/\n\nRéinstallation Adobe Acrobat Reader 32bits OK"
        },
        type: "wn"
    },
    {
        slug: "incident_gta_requirements",
        translations: {
            fr: "Êtes-vous actuellement connecté à votre session personnelle ?\n\nÊtes-vous bien connecté au réseau Lacoste (VPN ou group.root/lacoste world) ?\n\nPassez-vous bien par le SharePoint “We Are Lacoste” puis par le lien GTA pour vous connecter ?\n\nVous êtes-vous déjà connecté auparavant à GTA ?\n\nSi oui, quand et de quelle manière ?",
            en: "Are you currently logged into your personal session?\n\nAre you connected to the Lacoste network (VPN or group.root/lacoste world)?\n\nAre you using the “We Are Lacoste” SharePoint and then the GTA link to log in?\n\nHave you logged into GTA before?\n\nIf so, when and how?"
        }
    },
    {
        slug: "incident_gta_wn",
        translations: {
            fr: "Utilisateur sur sa session personnelle : OK/NOK\n\nConnecté au réseau Lacoste (VPN ou group.root/lacoste world) : OK/NOK\n\nPasse par le sharepoint We Are Lacoste puis GTA : OK/NOK\n\nMatricule RH/IAM est bien le même que sur AD : OK/NOK\n\nDéjà connecté avant : OUI/NON\nSi oui, quand et comment : ",
            en: "Utilisateur sur sa session personnelle : OK/NOK\n\nConnecté au réseau Lacoste (VPN ou group.root/lacoste world) : OK/NOK\n\nPasse par le sharepoint We Are Lacoste puis GTA : OK/NOK\n\nMatricule RH/IAM est bien le même que sur AD : OK/NOK\n\nDéjà connecté avant : OUI/NON\nSi oui, quand et comment : "
        },
        type: "wn"
    },
    {
        slug: "incident_gta_outgoing_email",
        translations: {
            fr: "L'utilisateur UTILISATEUR rencontre l'erreur en pièce jointe.\n\nL'erreur persiste malgré nos différentes vérifications :\n- utilisateur connecté sur sa session personnelle\n- utilisateur connecté au réseau Lacoste\n- utilisateur passe par le sharepoint We Are Lacoste puis par le lien GTA\n- les matricules entre IAM et AD concordent (Matricule IAM : MATRICULEIAM / Matricule RH : MATRICULERH)\n\nL'utilisateur n'a jamais réussi à se connecter avant.\nOU\nL'utilisateur a déjà pu se connecter avant.\nDernière connexion :\nDétails : ",
            en: "L'utilisateur UTILISATEUR rencontre l'erreur en pièce jointe.\n\nL'erreur persiste malgré nos différentes vérifications :\n- utilisateur connecté sur sa session personnelle\n- utilisateur connecté au réseau Lacoste\n- utilisateur passe par le sharepoint We Are Lacoste puis par le lien GTA\n- les matricules entre IAM et AD concordent (Matricule IAM : MATRICULEIAM / Matricule RH : MATRICULERH)\n\nL'utilisateur n'a jamais réussi à se connecter avant.\nOU\nL'utilisateur a déjà pu se connecter avant.\nDernière connexion :\nDétails : "
        }
    },
    // DEMANDES GENERALES
    {
        slug: "validation_manager",
        translations: {
            fr: "Afin de satisfaire votre demande, nous aurions besoin de la validation de votre manager.\n\nVous pouvez nous transmettre cette validation :\n- Par mail à l'adresse suivante : support@lacoste.com\n- Ou par un message directement dans ce ticket",
            en: "In order to satisfy your request, we would need validation from your manager. You can send us this validation: - By email to the following address: support@lacoste.com - Or by a message directly in this ticket"
        }
    },
    {
        slug: "application_affected",
        translations: {
            fr: "Quelle est l'application concernée ?",
            en: "Which application is affected ?"
        }
    },
    {
        slug: "1ticket_1application",
        translations: {
            fr: "Afin de compartimenter chaque demande, merci de créer un ticket différent pour chaque application.\n\nNous consacrerons ce ticket-ci à APPLICATION.\n\nVous pouvez refaire vos autres demandes en suivant ce lien :\nhttps://lacoste.service-now.com/sp?id=sc_cat_item&sys_id=f47dff701b12ff8046d3dc65bd4bcb39",
            en: "To separate each request, please create a separate ticket for each application.\n\nWe will dedicate this ticket to the APPLICATION.\n\nYou can repeat your other requests by following this link :\nhttps://lacoste.service-now.com/sp?id=sc_cat_item&sys_id=f47dff701b12ff8046d3dc65bd4bcb39"
        }
    },
    {
        slug: "request_nip_code",
        translations: {
            fr: "Afin de récupérer le code NIP permettant l'enregistrement de votre badge, nous vous invitons à suivre les étapes suivantes :\n- vous rendre à l'adresse https://fr12970007360.eu.uniflowonline.com/ puis cliquer sur Lacoste_Azure_AD\n- dans la section identités situé à droite, vous rendre sur la ligne NIP et selectionner \"...\" à droite puis afficher le code NIP\n- ensuite vous rendre sur l'imprimante avec votre code NIP et badge pour effectuer la connexion",
            en: "In order to retrieve the PIN code allowing the registration of your badge, we invite you to follow the following steps :\n- go to the address https://fr12970007360.eu.uniflowonline.com/ then click on Lacoste_Azure_AD\n- in the identities section on the right, go to the PIN line and select \"...\" on the right then display the PIN code\n- then go to the printer with your PIN code and badge to complete the connection"
        }
    },
    {
        slug: "request_account_creation",
        translations: {
            fr: "Veuillez remplir le formulaire ci-dessous pour la création du compte.\n\nSelon le statut du collaborateur veuillez suivre le lien :\n\n- Externe - https://iam.lacoste.com/identityiq/login.jsf\n- Interne - Création auprès des RH (dans le système de paie, qui déclenchera la création automatique sous 24h du compte informatique)\n- Interne (Gayettes / Solodi / Court 2.3 / Boutique)  https://lacoste.service-now.com/sp?id=sc_cat_item&sys_id=56aaf659db36a410b866de0cd3961969&sysparm_category=d9a642d11b423740d20da64fad4bcbd3",
            en: "Please fill out the form below to create the account.\n\nDepending on the employee's status, please follow the link:\n\n- External - https://iam.lacoste.com/identityiq/login.jsf\n- Internal - Creation with HR (in the payroll system, which will trigger the automatic creation of the IT account within 24 hours)\n- Internal (Gayettes / Solodi / Court 2.3 / Boutique) https://lacoste.service-now.com/sp?id=sc_cat_item&sys_id=56aaf659db36a410b866de0cd3961969&sysparm_category=d9a642d11b423740d20da64fad4bcbd3"
        }
    },
    {
        slug: "request_external_account_creation",
        translations: {
            fr: "Afin de créer un compte externe pour votre collaborateur, nous aurions besoin des informations suivantes :\nIdentité de l'utilisateur :\n_ Nom\n_ Prénom\n_ Type employé (Externe, Intérimaire, Stagiaire non rémunéré)\n_ Email du prestataire\n\nContrat :\n_ Début de mission\n_ Fin de mission\n_ Nom de l'entreprise prestataire\n_ Intitulé du poste\n\nApplications :\nAura t'il besoin de :\n_ badge\n_ Messagerie Lacoste\n_ VPN-WIFI (indispensable si vous commandez un PC)\n\nOrganisation :\n_ Responsable\n_ Société (lacoste France, lacoste Canada, etc.)\n_ Site (Court37, Court 2.3, etc.)",
            en: "In order to create an external account for your employee, we would need the following information:\nUser identity :\nLast name\nFirst name\nEmployee type (External, Temporary, Unpaid intern)\nService provider email\n\nContract :\nStart of mission\nEnd of mission\nName of the service provider company\nJob title\n\nApplications :\nWill they need :\nBadge\nLacoste messaging\nVPN-WIFI (essential if you order a PC)\n\nOrganization :\nManager\nCompany (Lacoste France, Lacoste Canada, etc.)\nSite (Court37, Court 2.3, etc.)"
        }
    },
    {
        slug: "request_external_account_creation_with_registration_wn",
        translations: {
            fr: "MATRICULE ajouté sur \\\\iamappprdstb2\\SourceExceptions\\AllowedEmployeeIDS.csv",
            en: "MATRICULE ajouté sur \\\\iamappprdstb2\\SourceExceptions\\AllowedEmployeeIDS.csv"
        },
        type: "wn"
    },
    {
        slug: "request_external_account_creation_with_registration_resolution",
        translations: {
            fr: "Matricule ajouté pour création du compte IT sous 24h.\nLe manager du collaborateur recevra par email une notification dès que le compte aura été créé.",
            en: "Registration number added for creation of the computer account within 24 hours.\nThe employee's manager will receive a notification by email as soon as the account has been created. "
        }
    },
    {
        slug: "request_sspr_password_resolution",
        translations: {
            fr: "Vous avez à présent la possibilité de réinitialiser vos mots de passe comme vous le souhaitez via la procédure SSPR (voir documentation en pièce jointe).\n\nJe vous rappelle les consignes de sécurité concernant la création et la gestion des mots de passe :\n- 14 caractères minimum\n- au moins une lettre majuscule\n- au moins une lettre minuscule\n- au moins un chiffre (0-9)\n- au moins un caractère spécial (?!@&#[\"$ ..)\n- évitez l'utilisation de mots courants ou liés à vous ou à l'entreprise, tels que vos nom et prénoms, \"Lacoste\", \"Crocodile\", \"Bonjour\", ou des années comme \"2025\"",
            en: "You now have the possibility to reset your passwords as you wish via the SSPR procedure (see attached documentation).\n\nI remind you of the security instructions concerning the creation and management of passwords:\n- 14 characters minimum\n- at least one uppercase letter\n- at least one lowercase letter\n- at least one number (0-9)\n- at least one special character (?!@&#[\"$ ..)\n- avoid using common words or words related to you or the company, such as your first and last names, \"Lacoste\", \"Crocodile\", \"Hello\", or years like \"2025\""
        }
    },
    // DEMANDES D'ACCES
    {
        slug: "access_access_orli_wn",
        translations: {
            fr: "Suivi [code]<a title=\"[Access Apps] - Various software installation\" href='kb_view.do?sys_kb_id=1a25b2361b6b0e10950a11fc2d4bcb3c' >KB0011222 : [Access Apps] - Various software installation</a>[/code]",
            en: "Suivi [code]<a title=\"[Access Apps] - Various software installation\" href='kb_view.do?sys_kb_id=1a25b2361b6b0e10950a11fc2d4bcb3c' >KB0011222 : [Access Apps] - Various software installation</a>[/code]"
        },
        type: "wn"
    },
    {
        slug: "access_access_orli_resolution",
        translations: {
            fr: "Afin d'installer Access orli sur votre ordinateur, veuillez suivre les étapes suivantes :\n1. Ouvrir le dossier sur le bureau : \"Applications Lacoste\"\n2. Ouvrir le fichier : \"Nouvelle version access orli\"\n3. Une fenêtre s'ouvre et lance l'installation ; attendre la fin de l'installation et refermer la fenêtre\n3. Ouvrir Access Orli (une icône a été créé sur votre bureau)\n\nL'installation a-t-elle fonctionné ?",
            en: "To install Access orli on your computer, please follow these steps:\n1. Open the folder on the desktop: \"Lacoste Applications\"\n2. Open the file: \"New version access orli\"\n3. A window opens and starts the installation; wait for the installation to complete and close the window 3. Open Access Orli (an icon has been created on your desktop) Did the installation work ?"
        }
    },
    {
        slug: "access_adobe_requirements",
        translations: {
            fr: "Afin de procéder à l'attribution des accès Adobe, merci de remplir et de nous retourner le formulaire ci-joint.",
            en: "To proceed with the allocation of Adobe access, please complete and return the attached form to us."
        }
    },
    {
        slug: "access_adobe_wn",
        translations: {
            fr: "Suivi [code]<a title=\"[Adobe] - Adobe Software request management\" href='kb_view.do?sys_kb_id=1d740796c34bae10b16d1f0ed40131fd' >KB0011210 : [Adobe] - Adobe Software request management</a>[/code]\n\nFichier renommé en \"LASTNAME firstname - INCxxxx.xlsx\"\n\nFichier déplacé dans \\\\usrtroyes.gdm.group.root\\groups\\Helpdesk2\\Commun\\Formulaires\\Adobe\n\nInstallation de Adobe Creative Cloud\n\nAjout groupe GROUPEAD sur AD\n\nConnexion Adobe Creative Cloud\n\nInstallation application APPLICATIONS\n\nLancement de APPLICATION OK",
            en: "Suivi [code]<a title=\"[Adobe] - Adobe Software request management\" href='kb_view.do?sys_kb_id=1d740796c34bae10b16d1f0ed40131fd' >KB0011210 : [Adobe] - Adobe Software request management</a>[/code]\n\nFichier renommé en \"LASTNAME firstname - INCxxxx.xlsx\"\n\nFichier déplacé dans \\\\usrtroyes.gdm.group.root\\groups\\Helpdesk2\\Commun\\Formulaires\\Adobe\n\nInstallation de Adobe Creative Cloud\n\nAjout groupe GROUPEAD sur AD\n\nConnexion Adobe Creative Cloud\n\nInstallation application APPLICATIONS\n\nLancement de APPLICATION OK"
        },
        type: "wn"
    },
    {
        slug: "access_ariba_requirements",
        translations: {
            fr: "Afin de procéder à l'attribution des accès Ariba, merci de remplir et de nous retourner le formulaire ci-joint.",
            en: "To proceed with the allocation of Ariba access, please complete and return the attached form to us."
        }
    },
    {
        slug: "access_ariba_wn",
        translations: {
            fr: "Suivi [code]<a title=\"[Ariba] - Overview\" href='kb_view.do?sys_kb_id=18d7accdc3d8a250b16d1f0ed4013137' >KB0022372 : [Ariba] - Overview</a>[/code]\n\nCompte Ariba de UTILISATEUR créée\n\nAjout APP_Lemon_learning_Deployment\n\nEnvoi template [RITM00XXXX] - ARIBA  Création compte / Account Creation à l'utilisateur",
            en: "Suivi [code]<a title=\"[Ariba] - Overview\" href='kb_view.do?sys_kb_id=18d7accdc3d8a250b16d1f0ed4013137' >KB0022372 : [Ariba] - Overview</a>[/code]\n\nCompte Ariba de UTILISATEUR créée\n\nAjout APP_Lemon_learning_Deployment\n\nEnvoi template [RITM00XXXX] - ARIBA  Création compte / Account Creation à l'utilisateur"
        },
        type: "wn"
    },
    {
        slug: "access_brand_library_requirements",
        translations: {
            fr: "Afin de procéder à l'attribution des accès Brand Library, nous aurions besoin des informations suivantes :\n_ nom et prénom de l'utilisateur\n_ validation du responsable de l'utilisateur (par mail à l'adresse suivante : support@lacoste.com ou par un message directement dans ce ticket)\n_ adresse e-mail de l'utilisateur\n_ entreprise de l'utilisateur\n_ les droits requis (download/upload/admin)",
            en: "To proceed with the allocation of Brand Library access, we would need the following information:\n_ user's first and last name\n_ validation from the user's manager (by email to the following address: support@lacoste.com or by a message directly in this ticket)\n_ user's email address\n_ user's company\n_ required rights (download/upload/admin)"
        }
    },
    {
        slug: "access_brand_library_wn",
        translations: {
            fr: "Suivi [code]<a title=\"[Brand Library] - Account creation\" href='kb_view.do?sys_kb_id=0560de1883b7ea50e8951da25baad310' >KB0022339 : [Brand Library] - Account creation</a>[/code]\n\nCompte Brand Library de UTILISATEUR créée",
            en: "Suivi [code]<a title=\"[Brand Library] - Account creation\" href='kb_view.do?sys_kb_id=0560de1883b7ea50e8951da25baad310' >KB0022339 : [Brand Library] - Account creation</a>[/code]\n\nCompte Brand Library de UTILISATEUR créée"
        },
        type: "wn"
    },
    {
        slug: "access_business_objects_requirements",
        translations: {
            fr: "Afin de procéder à l'attribution des accès Business Objects, merci de remplir et de nous retourner le formulaire ci-joint.",
            en: "To proceed with the allocation of Business Objects access, please complete and return the attached form to us."
        }
    },
    {
        slug: "access_business_objects_wn",
        translations: {
            fr: "Suivi [code]<a title=\"[SAP BO] - Account creation\" href='kb_view.do?sys_kb_id=88b8f23e1b6b0e10950a11fc2d4bcb94' >KB0010807 : [SAP BO] - Account creation</a>[/code]\n\nAjout Users-BO-G\n\nAjout GROUPES\n\nEnvoi mail de Connexion à BO à l'utilisateur\n\n\n\nBonjour,\n\nPourriez-vous prendre la suite et affecter cet utilisateur à sa mailing list associée ?\n\nCordialement,",
            en: "Suivi [code]<a title=\"[SAP BO] - Account creation\" href='kb_view.do?sys_kb_id=88b8f23e1b6b0e10950a11fc2d4bcb94' >KB0010807 : [SAP BO] - Account creation</a>[/code]\n\nAjout Users-BO-G\n\nAjout GROUPES\n\nEnvoi mail de Connexion à BO à l'utilisateur\n\n\n\nBonjour,\n\nPourriez-vous prendre la suite et affecter cet utilisateur à sa mailing list associée ?\n\nCordialement,"
        },
        type: "wn"
    },
    {
        slug: "access_centric_plm_requirements",
        translations: {
            fr: "Afin de procéder à l'attribution des accès Centric PLM, merci de nous fournir :\n\n- La validation de votre manager\n- Un compte de référence\n\nVous pouvez nous transmettre cette validation :\n- Par mail à l'adresse suivante : support@lacoste.com\n- Ou par un message directement dans ce ticket\n\nNous restons à votre disposition pour toute information complémentaire.",
            en: "To proceed with the allocation of Centric PLM access, please provide us with :\n- Validation from your manager\n- A reference account\n\nYou can send us this validation :\n- By email to the following address : support@lacoste.com\n- Or by sending a message directly to this ticket\n\nWe remain at your disposal for any additional information."
        }
    },
    {
        slug: "access_centric_plm_wn",
        translations: {
            fr: "Suivi KB0010791",
            en: "Suivi KB0010791"
        },
        type: "wn"
    },
    {
        slug: "access_shared_folder_requirements",
        translations: {
            fr: "Pourriez-vous nous fournir l'URL ou le chemin exact du dossier souhaité ?\n\nPourriez-vous nous fournir la validation de votre manager (par mail à l'adresse suivante : support@lacoste.com ou par un message directement dans ce ticket) ?",
            en: "Could you provide us with the URL or exact path of the desired folder ?\n\nCould you provide us with validation from your manager (by email to the following address: support@lacoste.com or by a message directly in this ticket) ?"
        }
    },
    {
        slug: "access_shared_folder_wn",
        translations: {
            fr: "Lien : LIEN\n\nDroit accordé : DROIT",
            en: "Lien : LIEN\n\nDroit accordé : DROIT"
        },
        type: "wn"
    },
    {
        slug: "access_distribution_list_requirements",
        translations: {
            fr: "Afin de procéder à la modification de cette liste de distribution, nous aurions besoin de la validation de \nle propriétaire de cette liste PROPRIETAIRE\nOU\nvotre manager",
            en: "To modify this distribution list, we would need approval from \nthe owner of this list\nOR\nyour manager"
        }
    },
    {
        slug: "access_distribution_list_wn",
        translations: {
            fr: "Suivi KB0010783\n\nUTILISATEUR ajouté à LISTE",
            en: "Suivi KB0010783\n\nUTILISATEUR ajouté à LISTE"
        },
        type: "wn"
    },
    {
        slug: "access_miro_requirements",
        translations: {
            fr: "Afin de procéder à l'attribution des accès Miro, merci de nous fournir les informations suivantes :\n- Centre de coût\n- Validation écrite du responsable du centre de coût\n- Équipe à rejoindre au sein de l'application",
            en: "To proceed with the allocation of Miro access, please provide us with the following information:\n- Cost center\n- Written validation from the cost center manager\n- Team to join within the application"
        }
    },
    {
        slug: "access_miro_wn",
        translations: {
            fr: "Suivi KB0021090\n\nCompte Miro créée",
            en: "Suivi KB0021090\n\nCompte Miro créée"
        },
        type: "wn"
    },
    {
        slug: "access_orliweb_requirements",
        translations: {
            fr: "Afin de procéder à l'attribution des accès Orliweb, pouvez-vous nous fournir un compte de référence ?",
            en: "To proceed with the allocation of Orliweb access, can you provide us with a reference account ?"
        }
    },
    {
        slug: "access_orliweb_wn",
        translations: {
            fr: "Suivi KB0010868\n\nCompte Orliweb créée",
            en: "Suivi KB0010868\n\nCompte Orliweb créée"
        },
        type: "wn"
    },
    {
        slug: "access_qliksense_requirements",
        translations: {
            fr: "Afin de procéder à l'attribution des accès Qliksense, pourriez-vous nous préciser les informations suivantes :\n_ stream (Sell In, Sell Out, etc…)\n_ les applications souhaités pour chaque stream\n_ les market code correspondant à la zone géographique (soit pour l'ensemble des flux, soit pour chaque application)",
            en: "To proceed with the allocation of Qliksense access, could you provide us with the following information:\n_ stream (Sell In, Sell Out, etc.)\n_ the desired applications for each stream\n_ the market codes corresponding to the geographical area (either for all the streams or for each application)"
        }
    },
    {
        slug: "access_qliksense_wn",
        translations: {
            fr: "Suivi KB0022798",
            en: "Suivi KB0022798"
        },
        type: "wn"
    },
    {
        slug: "access_qliksense_validation",
        translations: {
            fr: "UTILISATEUR demande l'accès au stream STREAM et aux applications et market code  suivants :\nAPPLICATION => MARKETCODE\n\nPourriez-vous autoriser ces accès ?",
            en: "USER requests access to the STREAM stream and the following applications and market codes :\nAPPLICATION => MARKETCODE\n\nCould you authorize this access ?"
        }
    },
    {
        slug: "access_rosario_requirements",
        translations: {
            fr: "Par défaut, l'application est accessible à tous les utilisateurs Lacoste. Cependant, des restrictions peuvent être appliquées sur certains menus et sous-menus.\n\nAfin de traiter efficacement votre demande, pourriez-vous nous préciser :\n- Les menus ou sous-menus auxquels vous souhaitez accéder.\n- Et, si possible, nous fournir les liens directs (URL) vers les menus concernées.",
            en: "By default, the application is accessible to all Lacoste users. However, restrictions may apply to certain menus and submenus.\n\nIn order to efficiently process your request, could you please specify:\n- The menus or submenus you wish to access.\n- And, if possible, provide us with direct links (URLs) to the menus concerned."
        }
    },
    {
        slug: "access_rosario_wn",
        translations: {
            fr: "Suivi KB0011276\n\nAjout GROUPE",
            en: "Suivi KB0011276\n\nAjout GROUPE"
        },
        type: "wn"
    }
];






const courtesies = {
    salutation: { fr: "Bonjour,\n\n", en: "Hello,\n\n" },
    closing: { fr: "\n\nCordialement,", en: "\n\nBest regards," }
};


const signatures = {
    lacoste:
    {
        fr: "\nSupport informatique Lacoste\n+33 1 44 58 12 99",
        en: "\nLacoste IT support\n+33 1 44 58 12 99"
    },
    urgo:
    {
        fr: "\nSOS URGO\nSupport & Assistance IT\nURGO Medical And Healthcare\nPortail : https://sos.urgo.groupe.priv/ *\n*Disponible 24/7\nTéléphone : +33 (0)3 80 44 26 55 ou 1000**\n**Du lundi au vendredi, de 6h à 20h",
        en: "\nSOS URGO\nIT Support & Assistance\nURGO Medical And Healthcare\nPortal: https://sos.urgo.groupe.priv/ *\n*Available 24/7\nPhone : +33 (0)3 80 44 26 55 ou 1000**\n**Monday to Friday, 6 AM - 8 PM (Paris time)"
    }
};


//// VARIABLES DE STOCKAGE ////
let brandSelected = null;
let langSelected = null;

//// UI HELPERS ////
function toggleActive(button, group) {
    group.forEach(btn => { btn.classList.remove('active'); btn.classList.add('inactive'); });
    button.classList.remove('inactive'); button.classList.add('active');
}

function activateButton(e) {
    const target = e.target;
    if (brandButtons.includes(target)) { toggleActive(target, brandButtons); brandSelected = target.id; }
    else if (langButtons.includes(target)) { toggleActive(target, langButtons); langSelected = target.id; }
}

function initButtons() {
    toggleActive(lacoste, brandButtons); brandSelected = 'lacoste';
    toggleActive(fr, langButtons); langSelected = 'fr';
}

[...brandButtons, ...langButtons].forEach(btn => btn.addEventListener('click', activateButton));
window.addEventListener('DOMContentLoaded', initButtons);

//// UTILS ////
function findNote(slug) {
    return notes.find(n => n.slug === slug) || null;
}

function buildMessage(slug) {
    if (!langSelected || !brandSelected) return null;

    const note = findNote(slug);
    if (!note) return null;

    const salutation = courtesies.salutation[langSelected];
    const body = note.translations?.[langSelected];
    const closing = courtesies.closing[langSelected];
    const signature = signatures[brandSelected]?.[langSelected];

    if (!salutation || !body || !closing || !signature) return null;

    if (!note.type) {
        return salutation + body + closing + signature;
    }

    if (note.type === "esc") {
        return salutation + body + closing;
    }

    return body;
}

// Fallback si Clipboard API indisponible
function legacyCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.top = '-9999px';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) { console.error(e); }
    document.body.removeChild(ta);
}

function copyText(text) {
    if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
    legacyCopy(text); return Promise.resolve();
}

//// COPIE (délégation d’événement sur <main>) ////
document.querySelector('main').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    const slug = btn.value;
    if (!slug) return;

    const content = buildMessage(slug);
    if (!content) {
        console.warn('Message incomplet (slug/langue/marque manquants).');
        return;
    }

    copyText(content)
        .then(() => {
            console.log(`✅ Copié : ${slug} (${langSelected} / ${brandSelected})`);
            btn.classList.add('copied');
            setTimeout(() => btn.classList.remove('copied'), 300);
        })
        .catch(err => console.error('❌ Erreur de copie :', err));
});
