require("dotenv").config();

const { Client } = require("pg");
const client = new Client(process.env.PG_URL);

client.connect();

// const promos = require("../../data/promos.json");
// const students = require("../../data/students.json");

const promoController = {
  /**
   * Display promos list page
   * @param {request} req request object
   * @param {response} res response object
   */
  
  // getPromosList(req, res) {
  //   const query = "SELECT name FROM promo ORDER BY name ASC";
  //   client.query(query,(error,results) => {
  //     if(error){
  //       console.trace(error);
  //     } else {
  //       console.log(results.rows);
  //       const promos = results.rows
  //       res.render("promos", { promos });
  //     }
  //   });
  //   // on renvoie la liste des promos
   
  // },
  getPromosList(req, res ) {
    
    const query = "SELECT name FROM promo ORDER BY name ASC";
    client
  .query(query)
  .then(results => {
    res.render("promos", {promos : results.rows})
    console.log(res.rows[0]) 
  })
  .catch(e => console.error(e.stack))
  
  // res.render("promos", { promos });
  },
  /**
   * Display promo details page
   * @param {request} req request object 
   * @param {response} res response objet 
   * @param {function} next function to call next middleware
   */
  getPromoDetails(req, res, next) {
    // on récupére la valeur de l'id contenu dans la route
    const promoId = req.params.id;
    // on cherche dans le tableau des promos celle dont l'id est égal à l'id reçu via l'url
    const promo = promos.find((promo) => promo.id === +promoId);
    if (promo) {
      // si la promo existe, on renvoie la page de détail
      res.render("promoDetails", { promo });
    } else {
      // si la promo n'existe pas, on passe au middleware suivant
      next();
    }
  },
  /**
   * Display promo students list page
   * @param {request} req request object
   * @param {response} res response object
   * @param {function} next function to call next middleware
   */
  getStudentsByPromo(req, res, next) {
    // on récupére la valeur de l'id contenu dans la route
    const promoId = Number(req.params.id);
    // on récupérer la promo qui a cet Id
    const promo = promos.find((promo) => promo.id === promoId);
    // si j'ai bien récupérer une promo
    if (promo) {
      // je récupére tous les étudiants de cette promo
      const studentsOfPromo = students.filter((student) => student.promo === promoId);
      // et je renvoie le rendu du template promoStudents
      res.render("promoStudents", {promo, students: studentsOfPromo});
    } else {
      // sinon je passe au middleware suivant
      next();
    }
  }
};

// on exporte le controller
module.exports = promoController;