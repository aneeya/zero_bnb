 import { useState } from "react";
 import Button from "../components/custom/Button";
 import PopUpLayout from "../components/layout/PopUpLayout";

export default function Example() {
  const [ state, setState ] = useState<string>('')
  const [ popup, setPopup ] = useState(false)
  return(
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log(state)
        setPopup(true)
      }}>
        <input name="name" type='text' placeholder="이름입력" onChange={(e) => setState(e.target.value)}/>
        <Button stype="normalButton" >click</Button>
      </form>
      {popup?
        <PopUpLayout
          text="테스트"
          subText="테스트"
          img="img"
          page="home"
          toPage="/"/>
        : null}
    </div>
  )
}

// import React, { useState } from "react";

// export default function Example() {
//   const [password, setPassword] = useState("");
//   const [disabled, setDisabled] = useState(false);
//   const [ popup, setPopup ] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

//   const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
//     setDisabled(true);
//     event.preventDefault();
//     await new Promise((r) => setTimeout(r, 1000));
//     alert(`변경된 패스워드: ${password}`);
//     setDisabled(false);
//     setPopup(true)
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//         />
//         <button type="submit" disabled={disabled}>
//           비밀번호 변경
//         </button>
//       </form>
//       {popup?
//         <PopUpLayout
//            text="테스트"
//           subText="테스트"
//            img="img"
//            page="home"
//            toPage="/"/>
//        : null}
//     </div>
//   );
// }