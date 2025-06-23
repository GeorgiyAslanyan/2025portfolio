"use client";
import React, { useState, useRef } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpotlightCard from "./SpotlightCard";

const Contacts = () => {
  const [userInput, setUserInput] = useState({
    tg: "", 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitTime = useRef(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime.current;

    if (timeSinceLastSubmit < 10000) {
      toast.warn(`Пожалуйста, подождите ${Math.ceil((10000 - timeSinceLastSubmit)/1000)} сек.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);
    lastSubmitTime.current = now;

    try {
      const response = await axios.post("/api/contacts", {
        telegram: userInput.tg 
      });

      if (response.status === 200) {
        toast.success("Сообщение отправлено успешно!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setUserInput({ tg: "" });
      } else {
        toast.error("Не удалось отправить сообщение.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Ошибка при отправке сообщения.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex w-full justify-center pt-5 pb-10" id="contacts">
      <SpotlightCard>
        <div className="flex flex-col gap-2 max-w-[450px] p-8">
          <div className="flex gap-2 items-center">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition text-zinc-200"
            >
              <path
                d="M5.02167 10.7924L18.9112 5.3963C19.6841 5.09602 20.0706 4.94587 20.3553 5.01778C20.6035 5.08048 20.8121 5.24357 20.9282 5.46569C21.0614 5.72045 20.9929 6.11922 20.8561 6.91676L19.2978 15.9976C19.0609 17.3785 18.9424 18.069 18.5687 18.454C18.2421 18.7906 17.7909 18.9869 17.3148 18.9996C16.7703 19.0141 16.1609 18.6403 14.9422 17.8927L12.3564 16.3065C11.5797 15.83 11.1913 15.5918 11.0238 15.2712C10.8769 14.9902 10.8398 14.667 10.9193 14.3614C11.01 14.0129 11.3348 13.6974 11.9845 13.0665L16.3506 8.82576L8.99682 13.1112C8.40764 13.4546 8.11303 13.6263 7.79583 13.7198C7.51466 13.8028 7.22139 13.8403 6.92771 13.831C6.59638 13.8205 6.26604 13.7288 5.60537 13.5454L5.16013 13.4219C3.92874 13.0802 3.31304 12.9093 3.13094 12.6193C2.97337 12.3684 2.95698 12.0571 3.08736 11.7919C3.23805 11.4854 3.83259 11.2544 5.02167 10.7924Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="text-white">Связаться со мной</p>
          </div>
          <p className="text-zinc-400">
            Если вам понравились мои решения или у вас есть вопросы — напишите
            мне в Telegram: @ваш_ник. Свяжусь в ближайшее время! 😊
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 pt-2">
            <input
              value={userInput.tg} 
              onChange={handleChange}
              required
              placeholder="@ваш_ник"
              type="text"
              name="tg" 
              id="tg"
              className="bg-inherit w-full rounded-md px-3 py-1 border border-zinc-700"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-3 py-1 rounded-md w-fit font-semibold ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-lime-400'
              }`}
            >
              {isSubmitting ? 'отправка...' : 'отправить'}
            </button>
          </form>
        </div>
      </SpotlightCard>
      
      {/* Toast контейнер для отображения уведомлений */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Contacts;