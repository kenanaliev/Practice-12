import React from 'react'
import Navbar from '../../Navbar'
import FormAdd from '../../../components/FormAdd'
import { Helmet } from 'react-helmet-async'

const Add = () => {
  return (
    <>
    <Helmet><title>Add</title></Helmet>
    <Navbar></Navbar>

    <main>
        <FormAdd></FormAdd>
    </main>
    </>
  )
}

export default Add