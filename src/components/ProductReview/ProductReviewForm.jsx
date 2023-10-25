import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Grid, Typography ,Button} from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { styled } from '@mui/system';

const ProductReviewForm = () => {

  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
 

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );





  
  const products = ["washing machine fix", "Product 2", "Product 3", "Product 4"];

  const productOptions = products.map((product, key) => (
    <option value={product} key={key}>
      {product}
    </option>
  ));

  // const validationSchema = Yup.object({
  //   product: Yup.string().required("Please select a product").oneOf(products),
  //   number: Yup.number().min(1).max(10).required(),
  //   name: Yup.string().required(),
  //   textarea: Yup.string().required(),
  //   lastname: Yup.string().required(),
  //   Address: Yup.string().required(),
  //   Buildingno: Yup.number().min(1).max(10).required(),
  //   ApartmentNumber: Yup.number().min(1).max(10).required(),
  //   ZipCode: Yup.number().min(1).max(10).required(),
  //   wouldRecommend: Yup.boolean().default(false),
  // });

  // const initialValues = {
  //   _type: "productReview",
  //   number: "",
  //   name: "",
  //   lastname: "",
  //   Address: "",
  //   Buildingno: "",
  //   ApartmentNumber: "",
  //   ZipCode: "",
  //   product: "",
  //   textarea: "",
    
  // };

  // const onSubmit = (values) => {
  //   alert(JSON.stringify(values, null, 2));
  // };

  // const renderError = (message) => <p className="help is-danger">{message}</p>;

  return (
    <Formik
      //  initialValues={initialValues}
      //  validationSchema={validationSchema}
      //  onSubmit={async (values, { resetForm }) => {
      //    await onSubmit(values);
      //  resetForm();
      // }}
    >
      <Form>
        <Grid
          className="productreviewform"
          container
          direction="row"
        >
          <Grid container spacing={2}  item xs={12} sm={12} lg={12} md={12} xl={12}>
            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
              xl={6}
              className="field productreviewformfiled"
            >
              <label className="label" htmlFor="name">
                Phone Number
              </label>
              <Grid className="control productreviewformfiledcontrol">
                <Field
                  number="number"
                  type="number"
                  className="input"
                  placeholder="9876548910"
                />
                {/* <ErrorMessage number="number" render={renderError} /> */}
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
              xl={6}
              className="field productreviewformfiled"
            >
              <label className="label" htmlFor="email">
                Job Id
              </label>
              <Grid className="control productreviewformfiledcontrol">
                <Field
                  JobId="JobId"
                  type="text"
                  className="input"
                  placeholder="432YFVXQ123"
                />
                {/* <ErrorMessage JobId="JobId" render={renderError} /> */}
              </Grid>
            </Grid>
          </Grid>

           <Grid container spacing={2} item xs={12} sm={12} lg={12} md={12} xl={12}>
            <Grid item xs={12} sm={12} lg={12} md={12} xl={12} className="heading-personal-information">
              <Typography>Personal Information</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
              xl={6}
              className="field productreviewformfiled"
            >
              <label className="label" htmlFor="name">
                First Name
              </label>
              <Grid className="control productreviewformfiledcontrol">
                <Field
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Alexander"
                />
                {/* <ErrorMessage name="name" render={renderError} /> */}
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
              xl={6}
              className="field productreviewformfiled"
            >
              <label className="label" htmlFor="email">
                Last Name
              </label>
              <Grid className="control productreviewformfiledcontrol">
                <Field
                  lastname="lastname"
                  type="text"
                  className="input"
                  placeholder="Last Name"
                />
                {/* <ErrorMessage lastname="lastname" render={renderError} /> */}
              </Grid>
            </Grid>
          </Grid> 
          <Grid container spacing={2} item xs={12} sm={12} lg={12} md={12} xl={12}>
            <Grid item xs={12} sm={12} lg={12} md={12} xl={12} className="heading-personal-information">
              <Typography>Address Information</Typography> 
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
              xl={6}
              className="field productreviewformfiled"
            >
              <label className="label" htmlFor="name">
                Street Address
              </label>
              <Grid className="control productreviewformfiledcontrol">
                <Field
                  Address="Address"
                  type="text"
                  className="input"
                  placeholder="Chimney Rock"
                />
                {/* <ErrorMessage Address="Address" render={renderError} /> */}
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
              xl={6}
              className="field productreviewformfiled"
            >
              <label className="label" htmlFor="email">
                Building Number
              </label>
              <Grid className="control productreviewformfiledcontrol">
                <Field
                  Buildingno="Buildingno"
                  type="text"
                  className="input"
                  placeholder="Building Number"
                />
                {/* <ErrorMessage Buildingno="Buildingno" render={renderError} /> */}
              </Grid>
            </Grid>
            
          </Grid>
        



          <Grid container spacing={2} item xs={12} sm={12} lg={12} md={12} xl={12}>
          <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
              xl={6}
              className="field productreviewformfiled"
            >
              <label className="label" htmlFor="name">
                Apartment Number
              </label>
              <Grid className="control productreviewformfiledcontrol">
                <Field
                  ApartmentNumber="ApartmentNumber"
                  type="text"
                  className="input"
                  placeholder="128"
                />
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
              xl={6}
              className="field productreviewformfiled"
            >
              <label className="label" htmlFor="email">
                Zip Code
              </label>
              <Grid className="control productreviewformfiledcontrol">
                <Field
                  ZipCode="ZipCode"
                  type="number"
                  className="input"
                  placeholder="000000"
                />
                {/* <ErrorMessage ZipCode="ZipCode" render={renderError} /> */}
              </Grid>
            </Grid>
          </Grid>





          <Grid container spacing={2} item xs={12} sm={12} lg={12} md={12} xl={12}>
            <Grid item xs={12} sm={12} lg={12} md={12} xl={12}  className="heading-personal-information">
              <Typography>Job Details</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
              xl={6}
              className="field productreviewformfiled"
            >
              <label className="label" htmlFor="product">
                Job Type
              </label>
              <Grid className="control productreviewformfiledcontrol">
                <Field
                  name="product"
                  as="select"
                  className="select is-fullwidth"
                >
                  <option value={""}>Select a product</option>
                  {productOptions}
                </Field>
                {/* <ErrorMessage name="product" render={renderError} /> */}
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
              xl={6}
              className="field productreviewformfiled"
            >
              <label className="label" htmlFor="review">
                Job Title
              </label>

              <Grid className="control productreviewformfiledcontrol">
                <Field
                  name="product"
                  as="select"
                  className="select is-fullwidth"
                >
                  <option value={""}>Select a product</option>
                  {productOptions}
                </Field>
                {/* <ErrorMessage name="product" render={renderError} /> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid container  item xs={12} sm={12} lg={12} md={12} xl={12}>
            <Grid item xs={12} sm={12} lg={12} md={12} xl={12} className="control textairia productreviewformfiledcontrol productreviewformfiled">
            <label className="label" htmlFor="product">
            Job Details
            </label>
            <Textarea className="text-emptyboxes" aria-label="empty textarea" placeholder="The Engine Suddenly Stops Working ):-" />
              {/* <ErrorMessage textarea="textarea" render={renderError} /> */}
            </Grid>
          </Grid>
          

          <Grid   className="button-boxes-product-page" container spacing={2} item xs={12} sm={12} lg={12} md={12} xl={12}>
            <Grid  className="button-boxes-product-pageone" item
                  xs={12}
                  sm={12}
                  lg={6}
                  md={6}
                  xl={6} >
                    <Button className="button-boxes-product-pagebutton cancelbutton" >Cancel</Button>
                  </Grid>
            <Grid className="button-boxes-product-pageone" item
                  xs={12}
                  sm={12}
                  lg={6}
                  md={6}
                  xl={6}>
                     <Button className="button-boxes-product-pagebutton savebutton" >Save</Button>
                  </Grid>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default ProductReviewForm;
