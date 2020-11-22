/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function(app) {
  // ---PARTS----

  app.get("/parts", (req, res) => res.render("parts"));
  // get all parts


  app.get("/api/parts", (req, res) => {
    db.Part.findAll({}).then(dbPart => {
      res.json(dbPart);
    });
  });

  //add new part
  app.post("/api/parts/add", (req, res) => {
    db.Part.create({
      deck: req.body.deck,
      truck: req.body.truck,
      wheels: req.body.wheels,
      bearings: req.body.bearings
    })
      .then(part => res.redirect("/parts"))
      .catch(err => console.log(err));
  });
  //------CUSTOMERS------------

  //Get all customers
  app.get("/api/customers", (req, res) => {
    db.Customer.findAll({}).then(dbCustomer => {
      res.json(dbCustomer);
    });
  });
  // POST route for saving a new customer
  app.post("/api/customers/add", (req, res) => {
    console.log(req.brand);
    db.Customer.create({
      name: req.body.name,
      email: req.body.email
    })
      .then(customer => res.redirect("/parts"))
      .catch(err => console.log(err));
  });
  //----REVIEWS-----
  //Get all reviews
  //-------------
  app.get("/reviews", (req, res) => db.Review.findAll({})
    .then(reviews => {console.log(reviews)
      res.render("reviews", {
        reviews
      })}
    )
    .catch(err => res.render("error", { error: err }))
  );

  //Add a review
  app.post("/api/reviews/add", (req, res) => {
    //console.log(req.brand);
    db.Review.create({
      // eslint-disable-next-line camelcase
      first_name: req.body.first_name,
      post: req.body.post
    })
      .then(review => res.redirect("/reviews"))
      .catch(err => console.log(err));
  });

  app.get("/search", (req, res) => res.render("search"));

  //Admin
  app.get("/admin", (req, res) => res.render("admin"));

  // Search for part orders
  app.get("/search", (req, res) => {
    let { term } = req.query;

    // Make lowercase
    term = term.toLowerCase();

    db.Part.findAll({ where: { [Op.like]: "%" + term + "%" } } )
      .then(parts => res.render("/search", { parts }))
      .catch(err => res.render("error", {error: err}));
  });

  // ORDERS
  app.post("/api/orders/add", (req, res) => {
    db.Order.create({
      orderDeck: req.body.orderDeck,
      orderTruck: req.body.orderTruck,
      orderWheels: req.body.orderWheels,
      orderBearings: req.body.orderBearings,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    })
      .then(order => res.redirect("/thankyou"))
      .catch(err => console.log(err));
  });

  // orders get all
  app.get("/api/orders", (req, res) => db.Order.findAll({})
    .then(orders => {console.log(orders)
      res.render("orders", {
        orders
      })}
    )
    .catch(err => res.render("error", { error: err }))
  );

  //thank you page
  app.get("/thankyou", (req, res) => res.render("thankyou"));

};
