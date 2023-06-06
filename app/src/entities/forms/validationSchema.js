import * as Yup from 'yup'


export const createDishSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required'),
    category: Yup.string().required('Category is required'),
    // image: Yup.string().required('Image is required'),
    type: Yup.string().required('Type is required'),
    duration: Yup.number().required('Wait time is required'),
})