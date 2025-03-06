

//function for add product




const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // Safely access files, ensure they exist
        const image1 =  req.files.image1[0];
        const image2 =  req.files.image2[0];
        const image3 =  req.files.image3[0] ;
        const image4 =  req.files.image4[0] ;

        // Check if the required images are present
        if (!image1 || !image2 || !image3 || !image4) {
            return res.status(400).json({
                success: false,
                message: "All image fields are required."
            });
        }

        console.log(name, description, price, category, subCategory, sizes, bestseller);
        console.log(image1, image2, image3, image4);

        res.json({
            success: true,
            message: "Product added successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}
//function for list product
const listProducts = async (req,res)=>{



    
}

//function for removing product
const removeProduct = async (req,res)=>{



    
}

//function for single product info
const singleProduct = async (req,res)=>{



    
}

export {listProducts, addProduct, removeProduct, singleProduct}