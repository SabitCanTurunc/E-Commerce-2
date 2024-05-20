const addToCartModel = require("../../models/cartProduct");

const addToCartController = async (req, res) => {
    try {
        const { productId } = req.body;
        const currentUser = req.userId;

        // Belirli bir kullanıcının sepetinde ürün olup olmadığını kontrol edin
        const isProductAvailable = await addToCartModel.findOne({ productId: productId, userId: currentUser });

        console.log("isProductAvailable: ", isProductAvailable);

        if (isProductAvailable) {
            return res.json({
                message: "Urun sepette mevcut",
                success: false,
                error: true
            });
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser,
        };

        const newAddToCart = new addToCartModel(payload);
        const saveProduct = await newAddToCart.save();

        return res.json({
            data: saveProduct,
            message: "Urun sepete eklendi",
            success: true,
            error: false
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = addToCartController;
