"use client";

import { CarProps, VansProps } from "@/types";
import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import VansList from "@/data/VansList";
import Link from "next/link";

interface VanDetailsProps {
  vanIsOpen: boolean;
  closeModal: () => void;
  van: any;
}

const VanDetails = ({ vanIsOpen, closeModal, van }: VanDetailsProps) => {
  return (
    <>
      <Transition appear show={vanIsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100 scal-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-white rounded-full"
                    type="button"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-cover bg-blue-800 dark:bg-gray-700 bg-center rounded-lg mb-4">
                      <Image
                        src={van.imageUrl}
                        alt="car model"
                        fill
                        priority
                        className="rounded-md object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className=" text-xl">
                      <strong>Name:</strong> {van?.name}
                    </h2>

                    <div className="mt-3 flex flex-col flex-wrap gap-4 ">
                      <h4>
                        <strong>Type:</strong> {van?.type}
                      </h4>
                      <h4>
                        <strong>Price:</strong> {van?.price}
                      </h4>
                      <h4>
                        <strong>Description:</strong> {van?.description}
                      </h4>
                      <Link
                        onClick={() =>
                          alert(
                            `Great news! Your car has been successfully reserved. Please make sure to pick up your car within the next 3 hours, otherwise, the reservation will be automatically canceled. Safe travels! \n\nDestionation: Visättra Backe 71, 141 58 Huddinge Municipality, Sweden`
                          )
                        }
                        href="/"
                        className=" w-full text-center py-[16px]
          rounded-full bg-blue-600 text-white text-[14px] leading-[17px]"
                      >
                        Book The Van
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default VanDetails;
