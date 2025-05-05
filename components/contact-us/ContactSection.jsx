// "use client";
// import React from "react";

// const ContactSection = () => {
//   return (
//     <div className="p-5 lg:p-8 bg-[#F1F1F1] rounded-2xl flex flex-col gap-3 lg:gap-5">
//       <form className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="First Name"
//             className="border rounded-md p-3 w-full shadow-sm"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="border rounded-md p-3 w-full shadow-sm"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="border rounded-md p-3 w-full shadow-sm"
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             className="border rounded-md p-3 w-full shadow-sm"
//           />
//         </div>

//         <textarea
//           placeholder="Your Message"
//           className="border rounded-md p-3 w-full shadow-sm h-32 resize-none"
//         />

//         <button
//           type="submit"
//           className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 mt-4 transition duration-300 hover:scale-105  "
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactSection;

"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { send } from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required!";
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid!";
    }
    if (!values.phone) errors.phone = "Phone number is required!";
    if (!values.message) errors.message = "Message is required!";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      send("service", "template", "", formData)
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Message sent successfully!",
            confirmButtonColor: "#131b2a",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        })
        .catch(() => {
          setLoading(false);
          Swal.fire({
            icon: "error",
            text: "Something went wrong!",
          });
        });
    }
  };

  return (
    <div className="p-5 lg:p-8 bg-[#F1F1F1] rounded-2xl flex flex-col gap-3 lg:gap-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-md p-3 w-full shadow-sm"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md p-3 w-full shadow-sm"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone"
            className="border rounded-md p-3 w-full shadow-sm"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Subject"
            className="border rounded-md p-3 w-full shadow-sm"
            value={formData.subject || ""}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>

        <textarea
          placeholder="Your Message"
          className="border rounded-md p-3 w-full shadow-sm h-32 resize-none"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 mt-4 transition duration-300 hover:scale-105"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
