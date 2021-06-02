var images = document.getElementById("images"); //This is the variable that refers to the image being inserted into the program
var text = document.getElementById("text"); //This is the variable that refers to the text below the image 
var buttonBox = document.getElementById('buttonBox'); //This is the variable that refers to the button box in the program 
var input = document.getElementById('input'); //This is the input of the program
var player; //This is the player 
var life = 100;
var lifeChange;



input.onkeypress = function(event) { //This is the input on the splash screen for the video game 
  if (event.key == "Enter" || event.keyCode == 13) {
    player =  input.value;
    input.parentNode.removeChild(input);
    lifeChange="0";
    advanceTo(scenario.two);
  }
};


var changeText = function(words) { //This changes a certain phrase into the character name that the user has entered  
  var changedText = words.replace("LIFE", life);
  text.innerHTML = changedText.replace("NAME", player);
  
};

var changeImage = function(img) { //This transitions the images in the text adventure. 
  images.style.backgroundImage = ("url(" + img + ")");
};

var changeButtons = function(buttonList) { //This transitions the buttons in the text adventure. 
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  }
};

var advanceTo = function(s) {
  console.log(life)
  console.log(s.lifeChange)
  life = life - s.lifeChange;
  if(life > 100)
  {
    life = 100;
  }
  changeImage(s.image);
  changeText(s.text);
  changeButtons(s.buttons);
  
  
};

