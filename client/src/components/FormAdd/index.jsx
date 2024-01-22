import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./index.scss"

const FormAdd = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("http://localhost:8000/");
    setdata(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8000/${id}`);
    fetchData();
  };

  return (
    <div id="form">
      <Formik
        initialValues={{ title: "", image: "", price: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Required"),
          image: Yup.string().required("Required"),
          price: Yup.number().required("Required").positive("menfi olmaz"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:8000/", values);
          fetchData();
        }}
      >
        <Form>
          <label htmlFor="title">Title</label>
          <Field name="title" type="string" />
          <ErrorMessage name="title" />

          <label htmlFor="image">Image</label>
          <Field name="image" type="string" />
          <ErrorMessage name="image" />

          <label htmlFor="price">Email Address</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => deleteData(item._id)}>x</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormAdd;
