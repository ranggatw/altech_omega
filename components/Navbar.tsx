"use client";
import React, { useState } from "react";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Modal from "./Modal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <h1 className="regular-24 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all">
          High{" "}
          <span className="regular-24 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-50">
            Up
          </span>
        </h1>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold "
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
          onClick={openModal}
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
      <Modal showModal={showModal} closeModal={closeModal} />
    </nav>
  );
};

export default Navbar;
