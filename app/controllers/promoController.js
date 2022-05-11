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
    
    const query = "SELECT * FROM promo ORDER BY name ASC";
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
    const query =`SELECT * FROM student WHERE id=${promoId}`;
    
    client
  .query(query) 
  .then(results => {  
    // si la promo existe, on renvoie la page de détail
    res.render("promoDetails", { promo : results.rows[0]});      
  })
    .catch(e => console.error(e.stack)) 
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
    const query =`SELECT first_name, last_name, profile_picture_url, promo_id, github_username FROM student WHERE promo_id=${promoId}`;
    // UNION ALL SELECT name, id FROM promo WHERE id=${promoId}
    console.log(query)
    
    // si j'ai bien récupérer une promo
    
    client.query(query).then(results => {res.render("promoStudents",{promo : results.rows, students: results.rows})}).catch(e => console.error(e.stack))  
  },
}
// on exporte le controller
module.exports = promoController;