import React from "react";
import pattern from "../images/pattern.webp";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SignUp = () => {
  return (
    <section className="flex justify-center items-center p-4 lg:p-8 h-[94vh]">
      <main className="w-0 md:w-72 lg:w-[500px] overflow-hidden  h-full ">
        <img src={pattern} alt="" className="w-full h-full rounded-3xl" />
      </main>
      <main className="flex-1 h-full flex justify-center items-center flex-col gap-5">
        <h1 className="text-2xl font-semibold">Join Us Today</h1>
        <p className="text-neutral-500 text-lg">
          Enter your email and password to register.
        </p>
        <form className="w-full md:w-96 lg:w-[500px]">
          <div>
            <label className="font-semibold" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@gmail.com"
              className="w-full p-3 bg-transparent focus:border-black rounded-lg outline-none border-2 border-neutral-200 mt-1 mb-3"
            />
          </div>
          <div className="flex items-center gap-2 mb-6 cursor-pointer">
            <input
              type="checkbox"
              id="check1"
              className="rounded-lg bg-transparent w-5 h-5 duration-300 hover:bg-neutral-200"
            />
            <label className="cursor-pointer" htmlFor="check1">
              I agree the{" "}
              <Link className="font-semibold underline" to={"/"}>
                Terms and Conditions
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="bg-neutral-800 w-full text-white font-semibold text-lg p-2 rounded-lg mb-10 duration-300 hover:shadow hover:shadow-neutral-800"
          >
            Register now
          </button>
          <button
            type="submit"
            className="bg-transparent w-full font-semibold text-lg p-2 rounded-lg mb-6 duration-300 border-2 border-neutral-200 shadow hover:shadow-lg flex justify-center items-center gap-2"
          >
            <FaGoogle />
            Sign In with google
          </button>
          <button
            type="submit"
            className="bg-transparent w-full font-semibold text-lg p-2 rounded-lg mb-6 duration-300 border-2 border-neutral-200 shadow hover:shadow-lg flex justify-center items-center gap-2"
          >
            <FaXTwitter />
            Sign In with twitter
          </button>
          <p className="text-center font-semibold text-neutral-500">
            Already have an account?{" "}
            <Link className="text-black" to={"/signin"}>
              Sign in
            </Link>
          </p>
        </form>
      </main>
    </section>
  );
};

export default SignUp;
