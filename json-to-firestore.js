const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCR_1v95wQ17VFs-VQiQP6M9yINiymHurs",
    authDomain: "cataloguetestauto.firebaseapp.com",
    projectId: "cataloguetestauto"
  });
  
var db = firebase.firestore();

var menu = 
 [
        {
            "id":1,
            "toolname":"Cerberus",
            "caract" :  {
                "Type" : "Client web",
                "Web_app": "Oui",
                "API_Webservices" : "Oui",
                "Desktop_app" : "Oui",
                "Mobile_app" : "Oui",
                "Base_de_donnée" : "Oui",
                "Langage" : "Procédural",
                "Niveau_de_programmation" : "Débutant",
                "Type_de_test" : "Fonctionnel",
                "Technique_de_test" : "TDD",
                "Import_Export" : "Non",
                "Documentation" : "Beaucoup de doc",
                "Licence" : "Open source",
                "Support" : "Github, Slack",
                "Prix" : "Gratuit"
            }, 
            "compatibilite" : {
                "Jenkins" : "Oui",
                "Gitlab" : "Non",
                "Cucumber" : "Non",
                "Jira" : "Oui",
                "Xray" : "Oui",
                "Github" : "Oui"
                
            },
            "url" : "https://cerberus-testing.com/",
            "logo": "https://avatars2.githubusercontent.com/u/18745220?s=400&v=4",
            "description":"User-friendly automated testing framework"
        },
        {
            "id":2,
            "toolname":"Katalon",
            "caract" :  {
                "Type" : "Client lourd",
                "Web_app": "Oui",
                "API_Webservices" : "Oui",
                "Desktop_app" : "Oui",
                "Mobile_app" : "Oui",
                "Base_de_donnée" : "Oui",
                "Langage" : "Java/Groovy",
                "Niveau_de_programmation" : "Débutant",
                "Type_de_test" : "Integration",
                "Technique_de_test" : "TDD",
                "Import_Export" : "Selenium",
                "Documentation" : "Beaucoup de doc",
                "Licence" : "Open source",
                "Support" : "Git, Slack",
                "Prix" : "Gratuit"
                
            }, 
            "compatibilite" : {
                "Jenkins" : "Oui",
                "Gitlab" : "Non",
                "Cucumber" : "Oui",
                "Jira" : "Oui",
                "Xray" : "Oui",
                "Github" : "Oui"
            },
            "url" : "www.test.com", 
            "logo": "https://igedenurhadi.net/wp-content/uploads/2018/05/katalon-studio.png",
            "description":"User-friendly automated testing framework"
        },
		{
            "id":3,
            "toolname":"Tosca",
            "caract" :  {
                "Type" : "Client lourd",
                "Web_app": "Non",
                "API_Webservices" : "Oui",
                "Desktop_app" : "Oui",
                "Mobile_app" : "Oui",
                "Base_de_donnée" : "Oui",
                "Langage" : "Procédural",
                "Niveau_de_programmation" : "Moyen",
                "Type_de_test" : "Fonctionnel",
                "Technique_de_test" : "TDD",
                "Import_Export" : "Non",
                "Documentation" : "Beaucoup de doc",
                "Licence" : "Open source",
                "Support" : "Git, Slack",
                "Prix" : "Payant"
            }, 
            "compatibilite" : {
                "Jenkins" : "Oui",
                "Gitlab" : "Non",
                "Cucumber" : "Oui",
                "Jira" : "Oui",
                "Xray" : "Oui",
                "Github" : "Non"
                
            },
            "url" : "https://www.tricentis.com/products/",
            "logo": "https://www.saashub.com/images/app/service_logos/14/67691e5238ef/large.png?1536140443",
            "description":"User-friendly automated testing framework"
        },
		{
            "id":4,
            "toolname":"AgiliTest",
            "caract" :  {
                "Type" : "Client web",
                "Web_app": "Non",
                "API_Webservices" : "Oui",
                "Desktop_app" : "Oui",
                "Mobile_app" : "Oui",
                "Base_de_donnée" : "Oui",
                "Langage" : "Procédural",
                "Niveau_de_programmation" : "Moyen",
                "Type_de_test" : "Fonctionnel",
                "Technique_de_test" : "TDD",
                "Import_Export" : "Non",
                "Documentation" : "Beaucoup de doc",
                "Licence" : "Open source",
                "Support" : "Git, Slack",
                "Prix" : "Payant"
            }, 
            "compatibilite" : {
                "Jenkins" : "Oui",
                "Gitlab" : "Non",
                "Cucumber" : "Oui",
                "Jira" : "Oui",
                "Xray" : "Oui",
                "Github" : "Non"
                
            },
            "url" : "https://www.agilitest.com/",
            "logo": "https://www.agilitest.com/wp-content/themes/JointsWP-CSS-master/assets/images/logo-simple.svg",
            "description":"User-friendly automated testing framework"
        },
		{
            "id":5,
            "toolname":"Selenium/Appium",
            "caract" :  {
                "Type" : "Client lourd",
                "Web_app": "Non",
                "API_Webservices" : "Oui",
                "Desktop_app" : "Oui",
                "Mobile_app" : "Oui",
                "Base_de_donnée" : "Oui",
                "Langage" : "Procédural",
                "Niveau_de_programmation" : "Moyen",
                "Type_de_test" : "Fonctionnel",
                "Technique_de_test" : "TDD",
                "Import_Export" : "Non",
                "Documentation" : "Beaucoup de doc",
                "Licence" : "Open source",
                "Support" : "Git, Slack",
                "Prix" : "Gratuit"
            }, 
            "compatibilite" : {
                "Jenkins" : "Oui",
                "Gitlab" : "Non",
                "Cucumber" : "Oui",
                "Jira" : "Oui",
                "Xray" : "Oui",
                "Github" : "Non"
                
            },
            "url" : "https://selenium.dev/",
            "logo": "https://perhonen.fr/blog/wp-content/uploads/2018/03/selenium-logo.png",
            "description":"User-friendly automated testing framework"
        },
		{
            "id":6,
            "toolname":"Cypress",
            "caract" :  {
                "Type" : "Client lourd",
                "Web_app": "Oui",
                "API_Webservices" : "Oui",
                "Desktop_app" : "Oui",
                "Mobile_app" : "Oui",
                "Base_de_donnée" : "Oui",
                "Langage" : "Procédural",
                "Niveau_de_programmation" : "Expert",
                "Type_de_test" : "Fonctionnel",
                "Technique_de_test" : "TDD",
                "Import_Export" : "Non",
                "Documentation" : "Beaucoup de doc",
                "Licence" : "Open source",
                "Support" : "Git, Slack",
                "Prix" : "Gratuit"
            }, 
            "compatibilite" : {
                "Jenkins" : "Oui",
                "Gitlab" : "Non",
                "Cucumber" : "Oui",
                "Jira" : "Oui",
                "Xray" : "Oui",
                "Github" : "Non"
                
            },
            "url" : "https://www.cypress.io/",
            "logo": "https://media-exp1.licdn.com/dms/image/C4E0BAQGhE8jNwjlc3w/company-logo_200_200/0?e=2159024400&v=beta&t=m3__yH3XkXB6LZrEtkIhqSomEsJtJBRL9NaCMTfmDOg",
            "description":"User-friendly automated testing framework"
        },
		{
            "id":7,
            "toolname":"UFT",
            "caract" :  {
                "Type" : "Client lourd",
                "Web_app": "Oui",
                "API_Webservices" : "Oui",
                "Desktop_app" : "Oui",
                "Mobile_app" : "Oui",
                "Base_de_donnée" : "Oui",
                "Langage" : "Procédural",
                "Niveau_de_programmation" : "Expert",
                "Type_de_test" : "Fonctionnel",
                "Technique_de_test" : "TDD",
                "Import_Export" : "Non",
                "Documentation" : "Beaucoup de doc",
                "Licence" : "Open source",
                "Support" : "Git, Slack",
                "Prix" : "Payant"
            }, 
            "compatibilite" : {
                "Jenkins" : "Oui",
                "Gitlab" : "Non",
                "Cucumber" : "Oui",
                "Jira" : "Oui",
                "Xray" : "Oui",
                "Github" : "Non"
                
            },
            "url" : "https://www.microfocus.com/en-us/products/uft-one/overview",
            "logo": "https://www.calleosoftware.co.uk/upload/images/UFT.png",
            "description":"User-friendly automated testing framework"
        },
		{
            "id":8,
            "toolname":"RobotFramework",
            "caract" :  {
                "Type" : "Client lourd",
                "Web_app": "Oui",
                "API_Webservices" : "Oui",
                "Desktop_app" : "Oui",
                "Mobile_app" : "Oui",
                "Base_de_donnée" : "Oui",
                "Langage" : "Procédural",
                "Niveau_de_programmation" : "Expert",
                "Type_de_test" : "Fonctionnel",
                "Technique_de_test" : "TDD",
                "Import_Export" : "Non",
                "Documentation" : "Beaucoup de doc",
                "Licence" : "Open source",
                "Support" : "Git, Slack",
                "Prix" : "Gratuit"
            }, 
            "compatibilite" : {
                "Jenkins" : "Oui",
                "Gitlab" : "Non",
                "Cucumber" : "Oui",
                "Jira" : "Oui",
                "Xray" : "Oui",
                "Github" : "Non"
                
            },
            "url" : "https://robotframework.org/",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Robot-framework-logo.png",
            "description":"User-friendly automated testing framework"
        },
		{
            "id":9,
            "toolname":"TestComplete",
            "caract" :  {
                "Type" : "Client web",
                "Web_app": "Oui",
                "API_Webservices" : "Oui",
                "Desktop_app" : "Oui",
                "Mobile_app" : "Non",
                "Base_de_donnée" : "Oui",
                "Langage" : "Procédural",
                "Niveau_de_programmation" : "Expert",
                "Type_de_test" : "Fonctionnel",
                "Technique_de_test" : "TDD",
                "Import_Export" : "Non",
                "Documentation" : "Beaucoup de doc",
                "Licence" : "Open source",
                "Support" : "Git, Slack",
                "Prix" : "Payant"
            }, 
            "compatibilite" : {
                "Jenkins" : "Oui",
                "Gitlab" : "Non",
                "Cucumber" : "Oui",
                "Jira" : "Oui",
                "Xray" : "Oui",
                "Github" : "Non"
                
            },
            "url" : "https://smartbear.com/product/testcomplete/overview/",
            "logo": "https://www.anyware.co.il/Uploads/2017/11/smartbear_testcomplete_boxshot.png",
            "description":"User-friendly automated testing framework"
        }
 ]
	
