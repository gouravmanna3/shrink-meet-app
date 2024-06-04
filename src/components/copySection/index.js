import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy, X } from "lucide-react";

import styles from "./index.module.css";
import { useState } from "react";

const CopySection = (props) => {
  const [showToast, setShowToast] = useState(true);
  const { roomId } = props;

  const roomIdCopied = () => {};

  return (
    <div
      className={`${
        showToast ? "absolute" : "hidden"
      } flex flex-col bg-slate-100 border border-white w-96 rounded bottom-12 left-8 `}
    >
      <div className="flex justify-between px-6 py-4 items-center ">
        <h2 className="text-lg">Your meeting's ready</h2>
        <X onClick={() => setShowToast(false)} className="cursor-pointer" />
      </div>
      <div className="px-6 text-sm">
        <p>share this meeting link with others you want in the meeting</p>
        <div className="py-4 px-2 my-4 rounded-lg bg-slate-200 flex justify-between">
          <span>{roomId}</span>
          <CopyToClipboard text={roomId} onCopy={roomIdCopied}>
            <Copy className="mr-2 cursor-pointer"></Copy>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default CopySection;
