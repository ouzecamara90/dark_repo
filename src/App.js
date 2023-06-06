const express = require('express');
const app = express();

//Middleware personnalisé pour verifier l'heure de la demande
const checkWorkingHours = (req, res, next) => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const hour = date.getHours();

  //Verifier si c'est un jour ouvrable (du lundi au vendredi) entre 9h et 17h
  if (dayOfWeek   >= 1 && dayOfWeek   <= 5 && hour >= 9 && hour <= 17) {
    next(); //Passer au middleware ou a la route suivante
    
  } else {
    res.send('lapplication est disponible uniquement pendant les heures ouvrables (du lundi au vendredi,de 9h a 17h).');
  }
};
//Utiliser les middlewares pour toutes les requetes
app.use(checkWorkingHours);
//Définir les routes
app.get('/',(req, res) => {
  res.send('<h1>Page dAcceuil </h1>')
});
app.get('/service',(req, res) => {
  res.send('<h1>Page de service </h1>')
});
app.get('/contact',(req, res) => {
  res.send('<h1>Contactez-nous</h1>')
});
//Démarrer le serveur
app.listen(3000, ()=>{
  console.log('Le server a démarreé sur le port 3000.');
});