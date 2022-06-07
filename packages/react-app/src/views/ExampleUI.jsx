import { Button, Card, DatePicker, Divider, Input, Progress, Slider, Spin, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { utils } from "ethers";
import { SyncOutlined } from "@ant-design/icons";

import { Address, Balance, Events, AddressInput } from "../components";

export default function ExampleUI({
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
  blockexplorer,
}) {
  const [newDelegate, setNewDelegate] = useState();
  const [currentDelegate, setCurrentDelegate] = useState();

  // const delegate = useContractReader(readContracts, "OP", "delegates", [address], 10000);

  const fetchDelegate = async () => {
    if (!readContracts || !readContracts.OP) return;
    const currDelegate = await readContracts.OP.delegates(address);
    console.log("Current delegate", currDelegate);
    setCurrentDelegate(currDelegate);
  };

  useEffect(() => {
    void fetchDelegate();
  }, [readContracts]);

  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 400, margin: "auto", marginTop: 64 }}>
        <h2>Current delegate</h2>
        <Address address={currentDelegate} ensProvider={mainnetProvider} blockexplorer={blockexplorer} fontSize={16} />
        <Divider />
        <div style={{ margin: 8 }}>
          <h2>Change delegate</h2>
          <p style={{ marginTop: 8 }}>
            Want to change delegate? See delegates{" "}
            <a href="https://app.optimism.io/delegates" target="_blank">
              here
            </a>{" "}
            and use the input below to set a new one. You can use an Ethereum address ("0x...") or an ENS name.
          </p>
          <AddressInput
            ensProvider={mainnetProvider}
            onChange={setNewDelegate}
            value={newDelegate}
            placeholder="Enter address or ENS name"
          />
          <Button
            style={{ marginTop: 8 }}
            onClick={async () => {
              /* look how you call setPurpose on your contract: */
              /* notice how you pass a call back for tx updates too */
              const result = tx(writeContracts.OP.delegate(newDelegate), update => {
                console.log("📡 Transaction Update:", update);
                if (update && (update.status === "confirmed" || update.status === 1)) {
                  console.log(" 🍾 Transaction " + update.hash + " finished!");
                  console.log(
                    " ⛽️ " +
                      update.gasUsed +
                      "/" +
                      (update.gasLimit || update.gas) +
                      " @ " +
                      parseFloat(update.gasPrice) / 1000000000 +
                      " gwei",
                  );
                  void fetchDelegate();
                }
              });
              console.log("awaiting metamask/web3 confirm result...", result);
              console.log(await result);
            }}
          >
            Set new delegate!
          </Button>
        </div>
      </div>
    </div>
  );
}
