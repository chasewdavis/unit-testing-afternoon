const cart = require('./cart.js');
const cars = require('./data/cars.js');

describe('Properties', () => {
    test('cart should be an empty array...', () => {
        expect( Array.isArray(cart.cart) ).toEqual( true )
        expect( cart.cart.length ).toEqual( 0 )
    })
    test('total should be the number 0', () => {
        expect( cart.total ).toBe( 0 )
    }) 
});

describe('Methods', () => {

    afterEach(() => {
        cart.cart = [];
        cart.total = 0;
    });

    test('add to cart method', () => {

        cart.addToCart( cars[0] )
        cart.addToCart( cars[1] )

        expect( cart.cart.length ).toEqual( 2 );
        expect( cart.cart[0] ).toEqual( cars[0] );
        expect( cart.cart[1] ).toEqual( cars[1] );
    });

    test('add to cart total should increase / decrease correctly', () => {
        cart.addToCart( cars[0] )
        cart.addToCart( cars[8] )
        cart.addToCart( cars[2] )

        expect( cart.total ).toEqual( cars[0].price + cars[8].price + cars[2].price )
    });

    test('remove from cart', () => {
        cart.addToCart( cars[0] )
        cart.addToCart( cars[1] )
        cart.addToCart( cars[2] )

        cart.removeFromCart( 2, cars[1].price )
        
        expect(cart.cart[0]).toEqual( cars[0] );
        expect(cart.cart[1]).toEqual( cars[2] );
    });

    test('remove from cart price test', () => {
        cart.addToCart( cars[0] )
        cart.addToCart( cars[1] )
        cart.addToCart( cars[2] )

        cart.removeFromCart( 1, cars[1].price)

        expect(cart.total).toEqual( cars[0].price + cars[2].price )
        
    })

    test('checkout test', () => {

        cart.addToCart( cars[0] )
        cart.addToCart( cars[1] )
        cart.addToCart( cars[2] )

        cart.checkout();

        expect(cart.cart.length).toEqual(0)
        expect(cart.total).toEqual(0)
    })
});

