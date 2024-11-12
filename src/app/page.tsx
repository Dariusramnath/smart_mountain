"use client";
import Tabs from "@/components/Tabs";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSolutionExpanded, setIsSolutionExpanded] = useState(false);
  const [isProgressExpanded, setIsProgressExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const toggleSolutionExpand = () => setIsSolutionExpanded(!isSolutionExpanded);
  const toggleProgressExpand = () => setIsProgressExpanded(!isProgressExpanded);
  return (
    <main>
      <div className="flex flex-row lg:justify-evenly border-b border-gray-400">
        <div
          className="flex flex-col lg:justify-evenly pt-14 lg:pt-0 pl-2 w-full bg-no-repeat items-center lg:h-96 h-3/4 bg-cover lg:bg-cover lg:bg-center text-white w-full"
          style={{ backgroundImage: "url('/smart-mountain-bg.png')" }}
        >
          <h1 className="text-4xl px-6 lg:px-0 flex font-bold justify-center max-w-[700px] pb-14 lg:pb-0">
            Smart Mountain: Pioneering Climate Finance Innovation
          </h1>
          <p className=" max-w-[700px] mx-auto lg:text-2xl text-xl px-6 lg:px-0 pb-6 lg:pb-0">
            At Smart Mountain, we&apos;re on a mission to revolutionize how we
            value and finance nature-based solutions to climate change. We focus
            on mangrove ecosystems, which play a critical role in carbon
            sequestration, coastal protection, biodiversity preservation, and
            regenerating social and environmental impact to benefit communities.{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center pt-4 ">
        <div className="flex flex-col lg:w-4/6 w-full px-3 shadow-lg">
          <img
            src="/smart-mountain-bg.png"
            alt="smart mountain header"
            className="w-full h-72 object-cover object-center rounded-t-lg"
          />
          <div className="lg:px-14 px-2 pt-8">
            <div
              className="p-4 border border-gray-300 shadow-md rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg"
              onClick={toggleExpand}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">The Challenge</h1>
                <FaChevronDown
                  className={`text-xl transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <p
                className={`pt-3 text-lg transition-all duration-300 ease-in-out overflow-hidden ${
                  isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                Despite their immense value, mangrove restoration projects
                struggle to attract capital from traditional financial systems.
                These projects are often overlooked due to their high-risk
                profile and returns, which are difficult to quantify using
                conventional financial approaches. As a result, climate
                industries remain underdeveloped and isolated, leaving us
                ill-equipped to face the growing climate emergency.
              </p>
            </div>

            {/* Our Solution */}
            <div
              className="p-4 border border-gray-300 shadow-md rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg mt-6"
              onClick={toggleSolutionExpand}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">Our Solution</h1>
                <FaChevronDown
                  className={`text-xl transition-transform duration-300 ${
                    isSolutionExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                className={`mt-3 text-lg transition-all duration-300 ease-in-out overflow-hidden ${
                  isSolutionExpanded
                    ? "max-h-[300px] overflow-y-auto opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pt-2">
                  Smart Mountain is developing the world&apos;s first artificial
                  intelligence (AI) platform to optimise the potential of
                  integrated mangrove management systems backed by alternative
                  financial instruments to derisk a validated environmental
                  credit market. We&apos;re creating a groundbreaking ecosystem
                  that:
                </p>
                <ul className="list-disc list-inside pt-4">
                  <li className="pt-2">
                    Aligns environmental credits from mangroves with alternative
                    financial instruments.
                  </li>
                  <li className="pt-2">
                    Leverages Central Bank Digital Currencies (CBDCs),
                    stablecoins, tokenized deposits and debt-for-nature swaps
                    accordingly.
                  </li>
                  <li className="pt-2">
                    Uses AI and blockchain technology to de-risk investments and
                    manage value exchanges captured over integrated mangrove
                    management systems.
                  </li>
                </ul>
                <p className="pt-6">
                  Our platform will enable stakeholders to transform
                  traditionally non-revenue-generating mangrove management
                  projects into commercially viable investments, unlocking the
                  full potential of its ecosystems.
                </p>
                <h1 className="pt-8 font-semibold text-2xl">
                  Market-enabling social and environmental impact and
                  regeneration
                </h1>
                <p className="pt-6">
                  We&apos;ve identified a significant market opportunity in the
                  Caribbean:
                </p>
                <ul className="list-disc list-inside">
                  <li className="pt-2">
                    Once our pilot is deployed to optimise the potential of the
                    beachhead market in Jamaica fully, it will enable markets
                    with a social and environmental impact of approximately $378
                    million, spanning over 100 km2 of mangroves.
                  </li>
                  <li className="pt-2">
                    Taking the following 22 countries adopting CBDCs and other
                    alternative instruments, it will enable markets with a
                    social and environmental impact of approximately $246.4
                    billion, spanning over 56,251 km2 of mangroves.
                  </li>
                  <li className="pt-2">
                    Given that over 1.5 million km2 of mangroves exist
                    worldwide, mangroves, apart from their interconnections to
                    neighbouring ecosystems, can enable an emergent $4
                    trillion-plus natural asset class.
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Progress */}
            <div
              className="p-4 border border-gray-300 shadow-md rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg mt-6"
              onClick={toggleProgressExpand}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">
                  Our Progress and Next Steps
                </h1>
                <FaChevronDown
                  className={`text-xl transition-transform duration-300 ${
                    isProgressExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                className={`pt-3 text-lg transition-all duration-300 ease-in-out overflow-hidden ${
                  isProgressExpanded
                    ? "max-h-[300px] overflow-y-auto opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pt-2">
                  Smart Mountain has gained significant traction, placing second
                  in Latin America and the Caribbean in the 2023 Climate
                  Launchpad competition and being inducted into the US
                  AID-UNIDO-REEP PFAN project pipeline. Hackernoon also
                  nominated Smart Mountain as one of the startups of the year
                  for 2024.
                </p>
                <p className="pt-6">We&apos;re currently focused on:</p>
                <ol className="list-disc list-inside">
                  <li className="pt-2">
                    Advancing stakeholder engagement to develop, iterate and
                    refine our pilot and business model.
                  </li>
                  <li className="pt-2">
                    Securing nonequity and equity-based pre-seed funding to
                    build and promote our pilot project in Jamaica.
                  </li>
                  <li className="pt-2">
                    Onboard investors and potential customers, select observers
                    for capital raises and develop our proof-of-concept and
                    Minimum Viable Product (MVP), which are close to market
                    interests.
                  </li>
                </ol>
                <p className="pt-4">
                  We aim to launch our MVP by 2026 when carbon capture and
                  sequestration baseline data in Jamaica will be available.
                </p>
              </div>
            </div>

            {/* Join */}
            <div className="pl-4">
              <h1 className="pt-8 text-4xl font-bold">
                Join Us in Revolutionizing Climate Finance
              </h1>

              <p className="pt-2 text-lg">
                By investing in Mangrove Markets, you&apos;re not just backing a
                business – you&apos;re supporting a solution that makes
                conservation financially sustainable. We&apos;re creating a
                future where protecting natural assets and generating returns go
                hand in hand. Contact us to learn more about how you can be part
                of this groundbreaking initiative in climate finance innovation.
              </p>
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
