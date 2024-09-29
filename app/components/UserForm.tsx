import { Toast, ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

// Define the interface for the form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const UserForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/form-submit", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast({
          title: "Success ",
          description: "Form Submitted Succesfully",
        });
        setFormData({ name: "", email: "", message: "" }); // Reset form after submission
      } else {
        toast({
          title: "Error",
          description: "Error Submitting the form",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[35rem] mx-auto p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700"
    >
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
        Contact Us
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-400"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-400"
      ></textarea>
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200 dark:bg-blue-600 dark:hover:bg-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
