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
        { name: 'Davines' },
        { name: 'Morphosis' },
        { name: 'Framesi' },
    ]);

    console.log('categories seeded');
    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Agua Thermal',
            brand: brands[0].id,
            category: categories[3]._id,
            description: 'Agua que ayuda en la reducción de la sensibilidad y la comezón, fortalece la barrera protectora de las pieles sensibles y es anti-oxidante equilibra las sensaciones de malestar y la sensibilidad de la piel para mantenerla sana.',
            image: 'sc-avene-thermal-water.jpg',
            price: 242.00,
            quantity: 40
        },
        {
            name: 'Crema Cicalfate',
            brand: brands[0].id,
            category: categories[0]._id,
            description: 'Crema para calmar, reparar y limpiar cualquier tipo de irritación de toda la familia, promueve y acelera la reparación epidérmica.',
            image: 'bh-avene-cicalfate.jpg',
            price: 298.00,
            quantity: 50
        },
        {
            name: 'Champú Energizante',
            brand: brands[1].id,
            category: categories[2]._id,
            description: 'Champú estimulante anti-caída, recupera un cabello más fuerte y vigoroso de la raíz a las puntas, el cabello recupera su fuerza y vitalidad de la raíz a las puntas.',
            image: 'de-dercos-energising-shampoo.jpg',
            price: 275.00,
            quantity: 100
        },
        {
            name: 'Mascarillas Fresh To Go',
            brand: brands[4].id,
            category: categories[1]._id,
            description: 'Mascarilla facial coreana formulada a base de tomate para una piel revitalizada.',
            image: 'tm-masks-fresh-to-go.jpg',
            price: 50.00,
            quantity: 50
        },
        {
            name: 'Si Nails',
            brand: brands[2].id,
            category: categories[4]._id,
            description: 'Fortalecedor de uñas desarrollado específicamente para proteger y mejorar el aspecto de las uñas, devolviéndoles un aspecto natural.',
            image: 'is-si-nails.jpg',
            price: 365.00,
            quantity: 100
        },
        {
            name: 'Mineral 89',
            brand: brands[3].id,
            description: 'Refuerza la función barrera de la piel para hacerla más fuerte contra las agresiones externas e internas como la contaminación, el estrés y la fatiga. ',
            image: 'fc-vichy-mineral.jpg',
            category: categories[1]._id,
            price: 540.00,
            quantity: 20
        },
        {
            name: 'Slow Age',
            brand: brands[3].id,
            description: 'Te ayudará a hidratar y fortalecer la piel para combatir las agresiones del ambiente. Utilízala como el "paso cero" de tu rutina de cuidado diario.',
            image: 'fc-vichy-slow-age.jpg',
            category: categories[1]._id,
            price: 520.00,
            quantity: 25
        },
        {
            name: 'Círculo Quick Fix',
            brand: brands[5].id,
            description: 'Rápida, Hidrata y desenreda el cabello en tres minutos. Contiene ácido hialurónico. Deja el cabello sedoso y suave. Hidrata y desenreda el cabello, haciéndolo suave, sedoso y funcional.',
            image: 'da-quick-fix-circle.jpg',
            category: categories[2]._id,
            price: 250.00,
            quantity: 25
        },
        {
            name: 'Círculo Restless',
            brand: brands[5].id,
            description:'Mascarilla invisible para quien desea cuidar del propio cabello mientras realiza otras actividades.',
            image: 'da-restless-circle.jpg',
            category: categories[2]._id,
            price: 250.00,
            quantity: 25
        },
        {
            name: 'Círculo Spotlight',
            brand: brands[5].id,
            description:' Aporta un brillo extraordinario al instante. Perfecta para un evento o momento especial. Deja el cabello sedoso, fácil de peinar y suave. Le da al cabello un brillo perfecto y realza el color.',
            image: 'da-spotlight-circle.jpg',
            category: categories[2]._id,
            price: 250.00,
            quantity: 25
        },
        {
            name: 'Infusion Aceite Verde',
            brand: brands[6].id,
            description:'Infusion es un aceite protector para el cabello, gracias a su unica composicion con mas de 98% de ingredientes naturales, el cabello se restaura y se cuida.',
            image: 'mo-hair-treatment.jpg',
            category: categories[2]._id,
            price: 420.00,
            quantity: 20
        },
        {
            name: 'Champú Densificador',
            brand: brands[6].id,
            description:'Champú anticaída para cabello fino y cuero cabelludo sensible',
            image: 'mo-densifying.jpg',
            category: categories[2]._id,
            price: 347.00,
            quantity: 30
        },
        {
            name: 'Champú Reforzante',
            brand: brands[6].id,
            description:'Champú anticaída para cabello debilitado y cuero cabelludo graso',
            image: 'mo-reinforcing.jpg',
            category: categories[2]._id,
            price: 347.00,
            quantity: 20
        },
        {
            name: 'Champú Verde Diario',
            brand: brands[6].id,
            description:'Para todo tipo de cabello; también ideal para uso diario.',
            image: 'mo-green-infusion.jpg',
            category: categories[2]._id,
            price: 347.00,
            quantity: 20
        },
        {
            name: 'Champú Revitalizador Intensivo',
            brand: brands[6].id,
            description:'Hidrata profundamente y ejerce una acción delicada en el cuero cabelludo.',
            image: 'mo-ultimate-care.jpg',
            category: categories[2]._id,
            price: 415.00,
            quantity: 20
        },
        {
            name: 'Acondicionador Revitalizador Intensivo',
            brand: brands[6].id,
            description:'Hidrata profundamente y ejerce una acción delicada en el cuero cabelludo.',
            image: 'mo-ultimate.jpg',
            category: categories[2]._id,
            price: 415.00,
            quantity: 20
        },
        {
            name: 'Acondicionador Verde Diario',
            brand: brands[6].id,
            description:'Hidrata profundamente y ejerce una acción delicada en el cuero cabelludo.',
            image: 'mo-green-conditioning.jpg',
            category: categories[2]._id,
            price: 347.00,
            quantity: 20
        },
        {
            name: 'Acondicionador Cuerpo Instantaneo',
            brand: brands[6].id,
            description:'Hidrata profundamente y ejerce una acción delicada en el cuero cabelludo.',
            image: 'mo-instant-bodifying.jpg',
            category: categories[2]._id,
            price: 330.00,
            quantity: 20
        },
        {
            name: '119 For Me',
            brand: brands[7].id,
            description:'Para peinados lisos efecto espejo',
            image: 'mo-instant-bodifying.jpg',
            category: categories[2]._id,
            price: 225.00,
            quantity: 0
        },
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
                products: [products[4]._id, products[0]._id, products[1]._id]
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
                products: [products[2]._id, products[0]._id, products[1]._id]
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
                products: [products[3]._id, products[2]._id, products[1]._id]
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
                products: [products[0]._id, products[7]._id, products[3]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Fer',
        lastName: 'Sosa',
        email: 'fer@mail.com',
        password: '12345',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Omar',
        lastName: 'Patel',
        email: 'omar@mail.com',
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