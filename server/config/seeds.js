    const db = require('./connection');
    const { User, Product, Category, Brand } = require('../models');

    db.once('open', async () => {
        await Category.deleteMany();

        const categories = await Category.insertMany([
            { name: 'Beauty & Health' },
            { name: 'Facial care' },
            { name: 'Hair care' },
            { name: 'Skin care' },
            { name: 'Nails' }
        ]);

        const brands = await Brand.insertMany([
            { name: 'Avéne' },
            { name: 'Dercos'},
            { name: 'Isdin'},
            { name: 'Vichy' },
            { name: 'TonyMoly' },
        ]);

        console.log('categories seeded');
        await Product.deleteMany();

        const products = await Product.insertMany([
            {
                name: 'Avéne Thermal Water',
                brand: brands[0].id,
                category: categories[3]._id,
                description: 'Soothes and softens skin. Helps minimize skin sensitivity. Provides anti-oxidant protection.',
                instruction: 'Use thermal spring water as a toner, spraying it on after cleansing, but before moisturizing your skin. Use it as a makeup setting spray. Throughout the day, mist your face with thermal spring water to leave it feeling fresh and soft.',
                image: 'sc-avene-thermal-water.jpg',
                price: 9.99,
                quantity: 40
            },
            {
                name: 'Avene Cicalfate',
                brand: brands[0].id,
                category: categories[0]._id,
                description: 'Rich, nourishing cream, infused with post-biotic restorative ingredient, helps protect skin from external aggressors while maintaining proper hydration for optimal skin restoration.',
                instruction: 'Product applied twice daily for 21 days. Repairing, protective and very well tolerated, Cicalfate+ Restorative Protection Cream is a multipurpose cream for the whole family\'s skin irritation needs.',
                image: 'bh-avene-cicalfate.jpg',
                price: .99,
                quantity: 50
            },
            {
                name: 'Dercos Energising Shampoo',
                brand: brands[1].id,
                category: categories[2]._id,
                description: 'Vichy Energising scalp Shampoo is designed to reduce the rate of hair loss and maintain the density of thinning hair due to hair breaking.',
                instruction: 'Massage in gently to wet hair. Rinse thoroughly with water. In combination with the Energising Conditioner for best results. Key Dermatological Ingredients.',
                image: 'de-dercos-energising-shampoo.jpg',
                price: 14.00,
                quantity: 100
            },
            {
                name: 'Masks Fresh To Go',
                brand: brands[4].id,
                category: categories[1]._id,
                description: 'Natural cellulose fiber ensures a firm but gentle adherence making it suitable for all skin types.',
                instruction: 'Apply mask on clean and towel dried face. Keep mask on face for 10-20 minutes. Remove mask and gently pat excess serum onto face and neck until fully absorbed.',
                image: 'tm-masks-fresh-to-go.jpg',
                price: 12.50,
                quantity: 50
            },
            {
                name: 'Si Nails',
                brand: brands[2].id,
                category: categories[4]._id,
                description: 'Strengthen your nails with an invisible and easy-to-apply finish. Thanks to its combination of ingredients, it provides the nail with more keratin, hydration, silica, and more protection.',
                image: 'is-si-nails.jpg',
                price: 14.00,
                quantity: 100
            },
            {
                name: 'Vichy Mineral 89',
                brand: brands[3].id,
                description: 'Our best-selling hyaluronic acid booster is formulated with Pure Hyaluronic Acid and 15 Mineral-Rich Vichy Volcanic Water to strengthen & repair your skin barrier. ',
                instruction: 'It is also fragrance-free and paraben-free. In the morning, apply 4-5 drops of the Lift-Active Vitamin C Serum to your clean, dry face, avoiding the eye area. Let sit for a few moments and then apply 2 drops of Mineral 89 to your face, avoiding the eye area. Mineral 89 may be used morning and evening.',
                image: 'fc-vichy-mineral.jpg',
                category: categories[1]._id,
                price: 10.60,
                quantity: 20
            },
            {
                name: 'Vichy Slow Age',
                brand: brands[3].id,
                description: 'It is formulated with three naturally inspired active ingredients: antioxidant Baïcalin, probiotic-derived Bifidus and Vichy Materializing Thermal Water.',
                instruction: 'Cleanse and tone the face. Follow with your usual serum. Using your ring finger, gently pat Slow Âge Eye Cream around the eye contour. Apply your usual moisturiser.',
                image: 'fc-vichy-slow-age.jpg',
                category: categories[1]._id,
                price: 24.43,
                quantity: 25
            }
        ]);

        console.log('products seeded');
        await User.deleteMany();

        await User.create({
            firstName: 'Ian',
            lastName: 'Elizalde',
            email: 'ian@mail.com',
            password: '12345',
            orders: [
                {
                    products: [products[0]._id, products[0]._id, products[1]._id]
                }
            ]
        });

        await User.create({
            firstName: 'Luis',
            lastName: 'Treviño',
            email: 'luis@mail.com',
            password: '12345',
            orders: [
                {
                    products: [products[0]._id, products[0]._id, products[1]._id]
                }
            ]
        });

        await User.create({
            firstName: 'Aaron',
            lastName: 'Marquez',
            email: 'aaron@mail.com',
            password: '12345',
            orders: [
                {
                    products: [products[0]._id, products[0]._id, products[1]._id]
                }
            ]
        });

        await User.create({
            firstName: 'Carlos',
            lastName: 'Aguirre',
            email: 'carlos@mail.com',
            password: '12345',
            orders: [
                {
                    products: [products[0]._id, products[0]._id, products[1]._id]
                }
            ]
        });

        console.log('users seeded');
        process.exit();
    });