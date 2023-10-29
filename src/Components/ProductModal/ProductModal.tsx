import { Button, Form, FormLabel, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import { Product } from "../../types/Product";

// Dependencias para validar formularios
import * as Yup from "yup";
import { useFormik } from "formik";
import { ProductService } from "../../services/ProductService";
//Notificaciones al usuario
import { toast } from "react-toastify";
import React from "react";

type ProductModalProps = {
    show: boolean;
    onHide: () => void;
    title: string;
    modalType: ModalType;
    prod: Product
    refreshData: React.Dispatch<React.SetStateAction<boolean>>
}


const ProductModal = ({show,onHide,title,modalType,prod, refreshData}: ProductModalProps) => {

//CREATE - UPDATE
const handleSaveUpdate =async (pro:Product) => {
    try {
        const isNew = prod.id === 0 ;
        if (isNew) {
            await ProductService.createProduct(pro);
        }else{
            await ProductService.updateProduct(pro.id,pro);
        }
        toast.success(isNew ? "Prosucto creado" : "Producto actualizado",{
            position : "top-center",
        });
        onHide();
        refreshData(prevState => !prevState);
    } catch (error) {
        console.error(error);
        toast.error("Ha ocurrido un error");
    }
};

//DELETE
const handleDelete = async () => {
    try {
        await ProductService.deleteProduct(prod.id);
        toast.success("Prosucto eliminado",{
            position : "top-center",
        });
        onHide();
        refreshData(prevState => !prevState);

    } catch (error) {
        console.error(error);
        toast.error("Ha ocurrido un error");

    }
}

// Yup, esquema de validacion

const validationSchema = () => {
    return Yup.object().shape({
        id: Yup.number().integer().min(0),
        title: Yup.string().required('El titulo es requerido'),
        price: Yup.string().min(0).required('El precio es requerido'),
        deescription: Yup.string().min(0).required('La descrip es requerida'),
        category: Yup.string().min(0).required('La categoria es requerida'),
        image: Yup.string().required('La imagen es requerida')

    });
};


//Formik, utiliza el esquema de validacion para crear un formulario dinamico y que bloquee
// en caso de haber errores.

const formik = useFormik({
    initialValues: prod,
    validationSchema: validationSchema(),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (obj: Product) => handleSaveUpdate(obj),

});


return (
<>
{modalType === ModalType.DELETE ? (

    <>
    <Modal show={show} onHide={onHide} centered backdrop = "static">
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>¿Esta seguro que desea eliminar el producto? <br />
            <strong>{prod.title}</strong>?</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>Cancelar</Button>
            <Button variant="primary" onClick={handleDelete}>Aceptar</Button>

        </Modal.Footer>
    </Modal>
    </>


) : (
    <>
    <Modal show = {show} onHide = {onHide} centered backdrop= "static" className="modal-x1">
        <Modal.Header>
            <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={formik.handleSubmit}>

{/*Form.Group por cada campo para dar de alta o modificar un producto */}
            {/*Titulos*/}
                <Form.Group controlId="formTitulo">
                    <FormLabel>Titulo</FormLabel>
                    <Form.Control
                    name = "title"
                    type = "text"
                    value = {formik.values.title || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(formik.errors.title && formik.touched.title)}
                    
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.title}
                    </Form.Control.Feedback>
                </Form.Group>


            {/*Precio*/}

            <Form.Group controlId="fromPrice">
                    <FormLabel>Precio</FormLabel>
                    <Form.Control
                    name = "price"
                    type = "number"
                    value = {formik.values.price || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(formik.errors.price && formik.touched.price)}
                    
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.price}
                    </Form.Control.Feedback>
                </Form.Group>

            {/*Descripcion*/}

                <Form.Group controlId="formDescription">
                    <FormLabel>Descripcion</FormLabel>
                    <Form.Control
                    name = "description"
                    type = "text"
                    value = {formik.values.description || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(formik.errors.description && formik.touched.description)}
                    
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.description}
                    </Form.Control.Feedback>
                </Form.Group>

            {/*Categoria*/}

                            <Form.Group controlId="formCategory">
                    <FormLabel>Categoria</FormLabel>
                    <Form.Control
                    name = "category"
                    type = "text"
                    value = {formik.values.category || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(formik.errors.category && formik.touched.category)}
                    
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.category}
                    </Form.Control.Feedback>
                </Form.Group>


            {/*Imagen*/}

            <Form.Group controlId="formImage">
                    <FormLabel>Imagen</FormLabel>
                    <Form.Control
                    name = "image"
                    type = "text"
                    value = {formik.values.image || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(formik.errors.image && formik.touched.image)}
                    
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.image}
                    </Form.Control.Feedback>
                </Form.Group>
            <Modal.Footer className="mt-4">
                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                <Button variant="primary" type="submit" disabled= {!formik.isValid}>Guardar</Button>
            </Modal.Footer>
                
            </Form>



            
        </Modal.Body>
    </Modal>
    </>
)}

</>
    )
}

export default ProductModal