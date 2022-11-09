import React, { FC, useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Field, Form, Formik } from "formik";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.css";
import * as Yup from "yup";

type Props = {};

interface ErrorText {
  text: string;
  fontSize?: string;
}

export const ErrorText: FC<ErrorText> = ({
  text,
  fontSize = "text-[9px] leading-[9.5px]",
}) => {
  return <p className={`text-error font-b-600 ${fontSize}`}>{text}</p>;
};

export interface LabelProps {
  label?: string;
  children?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const Label: FC<LabelProps> = ({ label }) => {
  return (
    <label className="text-[12px] leading-[18px] sm:text-[14px] sm:leading-[21px] text-neutral font-b-400 mb-4">
      {label}
    </label>
  );
};

const Contact = (props: Props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (values: any, onSubmitProps: any) => {
    onSubmitProps.resetForm(values);
  };

  const FirstStepValidation = Yup.object({
    name: Yup.string().required("Required Field"),
    email: Yup.string().required("Required Field"),
    message: Yup.string().required("Required Field"),
  });
  return (
    <div>
      <Head>
        <title>Real Focus</title>
        <meta name="description" content="Real focus company website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Poppins bg-likeBlack">
        <div className="py-[30px] px-[30px] md:py-[40px] md:px-[154px] h-[522px] w-full relative">
          <Header />
          <img
            src="/Topographic1.svg"
            // width={1174.16}
            // height={1160.79}
            alt="topographic picture"
            className="absolute top-[0px] left-[-50px] md:w-[300px] lg:w-[1174.16px]"
          />
          <div className="h-[463px] w-full flex items-center justify-center relative z-[3]">
            <h1
              className={`text-white text-[52px] md:text-[90px] font-b-700 ${styles.active}`}
            >
              CONTACT US
            </h1>
          </div>
        </div>

        <div className="bg-white relative z-[5] w-full flex items-center justify-center  px-[2rem] py-[3rem] md:py-[8rem] md:px-[8rem]">
          <Formik
            initialValues={data}
            validationSchema={FirstStepValidation}
            onSubmit={handleSubmit}
          >
            {(formProps) => (
              <Form>
                <Label label="Name" />
                <Field
                  type="text"
                  name="payrollName"
                  id="payrollName"
                  className={`py-[12px] sm:py-[14px] px-[16px] w-full border  text-[12px] sm:text-[14px] leading-[20px] bg-white rounded-lg placeholder:text-surface-container mb-2 sm:mb-3 sm:mt-2 ${
                    formProps.errors.name
                      ? "border-error"
                      : "border-surface-container"
                  }`}
                  placeholder="Enter your name"
                />
                {formProps?.errors?.name ? (
                  <ErrorText
                    text="Required Field"
                    fontSize="text-[8px] sm:text-[10px] leading-[16px]"
                  />
                ) : (
                  ""
                )}

                <Label label="Email" />
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className={`py-[12px] sm:py-[14px] px-[16px] w-full border  text-[12px] sm:text-[14px] leading-[20px] bg-white rounded-lg placeholder:text-surface-container mb-2 sm:mb-3 sm:mt-2 ${
                    formProps.errors.name
                      ? "border-error"
                      : "border-surface-container"
                  }`}
                  placeholder="Enter your email"
                />
                {formProps?.errors?.name ? (
                  <ErrorText
                    text="Required Field"
                    fontSize="text-[8px] sm:text-[10px] leading-[16px]"
                  />
                ) : (
                  ""
                )}

                <Label label="Message" />
                <textarea
                  name="message"
                  id="message"
                  className={`py-[12px] sm:py-[14px] px-[16px] w-full border  text-[12px] sm:text-[14px] leading-[20px] bg-white rounded-lg placeholder:text-surface-container mb-2 sm:mb-3 sm:mt-2 ${
                    formProps.errors.message
                      ? "border-error"
                      : "border-surface-container"
                  }`}
                  placeholder="Enter your message"
                />
                {formProps?.errors?.message ? (
                  <ErrorText
                    text="Required Field"
                    fontSize="text-[8px] sm:text-[10px] leading-[16px]"
                  />
                ) : (
                  ""
                )}

                <button
                  type="button"
                  className="rounded-[40px] h-[46px] w-[158px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-b-500 mx-auto flex justify-center items-center"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