menu.forEach(function(obj) {
    db.collection("menu").add({
        id: obj.id,
        toolname: obj.toolname,
        description: obj.description,
        url: obj.url,
        logo: obj.logo
		caract.Type: obj.caract.type
		caract.Web_app: obj.caract.Web_app
		caract.API_Webservices: obj.caract.API_Webservices
		caract.Desktop_app: obj.caract.Desktop_app
		caract.Mobile_app: obj.caract.Mobile_app
		caract.Base_de_donnée: obj.caract.Base_de_donnée
		caract.Langage: obj.caract.Langage
		caract.Niveau_de_programmation: obj.caract.Niveau_de_programmation
		caract.Type_de_test: obj.caract.Type_de_test
		caract.Technique_de_test: obj.caract.Technique_de_test
		caract.Import_Export: obj.caract.Import_Export
		caract.Documentation: obj.caract.Documentation
		caract.Licence: obj.caract.Licence
		caract.Support: obj.caract.Support
		compatibilite.Jenkins: obj.compatibilite.Jenkins
		compatibilite.Gitlab: obj.compatibilite.Gitlab
		compatibilite.Cucumber: obj.compatibilite.Cucumber
		compatibilite.Jira: obj.compatibilite.Jira
		compatibilite.Xray: obj.compatibilite.Xray
		compatibilite.Github: obj.compatibilite.Github
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});