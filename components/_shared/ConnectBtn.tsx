import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";
import { addressShortFormat } from "../../lib";
import { useUserContext } from "../../context/UserContext";
import useConnect from "../../hooks/useConnect";
import MetaMaskSDK from "@metamask/sdk";

const injected = injectedModule();

init({
  wallets: [injected],
  chains: [
    {
      id: "0x13881",
      token: "MATIC",
      label: "Polygon Mumbai",
      rpcUrl: "https://rpc-mumbai.maticvigil.com",
    },
  ],
  accountCenter: {
    desktop: {
      enabled: false,
      containerElement: "body",
    },
    mobile: {
      enabled: false,
      containerElement: "body",
    },
  },
});

const ConnectBtn = () => {
  const { handleConnect } = useConnect();
  const [{ address }] = useUserContext();

  return (
    <div
      onClick={handleConnect}
      className="px-6 py-2 text-white bg-indigo-600 rounded-md cursor-pointer w-full mt-3 lg:mt-0 text-center lg:ml-5"
    >
      {address ? addressShortFormat(address) : "Connect"}
    </div>
  );
};

export default ConnectBtn;
