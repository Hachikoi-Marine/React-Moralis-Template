import { useWeb3ExecuteFunction } from "react-moralis";
import { Moralis } from "moralis";
import { ABI, CONTRACT_ADX } from "../utils/contractData";

export function GetOwner() {
  const { data, error, fetch, isFetching, isLoading } =
    useWeb3ExecuteFunction();

  const options = {
    abi: ABI,
    contractAddress: CONTRACT_ADX,
    functionName: "owner",
  };

  return (
    <div>
      {error && <ErrorMessage error={error} />}
      <button onClick={() => fetch({ params: options })} disabled={isFetching}>
        Fetch data
      </button>
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
}
