const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll()
    .then( dbCategories => res.status( 200 ).json( dbCategories ) )
    .catch( err => {
      console.log( err );
      res.status( 500 ).json( err );
    } )
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne( {
    where: { id: req.params.id },
    include: [
      // TODO: Check if this is correct. What if there are more than one associated product?
      {
        model: Product,
        attributes: [ 'id', 'product_name', 'price', 'stock' ]
      }
    ]
  } )
    .then( dbCategory => {
      if ( !dbCategory ) {
        res.status( 404 ).json( { message: 'No Category Found' } );
        return;
      }
      res.status( 200 ).json( dbCategory );
    } )
    .catch( err => {
      console.log( err );
      res.status( 500 ).json( err );
    } )
});

router.post('/', (req, res) => {
  // create a new category
  // validate req.body has all appropriate parts ('category_name')
  if ( !req.body.category_name ) {
    return res.status( 400 ).json( { message: 'Category Incomplete' } );
  }

  Category.create( {
    category_name: req.body.category_name
  }, {
  } )
    .then( dbCategory => res.status( 200 ).json( dbCategory ) )
    .catch( err => {
      console.log( err );
      res.status( 500 ).json( err );
    } )
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  if ( !req.body.category_name ) {
    return res.status( 400 ).json( { message: 'Category Incomplete' } );
  }
  Category.update( {
    category_name: req.body.category_name
  }, {
    where: { id: req.params.id }
  } )
    .then( dbCategory => {
      if ( !dbCategory ) {
        res.status( 404 ).json( { message: 'No Category Found' } );
        return;
      }
      res.status( 200 ).json( dbCategory );
    } )
    .catch( err => {
      console.log( err );
      res.status( 500 ).json( err );
    } )
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy( {
    where: { id: req.params.id }
  } )
    .then( dbCatergory => {
      if ( !dbCatergory ) {
        res.status( 404 ).json( { message: 'Category Not Found' } );
        return;
      }
      res.status( 200 ).json( dbCatergory );
    } )
    .catch( err => {
      console.log( err );
      res.status( 500 ).json( err );
    } );
});

module.exports = router;