//We've created multiple story arces with multiple endings for this game. Please note this can be easily extended and changed if needed by other people. This is pratically a template for any text adventure made in HTML5 and JS. The current setup has 4 different endings completely!
scenario = {};
var scenario = {
  one: {    
    lifeChange:"-1000",
    image: 'logo.png', // IntroFirst situation, picture of teacher
    text: "Bist du bereit dich einem Abenteuer zu stellen? Begib dich auf eine Reis zurück ins 14. Jahrhundert und stelle dein Wissen unter Beweis. Die Pest ist über dein Dorf herreingebrochen und du siehst dich mit diversen Entscheidungen konfrontiert um dich und deine Familie sicher durch diese Zeit zu bringen. Bevor wir die Zeitreise starten, verrätst du uns noch deinen Namen? Das Abenteuer beginnt, sobald du Enter drückst!",
  },
  two: {
    lifeChange: "-1000",
    image: 'Frage1.png', //This is the classroom. The first choice you will have to make in this game.
    text: "NAME, Stell’ dir vor, wir haben das Jahr 1348 und die Pest fängt gerade an, sich in Europa auszubreiten. Du kommst mit deiner Familie in Europa an, und versuchst deine Liebsten bestmöglich vor einer Infektion zu schützen. Ihr wollt euch hier sesshaft machen, doch es ist noch unklar, wo genau ihr eure neue Heimat wählt. Wo würdest du zur Zeit der Pest am liebsten leben? Du hast aktuell noch LIFE % Leben!",
    buttons: [["In einer Hafenstadt", "advanceTo(scenario.onea)"],["In einer Handelsstadt", "advanceTo(scenario.oneb)"],["Auf einem Schiff", "advanceTo(scenario.onec)"],["Abgelegen in den Bergen", "advanceTo(scenario.fiveteen)"]],
  },
  onea:{
    lifeChange: "7",
    image: 'Frage1.png', //This is the classroom. The first choice you will have to make in this game.
    text: "Nachdem du entschieden hast, dich auf den Weg zur nächstgelegenen Hafenstadt zu machen, um dort sesshaft zu werden, begegnet dir auf halber Strecke ein Handelstrupp, mit dem du ein kurzes Gespräch führst. Als du einem der Männer von deinem Vorhaben erzählst, schaut er dich verwundert an, und sagt, dass das alles andere als eine gute Idee wäre. Warum hält der Händler nichts Gutes vom Leben in einer Hafenstadt? Das Leben ist in Hafenstädten um einiges teurer als an anderen Orten. In Hafenstädten gibt es oft Raubüberfälle von Piraten. Durch die vielen Fremden auf den Schiffen kann die Pest sehr leicht in die Stadt geschleppt werden. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Teures Leben", "advanceTo(scenario.oneaa1)"],["Raubüberfälle", "advanceTo(scenario.oneaa2)"],["Verschleppung", "advanceTo(scenario.oneaa3)"]],
  },
  oneb:{
    lifeChange: "7",
    image: 'Frage1.png',  //This is the classroom. The first choice you will have to make in this game.
    text: "Nachdem du entschieden hast, dich auf den Weg zur nächstgelegenen Hafenstadt zu machen, um dort sesshaft zu werden, begegnet dir auf halber Strecke ein Handelstrupp, mit dem du ein kurzes Gespräch führst. Als du einem der Männer von deinem Vorhaben erzählst, schaut er dich verwundert an, und sagt, dass das alles andere als eine gute Idee wäre. Warum hält der Händler nichts Gutes vom Leben in einer Handelsstadt? Warum hält der Händler nichts Gutes vom Leben auf einem Schiff? Das Leben ist in Handelsstädten um einiges teurer als an anderen Orten. In Handelsstädten gibt es aufgrund der wertvollen Güter viele Diebstähle und andere Verbrechen. Durch die vielen fahrenden Händler und Käufer, die von Weitem kommen, kann die Pest sehr leicht in die Stadt geschleppt werden. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Teures Leben", "advanceTo(scenario.onebb1)"],["Diebstähle & Verbrechen", "advanceTo(scenario.onebb2)"],["Verschleppung", "advanceTo(scenario.onebb3)"]],
  },
  onec:{
    lifeChange: "7",
    image: 'Frage1.png',  //This is the classroom. The first choice you will have to make in this game.
    text: "Nachdem du entschieden hast, dich auf den Weg zur nächstgelegenen Hafenstadt zu machen, um dort auf einem Schiff an Bord zu gehen, begegnet dir auf halber Strecke ein Handelstrupp, mit dem du ein kurzes Gespräch führst. Als du einem der Männer von deinem Vorhaben erzählst, schaut er dich verwundert an, und sagt, dass das alles andere als eine gute Idee wäre. Ein Schiff ist kein geeigneter Ort, um mit einer Familie zu leben. Es besteht die Gefahr, dass in einem der Anlegeorte des Schiffs die Pest verbreitet ist, und Familienmitglieder sich anstecken. rauen durften zur Zeit der Pest nicht auf Schiffen leben. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Kein geeigneter Ort", "advanceTo(scenario.onecc)"],["Ansteckung", "advanceTo(scenario.onecc)"],["Verbot", "advanceTo(scenario.onecc1)"]],
  },
  oneaa1:{
    lifeChange: "4",
    image: 'Frage1.png',  //This is the classroom. The first choice you will have to make in this game.
    text: "Da sich in Hafenstädten viele Menschen aus den verschiedensten Regionen aufhielten, gab es eine hohe Wahrscheinlichkeit, dass die Pest durch eine Schiffscrew eingeschleppt wurde. Du erkennst das Risiko einer Infektion und entscheidest dich dann doch um, ein abgelegenes Haus in den Bergen als neues Heim zu wählen. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.three)"]],
  },
  oneaa2:{
    lifeChange: "4",
    image: 'Frage1.png',  //This is the classroom. The first choice you will have to make in this game.
    text: "Da sich in Hafenstädten viele Menschen aus den verschiedensten Regionen aufhielten, gab es eine hohe Wahrscheinlichkeit, dass die Pest durch eine Schiffscrew eingeschleppt wurde. Du erkennst das Risiko einer Infektion und entscheidest dich dann doch um, ein abgelegenes Haus in den Bergen als neues Heim zu wählen. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.three)"]],
  },
  oneaa3:{
    lifeChange: "0",
    image: 'Frage1.png',  //This is the classroom. The first choice you will have to make in this game.
    text: "Da sich in Hafenstädten viele Menschen aus den verschiedensten Regionen aufhielten, gab es eine hohe Wahrscheinlichkeit, dass die Pest durch eine Schiffscrew eingeschleppt wurde. Du erkennst das Risiko einer Infektion und entscheidest dich dann doch um, ein abgelegenes Haus in den Bergen als neues Heim zu wählen. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.three)"]],
  },
  onebb1:{
    lifeChange: "4",
    image: 'Frage1.png',  //This is the classroom. The first choice you will have to make in this game.
    text: "Da sich in Handelsstädten viele Menschen aus den verschiedensten Regionen aufhielten, gab es eine hohe Wahrscheinlichkeit, dass die Pest durch einen Handelstrupp eingeschleppt wurde. Du erkennst das Risiko einer Infektion und entscheidest dich dann doch um, ein abgelegenes Haus in den Bergen als neues Heim zu wählen. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.three)"]],
  },
  onebb2:{
    lifeChange: "4",
    image: 'Frage1.png', //This is the classroom. The first choice you will have to make in this game.
    text: "Da sich in Handelsstädten viele Menschen aus den verschiedensten Regionen aufhielten, gab es eine hohe Wahrscheinlichkeit, dass die Pest durch einen Handelstrupp eingeschleppt wurde. Du erkennst das Risiko einer Infektion und entscheidest dich dann doch um, ein abgelegenes Haus in den Bergen als neues Heim zu wählen. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.three)"]],
  },
  onebb3:{
    lifeChange: "0",
    image: 'Frage1.png',  //This is the classroom. The first choice you will have to make in this game.
    text: "Da sich in Handelsstädten viele Menschen aus den verschiedensten Regionen aufhielten, gab es eine hohe Wahrscheinlichkeit, dass die Pest durch einen Handelstrupp eingeschleppt wurde. Du erkennst das Risiko einer Infektion und entscheidest dich dann doch um, ein abgelegenes Haus in den Bergen als neues Heim zu wählen. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.three)"]],
  },
  onecc:{
    lifeChange: "0",
    image: 'Frage1.png',  //This is the classroom. The first choice you will have to make in this game.
    text: "Obwohl es kein allgemeines Verbot für Frauen gibt, auf einem Schiff zu leben, war es dennoch sehr unüblich. Aufgrund der schlechten Hygiene und den anstrengenden, oft Wochen lang dauernden Reisen, ist ein Schiff kein geeigneter Ort, um mit seiner Familie zu leben. Außerdem war es einer der Orte mit der höchsten Wahrscheinlichkeit, die Pest zu bekommen. Da du deine Familie dieser Gefahr nicht aussetzen möchtest, entscheidest du dich doch um, und wählst ein abgelegenes Haus in den Bergen als neues Heim. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.three)"]],
  },
  onecc1:{
    lifeChange: "4",
    image: 'Frage1.png',  //This is the classroom. The first choice you will have to make in this game.
    text: "Obwohl es kein allgemeines Verbot für Frauen gibt, auf einem Schiff zu leben, war es dennoch sehr unüblich. Aufgrund der schlechten Hygiene und den anstrengenden, oft Wochen lang dauernden Reisen, ist ein Schiff kein geeigneter Ort, um mit seiner Familie zu leben. Außerdem war es einer der Orte mit der höchsten Wahrscheinlichkeit, die Pest zu bekommen. Da du deine Familie dieser Gefahr nicht aussetzen möchtest, entscheidest du dich doch um, und wählst ein abgelegenes Haus in den Bergen als neues Heim. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.three)"]],
  },
  three: {
    lifeChange: "0",
    image: 'Frage2.png', 
    text: "Einige Wochen vergehen. Nachdem du für deine Familie ein schönes Haus abseits eines kleinen Dorfes kaufen konntest, wird das Geld knapp. Um deine Familie weiterhin erhalten zu können, musst du dir also einen passenden Beruf finden, um etwas Geld zu verdienen! Welchen Beruf würdest du zur Zeit der Pest wählen? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Totengräber", "advanceTo(scenario.sixteen)"],["Seemann", "advanceTo(scenario.threea)"],["Geistlicher", "advanceTo(scenario.threeb)"],["Fahrender Händler", "advanceTo(scenario.nineteen)"]],
  },
  threea: {
    lifeChange: "7",
    image: 'Frage2.png', 
    text: "Obwohl deine Wahl leider nicht optimal ist, gehst du ab jetzt deinem Beruf als Seemann nach. Vielleicht hast du ja eine Idee, warum die Entscheidung nicht die Beste war. War es weil es zur Zeit der Pest viele Piratenangriffe gab, da die Nahrungsmittel der Piraten knapp waren? Oder war man als Seemann dem Risiko ausgesetzt, dass die Pest an den Häfen der Städte ausgebreitet war, und man sich anstecken konnte. Oder waren die Schiffe meistens verdreckt und es gibt so gut wie keine Hygiene unter der Schiffsbesatzung. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Nahrungsmittel", "advanceTo(scenario.threeaa1)"],["Anstecken", "advanceTo(scenario.threeaa)"],["Hygiene", "advanceTo(scenario.threeaa)"]],
  },
  threeaa: {
    lifeChange: "0",
    image: 'Frage2.png', 
    text: "Obwohl es Piraten zur Zeit der Pest vermutlich auch nicht gut gegangen ist, gibt es keine Belege dafür, dass es deswegen häufiger Piratenangriffe gegeben hat. Die schlechte Hygiene der Besatzung, sowie das Anlegen in vielen Städten, in denen die Pest möglicherweise verbreitet war, machten den Beruf Seemann allerdings sehr gefährlich, da man sich sehr leicht anstecken konnte. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.four)"]],
  },
  threeaa1: {
    lifeChange: "4",
    image: 'Frage2.png', 
    text: "Obwohl es Piraten zur Zeit der Pest vermutlich auch nicht gut gegangen ist, gibt es keine Belege dafür, dass es deswegen häufiger Piratenangriffe gegeben hat. Die schlechte Hygiene der Besatzung, sowie das Anlegen in vielen Städten, in denen die Pest möglicherweise verbreitet war, machten den Beruf Seemann allerdings sehr gefährlich, da man sich sehr leicht anstecken konnte. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.four)"]],
  },
  threeb: {
    lifeChange: "7",
    image: 'Frage2.png', 
    text: "Obwohl deine Wahl leider nicht optimal ist, gehst du ab jetzt deinem Beruf als Geistlicher nach. Vielleicht hast du ja eine Idee, warum die Entscheidung nicht die Beste war. Warum ist Geistlicher kein guter Beruf? Es wurden oft Geistliche verfolgt, da ihnen die Schuld an der Pest gegeben wurde. Oder Geistliche mussten aufgrund der hohen Überlastung in den Krankenhäusern oft als Ärzte aushelfen und wurden von Patienten angesteckt. Oder in den Gottesdiensten kommt man mit vielen Menschen in Kontakt, die möglicherweise an der Pest erkrankt sind, und dich anstecken können. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Verfolgung", "advanceTo(scenario.threebb1)"],["Krankenhaus", "advanceTo(scenario.threebb1)"],["Gottesdienst", "advanceTo(scenario.threebb)"]],
  },
  threebb: {
    lifeChange: "0",
    image: 'Frage2.png', 
    text: "Da sich gerade zu Zeiten der Pest viele Menschen an Gott gewandt haben, kam es in den Gebetshäusern oft zu großen Menschenmengen, in denen das Risiko für eine Pestinfektion sehr hoch war. Es wurde nicht den Geistlichen, sondern den Juden die Schuld für die Verbreitung der Pest gegeben, da diese besonders sauber lebten und deswegen seltener krank wurden. Da Geistliche keine ärztliche Ausbildung genossen, mussten sie auch nicht im Krankenhaus aushelfen.Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.four)"]],
  },
  threebb1: {
    lifeChange: "4",
    image: 'Frage2.png', 
    text: "Da sich gerade zu Zeiten der Pest viele Menschen an Gott gewandt haben, kam es in den Gebetshäusern oft zu großen Menschenmengen, in denen das Risiko für eine Pestinfektion sehr hoch war. Es wurde nicht den Geistlichen, sondern den Juden die Schuld für die Verbreitung der Pest gegeben, da diese besonders sauber lebten und deswegen seltener krank wurden. Da Geistliche keine ärztliche Ausbildung genossen, mussten sie auch nicht im Krankenhaus aushelfen.Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.four)"]],
  },
  four: {
    lifeChange: "0",
    image: 'abstand.png',
    text: "Nach einiger Zeit in deinem Beruf bekommst du zu hören, dass sich die Pest mittlerweile auch in dem kleinen Dorf neben deinem Haus ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden. Wie könntest du dich vor einer Ansteckung der Pest schützen? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Abstand halten", "advanceTo(scenario.six)"],["Maske tragen", "advanceTo(scenario.five)"],["Tiere streicheln", "advanceTo(scenario.seven)"],["Gewand nicht wechseln", "advanceTo(scenario.eight)"]]
  },
  five: { 
    lifeChange: "0",
    image: 'Frage4.png', 
    text: "Du entscheidest dich eine Maske zu tragen. Gegen eine Infektion über den Floh, hilft eine Gesichtsmaske leider nicht. Gegen die Tröpfcheninfektion über einen anderen Menschen Hilft sie hingegen schon. Einige Wochen vergehen - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten. Welcher Ort ist sicher zur Zeit der Pest? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Kirche", "advanceTo(scenario.fiveb)"],["Marktplatz", "advanceTo(scenario.twenty)"],["Krankenhaus", "advanceTo(scenario.fivea)"],["Wohnheim", "advanceTo(scenario.seventeen)"]]
  },
  fivea: {
    lifeChange: "8",
    image: 'Frage4.png', 
    text: "Auf dem Weg zum Krankenhaus kommt dir ein Bekannter entgegen und ratet dir panisch davon ab weiterzugehen, da das Krankenhaus alles andere als ein guter Ort während der Pest sei. Aus welchem Grund ist das Krankenhaus kein guter Ort? Viele Infizierte an einem Ort und schlechte Hygienebedingungen? Hohe Krankenhausrechnungen und Verschuldung? Quarantänepflicht und Abschottung von der Familie? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Hygienebedingungen", "advanceTo(scenario.fiveaa)"],["Krankenhausrechnung", "advanceTo(scenario.fiveaa1)"],["Quarantänepflicht", "advanceTo(scenario.fiveaa1)"]]
  },
  fiveaa: {
    lifeChange: "0",
    image: 'Frage4.png', 
    text: "Obwohl man sich Krankenhäuser heutzutage als sehr saubere und sichere Orte vorstellt, war die Situation im Mittelalter genau umgekehrt. Viele Infizierte wurden in Krankenhäusern behandelt und durch die schlechten Hygienebedingungen wurden sie zu einem Infektions-Hotspot. Daher ist es keine gute Idee, sich in Krankenhäusern aufzuhalten. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.nine)"]],
  },
  fiveaa1: {
    lifeChange: "4",
    image: 'Frage4.png', 
    text: "Obwohl man sich Krankenhäuser heutzutage als sehr saubere und sichere Orte vorstellt, war die Situation im Mittelalter genau umgekehrt. Viele Infizierte wurden in Krankenhäusern behandelt und durch die schlechten Hygienebedingungen wurden sie zu einem Infektions-Hotspot. Daher ist es keine gute Idee, sich in Krankenhäusern aufzuhalten. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.nine)"]],
  },
  fiveb: {
    lifeChange: "8",
    image: 'Frage4.png', 
    text: "Obwohl der Glaube den Menschen Hoffnung gibt, diese schweren Zeiten durchzustehen, ist es für das eigene Wohl nicht vorteilhaft, in die Kirche zu gehen. Aus welchem Grund ist ein Kirchgang während der Pest nicht zu empfehlen? Kirchgänger wurden später von der Bevölkerung verfolgt und verjagt? Es könnten Pestinfizierte unter den Kirchgängern sein? Man kam auf dem Weg zur Kirche oft in Kontakt mit ansteckenden Tieren? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Verfolgung", "advanceTo(scenario.fivebb1)"],["Pestinfizierte", "advanceTo(scenario.fivebb)"],["Kontakt mit Tieren", "advanceTo(scenario.fivebb)"]]
  },
  fivebb: {
    lifeChange: "0",
    image: 'Frage4.png', 
    text: "Die Kirche ist kein guter Ort, sich während der Pestpandemie aufzuhalten. Das Risiko, das einer der anderen Kirchgänger die Pest hat und ansteckend ist, ist viel zu hoch. Auch könnte man am Weg in Kontakt mit ansteckenden Tieren geraten. Generell gilt: Menschenmassen sollten bestmöglich vermieden werden. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.nine)"]],
  },
  fivebb1: {
    lifeChange: "4",
    image: 'Frage4.png', 
    text: "Die Kirche ist kein guter Ort, sich während der Pestpandemie aufzuhalten. Das Risiko, das einer der anderen Kirchgänger die Pest hat und ansteckend ist, ist viel zu hoch. Auch könnte man am Weg in Kontakt mit ansteckenden Tieren geraten. Generell gilt: Menschenmassen sollten bestmöglich vermieden werden. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.nine)"]],
  },
  six: {
    lifeChange: "0",
    image: 'platzhalter.png',
    text: "Sich von anderen Menschen fernhalten, wäre wahrscheinlich die beste Option gewesen,genau! So ging man Flöhen und kranken Personen aus dem Weg. Einige Wochen vergehen - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten. Welcher Ort ist sicher zur Zeit der Pest? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Kirche", "advanceTo(scenario.fiveb)"],["Marktplatz", "advanceTo(scenario.twenty)"],["Krankenhaus", "advanceTo(scenario.fivea)"],["Wohnheim", "advanceTo(scenario.seventeen)"]]
  },
  seven: {
    lifeChange: "7",
    image: 'Frage4.png', 
    text: "Während der Pest sollte man sich auch vom süßesten Kätzchen fernhalten. Die Pestflöhe kamen zwar von den Ratten, konnten aber auch auf andere Lebewesen überspringen. Einige Wochen vergehen und du hast hoffentlich aus deinen Fehlern gelernt - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten. Welcher Ort ist sicher zur Zeit der Pest? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Kirche", "advanceTo(scenario.fiveb)"],["Marktplatz", "advanceTo(scenario.twenty)"],["Krankenhaus", "advanceTo(scenario.fivea)"],["Wohnheim", "advanceTo(scenario.seventeen)"]]
  },
  eight: {
    lifeChange: "4",
    image: 'Frage4.png', 
    text: "Das eigene Gewand nicht zu wechseln, wäre eine fatale Entscheidung. Dann seid ihr ein Vergnügungspark für Flöhe. Und für die Pest. Einige Wochen vergehen und du hast hoffentlich aus deinen Fehlern gelernt - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten. Welcher Ort ist sicher zur Zeit der Pest? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Kirche", "advanceTo(scenario.fiveb)"],["Marktplatz", "advanceTo(scenario.twenty)"],["Krankenhaus", "advanceTo(scenario.fivea)"],["Wohnheim", "advanceTo(scenario.seventeen)"]]
  },
  nine: { 
    lifeChange: "0",
    image: 'Frage5.png', 
    text: "Keine guten Neuigkeiten – Trotz des Einhaltens deiner gesetzten Maßnahmen, zeigt eines deiner Familienmitglieder Symptome einer Pesterkrankung. Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Das infizierte Familienmitglied zurücklassen", "advanceTo(scenario.eightteen)"],["Das Familienmitglied pflegen", "advanceTo(scenario.ninea)"],["Einen Aderlass vornehmen", "advanceTo(scenario.twentyone)"],["Beten", "advanceTo(scenario.twentytwo)"]]
  },
  ninea: {
    lifeChange: "4",
    image: 'Frage5.png', 
    text: "Zusammenhalt in der eigenen Familie war den Menschen immer schon sehr wichtig, es kann allerdings leider auch Nachteile mit sich bringen. Was ist das größte Risiko des Pflegens kranker Familienmitglieder? Durch die Pflege können weniger Familienmitglieder arbeiten, es kommt zur Geldnot. Durch den engen Kontakt mit der infizierten Person stecken sich noch mehr Familienmitglieder mit der Pest an. Das Pflegen kranker Personen war im Mittelalter verboten, man konnte erwischt werden. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Geldnot", "advanceTo(scenario.nineaa)"],["Ansteckung", "advanceTo(scenario.nineaa)"],["Verbot", "advanceTo(scenario.nineaa)"]]
  },
  nineaa: {
    lifeChange: "0",
    image: 'Frage5.png', 
    text: "Obwohl die Pflege der Kranken einen großen Aufwand für eine Familie bedeutet, ist die Gefahr der Ansteckung das weitaus größere Risiko, da dadurch die ganze Familie sterben könnte. Ein Pflegeverbot hat es nicht gegeben. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Weiter", "advanceTo(scenario.ten)"]],
  },
  ten: {
    lifeChange: "0",
    image: 'Frage6.png', 
    text: "Der örtliche Bischof kommt alleine nicht mit der Lage des Dorfes zurecht und bittet dich deshalb um Rat, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern. Welche Maßnahmen empfiehlst du dem Bischof? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Häuser ausräuchern", "advanceTo(scenario.twentythree)"],["Quarantäne", "advanceTo(scenario.eleven)"],["Bußprozessionen", "advanceTo(scenario.twentyfour)"]]
  },
  eleven: {
    lifeChange: "0",
    image: 'juden.PNG',
    text: "Super! Die Quarantäne ist bis heute die effektivste Möglichkeit, um die Ausbreitung ansteckender Krankheiten einzudämmen. Obwohl der Bischof deinen Rat beherzigt, fragt er auch einige andere Dorfbewohner, wie man gegen die Pest am besten vorgehen kann. Welche Maßnahme wurde zur Zeit der Pest oft vorgeschlagen und durchgeführt? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Entleerung des Kornspeicher", "advanceTo(scenario.twentyfive)"],["Verfolgung der Juden", "advanceTo(scenario.twelve)"],["Entwicklung eines Impfstoffes", "advanceTo(scenario.twentysix)"]]
  },
  twelve: {
    lifeChange: "0",
    image: 'Frage8.png', 
    text: "Richtig! Obwohl es sehr grausam war, wurden die Juden vielmals für die Verbreitung der Pest verantwortlich gemacht. Dies war aufgrund der Tatsache, dass Juden weniger oft von der Pest betroffen waren, da sie höhere Hygienestandards hatten, und sich öfter wuschen als andere Einwohner. Um sich noch besser von der Pest schützen zu können, schlägt dir ein Bekannter vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Ratte", "advanceTo(scenario.twentyseven)"],["Katze", "advanceTo(scenario.twentyeight)"],["Kein Haustier", "advanceTo(scenario.thirteen)"],["Hund", "advanceTo(scenario.twentynine)"]]
  },
  thirteen: {
    lifeChange: "0",
    image: 'Bonusfrage.png', 
    text: "Da hast du noch einmal die Kurve bekommen! Gut, dass du dir keinen weiteren Flohteppich in den Haushalt geholt hast. Du scheinst dich jedoch irgendwo mit der Pest angsteckt haben. Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Welche glaubst du ist das? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Kind", "advanceTo(scenario.thirty)"],["Jugendlicher", "advanceTo(scenario.thirtyone)"],["Erwachsener", "advanceTo(scenario.fourteen)"]]
  },
  fourteen: {
    lifeChange: "0",
    image: 'platzhalter.png',
    text: "Richtig! Erwachsene hatten meistens ein stärkeres Immunsystem und bessere Abwehrkräfte als Kinder und Jugendlichen und haben die Pest daher eher überstanden. Gut gemacht! Du hast aktuell noch LIFE % Leben! Wie es scheint bist du mit dem Leben davon gekommen. Wenn du möchtest kannst du noch einmal spiele, vielleicht nimmt die Geschichte diesmal einen anderen Verlauf...",
    buttons: [["Noch einmal spielen", "advanceTo(scenario.two)"]]
  },
  fiveteen: {
    lifeChange: "0",
    image: 'Frage2.png', 
    text: "Solange die Nahrungsmittel nicht ausgehen, ist ein abgelegenes Haus in den Bergen sicher der beste Ort, um in Zeiten der Pest zu (über-)leben. Je abgeschotteter der Wohnort, desto schwerer fand die Pest einen Weg dorthin. Einige Wochen vergehen. Nachdem du für deine Familie ein schönes Haus abseits eines kleinen Dorfes kaufen konntest, wird das Geld knapp. Um deine Familie weiterhin erhalten zu können, musst du dir also einen passenden Beruf finden, um etwas Geld zu verdienen! Welchen Beruf würdest du zur Zeit der Pest wählen? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Totengräber", "advanceTo(scenario.sixteen)",],["Seemann", "advanceTo(scenario.threea)"],["Geistlicher", "advanceTo(scenario.threeb)"],["Fahrender Händler", "advanceTo(scenario.nineteen)"]]
  },
  sixteen: {
    lifeChange: "0",
    image: 'abstand.png',
    text: "Totengräber, NAME! Das war wahrscheinlich einer der sichersten Berufe der Zeit. Flöhe kamen auf den Verstorbenen nicht mehr vor. Wenn die Körpertemperatur nach dem Tod sinkt, gefällt es auch dem Floh nicht mehr und er sucht sich einen neuen Wirt. Wenn man sich auch von den infizierten Körperflüssigkeiten ferngehalten hat, konnte eigentlich bei der Arbeit nichts passieren. Nach einiger Zeit in deinem Beruf, bekommst du zu hören, dass sich die Pest mittlerweile auch in dem kleinen Dorf, abgelegen in den Bergen, neben deinem Haus ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden.Wie könntest du dich vor einer Ansteckung der Pest schützen? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Abstand halten", "advanceTo(scenario.six)"],["Maske tragen", "advanceTo(scenario.five)"],["Tiere streicheln", "advanceTo(scenario.seven)"],["Gewand nicht wechseln", "advanceTo(scenario.eight)"]]
  },
  seventeen: { 
    lifeChange: "0",
    image: 'Frage5.png', 
    text: "Super! Das eigene Haus war üblicherweise der sicherste Ort, solange man keinen Besuch empfing und niemand in der Familie krank war. Jedoch treffen keine guten Neuigkeiten ein – Trotz des Einhaltens deiner gesetzten Maßnahmen, zeigt eines deiner Familienmitglieder Symptome einer Pesterkrankung. Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Das infizierte Familienmitglied zurücklassen", "advanceTo(scenario.eightteen)"],["Das Familienmitglied pflegen", "advanceTo(scenario.ninea)"],["Einen Aderlass vornehmen", "advanceTo(scenario.twentyone)"],["Beten", "advanceTo(scenario.twentytwo)"]]
  },
  eightteen: { 
    lifeChange: "0",
    image: 'Frage6.png', 
    text: "Auch wenn es sicher schwerfällt, seine eigenen Familienmitglieder zurückzulassen, ist es die beste Möglichkeit um sich selbst und seine restliche Familie vor weiteren Infektionen zu schützen. Da die Familien auch schon im Mittelalter zusammengehalten haben, wurde diese Maßnahme nicht immer gesetzt und daraufhin war oft die ganze Familie von der Pest befallen. Du scheinst dich ziemlich gut mit der Pest auszukennen. Daher ist es nicht verwunderlich, dass als der örtliche Bischof alleine nicht mehr mit der Lage des Dorfes zurecht kommt, dich um Rat bittet, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern. Welche Maßnahmen empfiehlst du dem Bischof? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Häuser ausräuchern", "advanceTo(scenario.twentythree)"],["Quarantäne", "advanceTo(scenario.eleven)"],["Bußprozessionen", "advanceTo(scenario.twentyfour)"]]
  },
  nineteen: {
    lifeChange: "0",
    image:'abstand.png',
    text: "Fahrender Händler, NAME! Als Händler nicht an einen Ort gebunden zu sein, war sicher gut. Ob viele Händler überlebt haben, ist nicht bekannt. Nach einiger Zeit in deinem Beruf, bekommst du zu hören, dass sich die Pest mittlerweile auch in dem kleinen Dorf, abgelegen in den Bergen, neben deinem Haus ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden. Wie könntest du dich vor einer Ansteckung der Pest schützen? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Abstand halten", "advanceTo(scenario.six)"],["Maske tragen", "advanceTo(scenario.five)"],["Tiere streicheln", "advanceTo(scenario.seven)"],["Gewand nicht wechseln", "advanceTo(scenario.eight)"]]
  },
  twenty: {
    lifeChange: "3",
    image: 'Frage5.png', 
    text: "Der Marktplatz ist so wie alle anderen öffentlichen Plätze kein guter Ort, um sich währen der Pestpandemie aufzuhalten. Es besteht ein hohes Risiko, dass man von einem Passanten mit der Pest angesteckt wird. Du versuchst daher in Zukunft solche Orte zu meiden. Jedoch gibt es dennoch keine guten Neuigkeiten – Trotz des Einhaltens deiner gesetzten Maßnahmen, zeigt eines deiner Familienmitglieder Symptome einer Pesterkrankung. Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Das infizierte Familienmitglied zurücklassen", "advanceTo(scenario.eightteen)"],["Das Familienmitglied pflegen", "advanceTo(scenario.ninea)"],["Einen Aderlass vornehmen", "advanceTo(scenario.twentyone)"],["Beten", "advanceTo(scenario.twentytwo)"]]
  },
  twentyone: {
    lifeChange: "8",
    image: 'Frage6.png', 
    text: "Der Aderlass ist eine Behandlungsmethode, die während der Pestpandemie oft von Medizinern vorgenommen wurde. Heute weiß man, dass dies dem Erkrankten mehr geschadet als geholfen hat, deswegen ist davon definitiv abzurate! Du scheinst dich noch nicht gut genug mit der Pest auszukennen. Du scheinst jedoch eine der wenigen Personen im Dorf zu sein, denen es noch gut geht. Der örtliche Bischof kommt alleine nicht mit der Lage des Dorfes zurecht und bittet dich deshalb um Rat, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern. Welche Maßnahmen empfiehlst du dem Bischof? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Häuser ausräuchern", "advanceTo(scenario.twentythree)"],["Quarantäne", "advanceTo(scenario.eleven)"],["Bußprozessionen", "advanceTo(scenario.twentyfour)"]]
  },
  twentytwo: {
    lifeChange: "3",
    image: 'Frage6.png', 
    text: "Viele hielten damals den Ausbruch der Pest für eine Strafe Gottes. Auch wenn die Krankheit dadurch nicht gelindert wurde, wendeten sich die Menschen in Zeiten der Not an den Gott. Da der Wissensstand über Infektionskrankheiten im Mittelalter noch sehr gering war, hat den Glauben der Bevölkerung an das Übersinnliche noch weiter verstärkt. Der örtliche Bischof kommt alleine nicht mit der Lage des Dorfes zurecht und bittet dich deshalb um Rat, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern. Welche Maßnahmen empfiehlst du dem Bischof? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Häuser ausräuchern", "advanceTo(scenario.twentythree)"],["Quarantäne", "advanceTo(scenario.eleven)"],["Bußprozessionen", "advanceTo(scenario.twentyfour)"]]
  },
  twentythree: {
    lifeChange: "6",
    image: 'Frage8.png', 
    text: "Das Ausräuchern von Häusern war eine Methode, die im Mittelalter oft praktiziert wurde. Ob sie tatsächlich etwas gebracht hat, ist nicht bekannt. Da du scheinbar selbst nicht wircklich gut informaiert bist, erkundigst du dich bei einem Bekannten. Um sich noch besser von der Pest schützen zu können, schlägt er dir vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. Welches Haustier wäre zur Zeit der Pest am besten? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Ratte", "advanceTo(scenario.twentyseven)"],["Katze", "advanceTo(scenario.twentyeight)"],["Kein Haustier", "advanceTo(scenario.thirteen)"],["Hund", "advanceTo(scenario.twentynine)"]]
  },
  twentyfour: {
    lifeChange: "6",
    image: 'Frage8.png', 
    text: "Die damaligen Bischöfe versuchten die Ansteckungen tatsächlich durch Bußprozessionen zu verringern, die großen Menschenmengen, bei denen sie stattfanden, kamen leider nicht zu Vorteil. Da du scheinbar selbst nicht wircklich gut informaiert bist, erkundigst du dich bei einem Bekannten. Um sich noch besser von der Pest schützen zu können, schlägt er dir vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. Welches Haustier wäre zur Zeit der Pest am besten? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Ratte", "advanceTo(scenario.twentyseven)"],["Katze", "advanceTo(scenario.twentyeight)"],["Kein Haustier", "advanceTo(scenario.thirteen)"],["Hund", "advanceTo(scenario.twentynine)"]]
  },
  twentyfive: {
    lifeChange: "7",
    image: 'Frage8.png', 
    text: "Das Entfernen bzw. Vernichten von Lebensmitteln ist definitiv keine gute Idee, vor allem da zur Zeit der Pest ohnehin schon zu wenig Nahrung vorhanden war. Um sich noch besser von der Pest schützen zu können, schlägt dir ein Bekannter vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Ratte", "advanceTo(scenario.twentyseven)"],["Katze", "advanceTo(scenario.twentyeight)"],["Kein Haustier", "advanceTo(scenario.thirteen)"],["Hund", "advanceTo(scenario.twentynine)"]]
  },
  twentysix: {
    lifeChange: "7",
    image: 'Frage8.png', 
    text: "Obwohl das eine gute Idee gewesen wäre, wurde die Entwicklung eines Impfstoffes nicht vorgeschlagen, da das dazu notwendige medizinische Wissen im Mittelatler noch lange nicht vorhanden war. Um sich noch besser von der Pest schützen zu können, schlägt dir ein Bekannter vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. Du hast aktuell noch LIFE % Leben!",
    buttons: [["Ratte", "advanceTo(scenario.twentyseven)"],["Katze", "advanceTo(scenario.twentyeight)"],["Kein Haustier", "advanceTo(scenario.thirteen)"],["Hund", "advanceTo(scenario.twentynine)"]]
  },
  twentyseven: {
    lifeChange: "11",
    image: 'Bonusfrage.png', 
    text: "Eine Ratte als Haustier zu nehmen wäre so, als würde man sich die Pest per Post nach Hause bestellen, deshalb lieber nicht! Leider ist es dazu gekommen, dass du dich mit der Pest infiziert hast. Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Welche glaubst du ist das? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Kind", "advanceTo(scenario.thirty)"],["Jugendlicher", "advanceTo(scenario.thirtyone)"],["Erwachsener", "advanceTo(scenario.fourteen)"]]
  },
  twentyeight: {
    lifeChange: "7",
    image: 'Bonusfrage.png', 
    text: "Katzen können zwar mit Flöhen befallene Ratten fangen, sie können aber auch selber Flöhe haben. Deshalb sollte man sich lieber keine Katze als Haustier nehmen. Bleib weiterhin achtsam! Du hast die Pest fast überstanden! Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Welche glaubst du ist das? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Kind", "advanceTo(scenario.thirty)"],["Jugendlicher", "advanceTo(scenario.thirtyone)"],["Erwachsener", "advanceTo(scenario.fourteen)"]]
  },
  twentynine: {
    lifeChange: "7",
    image: 'Bonusfrage.png', 
    text: "Hunde fangen leicht pestbefallene Flöhe auf, die widerum Menschen anstecken können. Keine gute Idee. Bleib weiterhin achtsam! Du hast die Pest fast überstanden! Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Welche glaubst du ist das? Du hast aktuell noch LIFE % Leben!",
    buttons: [["Kind", "advanceTo(scenario.thirty)"],["Jugendlicher", "advanceTo(scenario.thirtyone)"],["Erwachsener", "advanceTo(scenario.fourteen)"]]
  },
  thirty: {
    lifeChange: "4",
    image: 'platzhalter.png',
    text: "Das wegen des Alters noch schwache Immunsystem sowie die im Mittelalter übliche Unterernährung von Kindern sind beides Faktoren, die sich negativ auf die Überlebenschance von Kindern ausgewirkt hat. Du hast aktuell noch LIFE % Leben! Wenn du möchtest kannst du noch einmal spiele, vielleicht nimmt die Geschichte diesmal einen anderen Verlauf...",
    buttons: [["Noch einmal spielen", "advanceTo(scenario.two)"]]
  },
  thirtyone: {
    lifeChange: "4",
    image: 'platzhalter.png',
    text: "Das wegen des Alters noch schwache Immunsystem sowie die im Mittelalter übliche Unterernährung von Jugendlichen sind beides Faktoren, die sich negativ auf die Überlebenschance von Jugendlichen ausgewirkt hat. Du hast aktuell noch LIFE % Leben! Wenn du möchtest kannst du noch einmal spiele, vielleicht nimmt die Geschichte diesmal einen anderen Verlauf...",
    buttons: [["Noch einmal spielen", "advanceTo(scenario.two)"]]
  },

};

advanceTo(scenario.one);


buttons: [["Click here to restart", "advanceTo(scenario.two)"]]
