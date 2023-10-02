import Button from "./components/Button";

function App() {
  return (
    <div className="grid h-screen justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-6 border border-slate-400">
          <p className="col-span-4 grid justify-end bg-[#7B7A89]">Nelson</p>
          <Button display={`AC`} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={`+/-`} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={`%`} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={`÷`} className="bg-[#F48637] border border-slate-400 p-4 "/>
          <Button display={7} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={8} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={9} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={`x`} className="bg-[#F48637] border border-slate-400 p-4 "/>
          <Button display={4} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={5} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={6} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={`-`} className="bg-[#F48637] border border-slate-400 p-4 "/>
          <Button display={1} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={2} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={3} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={`+`} className="bg-[#F48637] border border-slate-400 p-4 "/>
          <Button display={0} className="col-span-2 border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={`.`} className="border border-slate-400 p-4 bg-[#DCDBDC]"/>
          <Button display={`=`} className="bg-[#F48637] border border-slate-400 p-4"/>
      </div>
    </div>
  );
}

export default App;
