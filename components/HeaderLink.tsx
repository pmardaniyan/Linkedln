import { NextPage } from "next";

interface Props {
  text: string,
  feed: string
}

const HeaderLink: NextPage<Props> = ({ text }: Props) => {
  return (
    <>
      <div className="cursor-pointer flex flex-col justify-center items-center">
        <h4 className="text-sm text-gray-600 hover:text-blue-300 ">{text}</h4>
      </div>
     
    </>
  );
};

export default HeaderLink;
