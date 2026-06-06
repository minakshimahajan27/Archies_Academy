import React from "react";
import Footer from "../components/Footer";

export default function FAQ() {
  const faqs = [
    {
      question: "What courses do you offer?",
      answer:
        "We offer Professional Makeup, Bridal Makeup, Hair Styling, Skin Care, Nail Art, and Beauty Therapy courses.",
    },
    {
      question: "Do you provide certificates after course completion?",
      answer:
        "Yes, students receive a professional certificate after successfully completing their course.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll by visiting our academy, contacting us via WhatsApp, or filling out the contact form on our website.",
    },
    {
      question: "Do you offer bridal makeup services?",
      answer:
        "Yes, we provide professional bridal makeup, engagement makeup, party makeup, and fashion makeup services.",
    },
    {
      question: "What products do you use?",
      answer:
        "We use premium and trusted beauty brands to ensure the best results for our clients and students.",
    },
    {
  question: "What is the duration of your makeup courses?",
  answer:
    "Course duration varies depending on the program. We offer short-term as well as professional certification courses."
},
{
  question: "Do you provide practical training?",
  answer:
    "Yes, all students receive hands-on practical training under experienced beauty professionals."
},
{
  question: "Can beginners join your courses?",
  answer:
    "Absolutely! Our courses are designed for both beginners and experienced beauty professionals."
},
{
  question: "Do you offer job placement assistance?",
  answer:
    "Yes, we provide career guidance and placement support to help students start their beauty careers."
},
{
  question: "How can I book a salon appointment?",
  answer:
    "You can book an appointment by calling us, messaging on WhatsApp, or visiting our academy."
},
{
  question: "Do you offer bridal makeup packages?",
  answer:
    "Yes, we offer customized bridal makeup packages for weddings, engagements, and special occasions."
},
{
  question: "Are your trainers certified professionals?",
  answer:
    "Yes, our trainers are certified beauty experts with extensive industry experience."
},
{
  question: "Do you provide study materials?",
  answer:
    "Yes, students receive professional learning materials and guidance throughout the course."
},
{
  question: "What payment methods do you accept?",
  answer:
    "We accept cash, UPI, bank transfers, and other convenient payment methods."
},
{
  question: "Can I visit the academy before enrolling?",
  answer:
    "Yes, you are welcome to visit our academy, meet our trainers, and explore our facilities before enrollment."
}
  ];

  return (
    <>
      <style>
        {`
          .faq-section{
            padding:80px 0;
            background:#f8f9fa;
          }

          .faq-subtitle{
            color:#B88A4A;
            font-weight:600;
            letter-spacing:1px;
            text-transform:uppercase;
          }

          .faq-title{
            font-size:2.5rem;
            font-weight:700;
            margin-bottom:50px;
          }

          .faq-card{
            border:none;
            border-radius:12px;
            overflow:hidden;
            margin-bottom:15px;
            box-shadow:0 5px 15px rgba(0,0,0,0.08);
          }

          .accordion-button{
            font-weight:600;
            padding:18px 20px;
          }

          .accordion-button:not(.collapsed){
            background:#B88A4A;
            color:#fff;
            box-shadow:none;
          }

          .accordion-button:focus{
            box-shadow:none;
            border:none;
          }

          .accordion-body{
            color:#666;
            line-height:1.8;
          }
        `}
      </style>

      <section className="faq-section">
        <div className="container">
          <div className="text-center">
            <h5 className="all-subtitle">FAQ</h5>
            <h2 className="all-main-title mb-5">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item faq-card" key={index}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      index !== 0 ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>

                <div
                  id={`faq${index}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}