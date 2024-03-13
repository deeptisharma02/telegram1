import React from "react";
import logo from "../assests/image.png";
import bird from "../assests/bird.jpeg";
import google from "../assests/google.webp";
import apple from "../assests/apple.png";
import { Link, Outlet } from "react-router-dom";
function HomeScreen() {
  const listItems = [
    "About",
    "Help Center",
    " Terms of Service",
    "Privacy Policy",
    " Cookie Policy",
    "Ads info",
    "Blog",
    "Status",
    "Carrres",
    "Brand Resources",
    "Advertsing",
    "Marketing",
    "Twitter for Business",
    "Developers",
    "Directory",
    "Settings",
    " © 2021 Twitter, Inc.",
  ];
  return (
    <>
      <section className="mx-16">
        <div className="flex gap-10  ">
          <div>
            <img src={logo} className="w-[50vw]" />
          </div>
          <div className="m-20">
            <img src={bird} className="w-16" />
            <h1 className="text-5xl font-semibold">Happening now</h1>
            <h3 className="text-xl mt-6 font-semibold">Join Twitter today</h3>
            <div className="flex border p-4 rounded-3xl my-2">
              <div>
                <img src={google} className="w-10" />
              </div>
              <div className="font-bold">Sign up with Google</div>
            </div>
            <div className="flex border p-4 rounded-3xl my-2">
              <div>
                <img src={apple} className="w-10" />
              </div>
              <div className="font-bold">Sign up with Apple</div>
            </div>

            <p className="border p-4 rounded-3xl my-2 font-bold">
              <Link to="/signin">Sign up with phone or email</Link>
            </p>
            <p>
              By singing up you agree to the{" "}
              <span className="text-blue-400">Terms of Service</span> and{" "}
              <span className="text-blue-400">Privacy Policy</span>, including{" "}
              <span className="text-blue-400">Cookie Use</span>.
            </p>
            <p className="pt-5">
              {" "}
              Already have an account?
              <span className="text-blue-400">
                {" "}
                <Link to="/signup">Log in</Link>
              </span>
            </p>
          </div>
          <Outlet />
        </div>
        <div className="my-5 text-center">
          <ul className="flex justify-around">
            {listItems.map((item, index) => (
              <li key={index} className=" text-[10px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default HomeScreen;
