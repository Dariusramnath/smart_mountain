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
  const { isConnected } = useAccount();
  const { signMessage } = useSignMessage();
  const { sendTransaction, data: hash } = useSendTransaction();
  const { open } = useWeb3Modal();
  const handleConnect = () => {
    open();
  };
  const {
    isLoading: isConfirming,
    error,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirming) {
      toast.loading("Transaction Pending");
    }
    toast.dismiss();

    if (isConfirmed) {
      toast.success("Transaction Successful", {
        action: {
          label: "View on Etherscan",
          onClick: () => {
            window.open(`https://explorer-testnet.morphl2.io/tx/${hash}`);
          },
        },
      });
    }
    if (error) {
      toast.error("Transaction Failed");
    }
  }, [isConfirming, isConfirmed, error, hash]);

  return (
    <main>
      {!isConnected ? (
        <div className="flex flex-row justify-evenly p-4 border-b border-gray-400">
          <img
            src="smart-mountain-bg.png"
            alt="smart mountain"
            className="w-96 h-96"
          />
          <div className="p-4 flex flex-col justify-evenly">
            <h1 className="text-4xl flex justify-center pb-14">
              Smart Mountain: Pioneering Climate Finance Innovation
            </h1>
            <p className=" max-w-[700px] mx-auto text-2xl">
              At Smart Mountain, we're on a mission to revolutionize how we
              value and finance nature-based solutions to climate change. We
              focus on mangrove ecosystems, which play a critical role in carbon
              sequestration, coastal protection, biodiversity preservation, and
              regenerating social and environmental impact to benefit
              communities.{" "}
            </p>
          </div>
        </div>
      ) : (
        <Tabs />
      )}
    </main>
  );
}
