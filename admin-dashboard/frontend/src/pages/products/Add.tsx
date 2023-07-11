import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import axios from "axios";

interface FormValues {
  name: string;
  image: File | null; // File type for storing a file
  description: string;
  category: string;
  price: number;
  quantity: number;
}

export default function Add() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    image: null,
    description: "",
    category: "",
    price: 0,
    quantity: 0,
  });

  const submitForm = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(formValues);
    console.log(`${import.meta.env.VITE_PRODUCT_SERVICE}/products`);

    axios
      .post(`${import.meta.env.VITE_PRODUCT_SERVICE}/products`, formValues)
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <div className="text-3xl">Add Product</div>
      <Form.Root>
        <Form.Field name="product-name">
          <Form.Label>Name</Form.Label>
          <div className="flex flex-row gap-x-10">
            <Form.Control asChild>
              <input
                className="border-2"
                onChange={(e) =>
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    name: e.target.value,
                  }))
                }
                required
              />
            </Form.Control>
            <Form.Message match="valueMissing">
              Please enter a value
            </Form.Message>
          </div>
        </Form.Field>
        <Form.Field name="image-upload">
          <Form.Label>Image</Form.Label>
          <div className="flex flex-row gap-x-10">
            <Form.Control asChild>
              <input className="border-2" type="file" required />
            </Form.Control>
            <Form.Message match="valueMissing">
              Please upload a product image
            </Form.Message>
          </div>
        </Form.Field>
        <Form.Field name="product-description">
          <Form.Label>Description</Form.Label>
          <div className="flex flex-row gap-x-10">
            <Form.Control asChild>
              <input
                className="border-2"
                type="text"
                onChange={(e) =>
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    description: e.target.value,
                  }))
                }
                required
              />
            </Form.Control>
            <Form.Message match="valueMissing">
              Please enter a description for the product
            </Form.Message>
          </div>
        </Form.Field>
        <Form.Field name="product-description">
          <Form.Label>Category</Form.Label>
          <div className="flex flex-row gap-x-10">
            <Form.Control asChild>
              <input
                className="border-2"
                type="text"
                onChange={(e) =>
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    category: e.target.value,
                  }))
                }
                required
              />
            </Form.Control>
            <Form.Message match="valueMissing">
              Please enter a category for the product
            </Form.Message>
          </div>
        </Form.Field>
        <Form.Field name="product-description">
          <Form.Label>Price</Form.Label>
          <div className="flex flex-row gap-x-10">
            <Form.Control asChild>
              <input
                className="border-2"
                type="number"
                onChange={(e) =>
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    price: parseInt(e.target.value),
                  }))
                }
                required
              />
            </Form.Control>
            <Form.Message match="valueMissing">
              Please enter a price for the product
            </Form.Message>
          </div>
        </Form.Field>
        <Form.Field name="product-description">
          <Form.Label>Quantity</Form.Label>
          <div className="flex flex-row gap-x-10">
            <Form.Control asChild>
              <input
                className="border-2"
                type="number"
                onChange={(e) =>
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    name: e.target.value,
                  }))
                }
                required
              />
            </Form.Control>
            <Form.Message match="valueMissing">
              Please enter a quantity for the product
            </Form.Message>
          </div>
        </Form.Field>
        <Form.Submit asChild>
          <button className="border-2" onClick={(e) => submitForm(e)}>
            Add
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
