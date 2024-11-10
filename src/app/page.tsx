"use client";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  useAccount,
  useSendTransaction,
  useSignMessage,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import { toast } from "sonner";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row justify-evenly border-b border-gray-400">
        <div
          className="relative flex flex-col justify-evenly align-center items-center h-96 bg-cover bg-center text-white w-full"
          style={{ backgroundImage: "url('/smart-mountain-bg.png')" }}

        >
          <h1 className="text-4xl flex font-bold justify-center max-w-[700px]">
            Smart Mountain: Pioneering Climate Finance Innovation
          </h1>
          <p className=" max-w-[700px] mx-auto text-2xl">
            At Smart Mountain, we're on a mission to revolutionize how we value
            and finance nature-based solutions to climate change. We focus on
            mangrove ecosystems, which play a critical role in carbon
            sequestration, coastal protection, biodiversity preservation, and
            regenerating social and environmental impact to benefit communities.{" "}
          </p>
        </div>
      </div>
      {/* <Tabs /> */}
    </main>
  );
}
