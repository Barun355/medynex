import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button, Modal } from "antd";
import { MailOutlined, UserOutlined, IdcardOutlined } from "@ant-design/icons";

interface DemoFormInputs {
  name: string;
  email: string;
  designation: string;
}

const BookADemo: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoFormInputs>();

  const [visible, setVisible] = useState(false);

  const handleCloseModal = () => {
    setVisible(false);
  };

  const onSubmit: SubmitHandler<DemoFormInputs> = (data) => {
    console.log("Form Data:", data);
    // Call the API here
  };

  return (
    <div className="">
        <button
          className="bg-blue-600 hover:bg-blue-50 border hover:border-blue-900 hover:text-black border-none text-white py-4 rounded w-[10rem]"
          onClick={() => setVisible(true)}
        >
          Book a Demo
        </button>
      <Modal
        open={visible}
        onCancel={handleCloseModal}
        footer={null}
        className="w-fit flex flex-col justify-center"
      >
        <h1 className="text-4xl font-bold text-center text-blue-900">Book a Demo</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 p-6 w-full md:w-96 mx-auto"
        >
          <div>
            <Input
              placeholder="Name"
              prefix={<UserOutlined />}
              {...register("name", { required: "Name is required" })}
              className={`p-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Email"
              type="email"
              prefix={<MailOutlined />}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className={`p-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Input
              placeholder="Designation"
              prefix={<IdcardOutlined />}
              {...register("designation", {
                required: "Designation is required",
              })}
              className={`p-2 ${
                errors.designation ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.designation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.designation.message}
              </p>
            )}
          </div>

          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium transition duration-300"
          >
            Book it now.
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default BookADemo;
