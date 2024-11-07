"use client";
import Image from "next/image";
import { ModeToggle } from "./Modetoggle";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Nav() {
  return (
    <header className="border-b border-slate-500 px-4 py-2">
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            SMART MOUNTAIN
          </li>

          <li>
            <ModeToggle />

          </li>
        </ul>
      </nav>
    </header>
  );
}
